import { jwt_decode } from "jwt-decode-es";
import { FetchError } from "ohmyfetch";

export default defineEventHandler(async (event) => {
  const token = getCookie(event, "access_token");
  const refreshToken = getCookie(event, "refresh_token");
  const { url } = event.node.req;
  const isValidRoute =
    url?.startsWith("/api/") && !url.startsWith("/api/connect/");

  if (isValidRoute) {
    if (token) {
      const decodedToken = jwt_decode(token);
      const needRefreshToken =
        decodedToken.exp! < Math.floor(Date.now() / 1000) + 5 * 60; // expires lesser than 5 minutes from now

      if (needRefreshToken) {
        try {
          const { access_token, refresh_token } = await $fetch(
            "/api/connect/refresh",
            {
              method: "post",
              body: {
                refresh_token: refreshToken,
              },
            }
          );

          event.node.req.headers.authorization = `Bearer ${access_token}`;
          setCookie(event, "access_token", access_token);
          setCookie(event, "refresh_token", refresh_token);
        } catch (error) {
          sendError(event, error as FetchError);
        }
      } else {
        event.node.req.headers.authorization = `Bearer ${token}`;
      }
    } else {
      sendError(event, {
        statusCode: 401,
        statusMessage: "Unauthorized access",
        name: "access_token",
        message: "Invalid access token",
      });
    }
  }
});
