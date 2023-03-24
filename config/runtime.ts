export const runtimeConfig = {
  public: {
    auth: {
      clientId: "1STPARTY.APP",
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
