export default defineEventHandler(async (event) => {
  const uri = "https://fakestoreapi.com/auth/login";
  const { token } = await $fetch<{ token: string }>(uri, {
    method: "post",
    body: await readBody(event),
  });

  setCookie(event, "access_token", token);

  return true;
});
