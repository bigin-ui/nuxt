import { FetchError } from "ohmyfetch";
import { joinURL } from "ufo";
import { TokenModel } from "~~/models";

export default defineEventHandler(async (event) => {
  const { apiUrl, auth, systemId } = useRuntimeConfig();
  const uri = joinURL(apiUrl, "/connect/token");
  const payload = await readBody(event);
  const body = {
    grant_type: auth.grantType.refresh,
    client_id: auth.clientId,
    ...payload,
  };

  try {
    const { access_token, refresh_token } = await $fetch<TokenModel>(uri, {
      method: "post",
      body,
      headers: { "System-Id": systemId },
    });

    return { access_token, refresh_token };
  } catch (error) {
    sendError(event, error as FetchError);
  }
});
