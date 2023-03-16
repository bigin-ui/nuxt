export const runtimeConfig = {
  public: {
    isDev: process.env.NODE_ENV !== "production",
    auth: {
      clientId: "1STPARTY.APP",
      clientSecret: "P@ss4FirstPartyApp",
      grantType: {
        password: "password",
        refresh: "refresh_token",
        external: "external",
      },
      externalProvider: {
        confirmEmail: "confirmEmail",
        resetPassword: "resetPassword",
      },
      scope:
        "resourceApi offline_access profile fileServiceApi notificationApi",
    },
    api: {
      url: process.env.NUXT_PUBLIC_API_URL,
      systemId: process.env.NUXT_PUBLIC_API_SYSTEM_ID,
    },
  },
};
