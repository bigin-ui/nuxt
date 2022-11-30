export default defineEventHandler(async (event) => {
  const uri = `https://fakestoreapi.com/${event.context.params.endpoint}`;

  if (["post", "put", "patch"].includes(event.node.req.method!.toLowerCase())) {
    return await $fetch(uri, {
      method: event.node.req.method,
      body: await readBody(event),
    });
  }

  return await $fetch(uri);
});
