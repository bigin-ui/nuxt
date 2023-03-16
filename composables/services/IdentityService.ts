import { ProfileModel, TokenModel } from "~~/models";
import { wQuery } from "~~/utils";

export const useIdentityService = () => {
  const { public: publicConfig } = useRuntimeConfig();
  const accessToken = useAccessToken();
  const refreshToken = useRefreshToken();
  const accessTokenCookie = useCookie("access_token");
  const refreshTokenCookie = useCookie("refresh_token");
  const headers = {
    "System-Id": publicConfig.api.systemId,
  };

  return {
    connect: async (data: { username: string; password: string }) => {
      const body = {
        grant_type: publicConfig.auth.grantType.password,
        client_id: publicConfig.auth.clientId,
        scope: publicConfig.auth.scope,
        ...data,
      };

      try {
        const { access_token, refresh_token } =
          await usePublicApiFetch<TokenModel>("/connect/token", {
            method: "POST",
            body,
            headers,
          });

        accessToken.value = access_token;
        refreshToken.value = refresh_token;
        accessTokenCookie.value = access_token;
        refreshTokenCookie.value = refresh_token;

        return true;
      } catch (error) {
        throw error;
      }
    },
    connectExternal: async (data: {
      external_provider: string;
      external_token: string;
    }) => {
      const body = {
        grant_type: publicConfig.auth.grantType.external,
        client_id: publicConfig.auth.clientId,
        scope: publicConfig.auth.scope,
        ...data,
      };

      try {
        const { access_token, refresh_token } =
          await usePublicApiFetch<TokenModel>("/connect/token", {
            method: "POST",
            body,
            headers,
          });

        accessToken.value = access_token;
        refreshToken.value = refresh_token;

        return true;
      } catch (error) {
        throw error;
      }
    },
    profile() {
      return useApiFetch<ProfileModel>("/v1/Identity/Account/Profile");
    },
    sendResetPasswordLink(data: { email: string }) {
      return useApiFetch("/v1/Identity/Account/SendLinkResetPassword", {
        method: "post",
        headers,
        body: data,
      });
    },

    resetPassword(data: { userId: string; password: string; token: string }) {
      return useApiFetch("/v1/Identity/Account/ResetPassword", {
        method: "put",
        headers,
        body: data,
      });
    },

    changePassword(data: { oldPassword: string; password: string }) {
      return useApiFetch<boolean>("/v1/Identity/Account/ChangePassword", {
        method: "put",
        headers,
        body: data,
      });
    },

    checkValidToken(data: {
      token: string;
      purpose: string;
      purposeKey?: string;
      userId: string;
    }) {
      const queries: {
        Token: string;
        Purpose: string;
        PurposeKey?: string;
        UserId: string;
      } = {
        Token: data.token,
        Purpose: data.purpose,
        UserId: data.userId,
      };
      if (data.purposeKey) {
        queries.PurposeKey = data.purposeKey;
      }
      return useApiFetch(
        wQuery("/v1/Identity/Account/CheckValidToken?", queries),
        {
          headers,
        }
      );
    },

    sendReactivateLink(data: { email: string }) {
      return useApiFetch("/v1/Identity/Account/SendLinkReactivate", {
        method: "post",
        headers,
        body: data,
      });
    },

    checkExistsEmail(email: string) {
      return $fetch<boolean>(
        wQuery(
          `${publicConfig.api.url}/v1/Identity/Account/CheckExistsEmail?`,
          {
            email,
          }
        ),
        {
          headers,
        }
      );
    },
  };
};
