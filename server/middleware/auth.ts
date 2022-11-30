import { jwt_decode } from "jwt-decode-es";

export default defineEventHandler((event) => {
  const token = getCookie(event, "access_token");
  const { url } = event.node.req;
  const isValidRoute = url?.startsWith("/api/") && url !== "/api/auth/login";

  if (isValidRoute) {
    if (token) {
      const decodedToken = jwt_decode(token);
      console.log("[Token]", decodedToken);
    } else {
      sendError(event, {
        statusCode: 401,
        statusMessage: "Unauthorized access",
        name: "",
        message: "",
      });
    }
  }
});
