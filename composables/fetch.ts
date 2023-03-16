import { jwt_decode } from "jwt-decode-es";
import { NitroFetchOptions, NitroFetchRequest } from "nitropack";
import { joinURL } from "ufo";
import { TokenModel } from "~~/models";

export async function useApiFetch<T = unknown>(
  endpoint: string,
  opts?: NitroFetchOptions<NitroFetchRequest>
) {
  const { public: publicConfig } = useRuntimeConfig();
  const accessToken = useAccessToken();
  const refreshToken = useRefreshToken();
  const accessTokenCookie = useCookie("access_token");
  const refreshTokenCookie = useCookie("refresh_token");
  const isValidToken = () => {
    return (
      parseInt(`${jwt_decode(accessToken.value!).exp}` || "0") >
      Math.floor(Date.now() / 1000) + 30 * 60
    );
  };

  // console.log(endpoint, Date.now());

  const renewToken = async () => {
    try {
      const url = joinURL(publicConfig.api.url, "/connect/token");
      const { access_token, refresh_token } = await $fetch<TokenModel>(url, {
        method: "POST",
        headers: { "System-Id": publicConfig.api.systemId },
        body: {
          grant_type: publicConfig.auth.grantType.refresh,
          client_id: publicConfig.auth.clientId,
          refresh_token: refreshToken.value,
        },
      });
      accessToken.value = access_token;
      refreshToken.value = refresh_token;
      accessTokenCookie.value = access_token;
      refreshTokenCookie.value = refresh_token;
    } catch (error) {
      navigateTo("/auth/logout", { redirectCode: 301 });
    }
  };

  if (!!accessToken.value) {
    if (!isValidToken()) {
      await renewToken();
    }

    const headers: Record<string, any> = {
      Authorization: `Bearer ${accessToken.value}`,
    };
    const url = joinURL(publicConfig.api.url, endpoint);
    return $fetch<T>(url, { headers, ...opts });
  } else {
    console.log("[ApiFetch] No access token");
  }
}

export function usePublicApiFetch<T = unknown>(
  endpoint: string,
  opts?: NitroFetchOptions<NitroFetchRequest>
) {
  const { public: publicConfig } = useRuntimeConfig();
  const url = joinURL(publicConfig.api.url, endpoint);

  return $fetch<T>(url, opts);
}
