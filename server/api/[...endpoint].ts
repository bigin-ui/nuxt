import { withQuery, joinURL } from "ufo";

export default defineEventHandler(async (event) => {
  const { apiUrl, systemId } = useRuntimeConfig();
  const query = getQuery(event);
  const endpoint = event.context.params.endpoint;
  const { authorization } = event.node.req.headers;
  let uri = joinURL(apiUrl, "/v1", endpoint);
  const headers = {
    authorization,
  } as Record<string, any>;

  if (endpoint.toLowerCase().startsWith("/identity/account/")) {
    headers["System-Id"] = systemId;
  }

  const options: Record<string, any> = { headers };

  if (query) {
    uri = withQuery(uri, query);
  }

  if (["post", "put", "patch"].includes(event.node.req.method!.toLowerCase())) {
    options.method = event.node.req.method;
    options.body = await readBody(event);
  }

  const { _data } = await $fetch.raw(uri, options);

  return _data;
});
