import { FetchError } from "ohmyfetch";
import { joinURL } from "ufo";
import { TokenModel } from "~~/models";

export default defineEventHandler(async (event) => {
  const { apiUrl, auth, systemId } = useRuntimeConfig();
  const uri = joinURL(apiUrl, "/connect/token");
  const body = {
    grant_type: auth.grantType.password,
    client_id: auth.clientId,
    scope: auth.scope,
    ...(await readBody(event)),
  };

  try {
    const { access_token, refresh_token } = await $fetch<TokenModel>(uri, {
      method: "post",
      body,
      headers: { "System-Id": systemId },
    });

    setCookie(event, "access_token", access_token);
    setCookie(event, "refresh_token", refresh_token);

    return true;
  } catch (error) {
    sendError(event, error as FetchError);
  }
});
