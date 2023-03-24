import { omitBy } from "lodash-unified";
import { joinURL, QueryObject, withQuery } from "ufo";

export const wQuery = (url: string, query: QueryObject) =>
  withQuery(
    url,
    omitBy(query, (v) => v === "")
  );

export const downloadFile = async (
  uri: string,
  options: { method: any; body?: any },
  filename: string
) => {
  const response = await useApiFetch(uri, {
    ...options,
    responseType: "blob",
  });
  const url = window.URL.createObjectURL(new Blob([response as any]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const formatURL = (base: string, endpoint: string) => {
  const _base = base.endsWith("/") ? base.replace(/.$/, "") : base;
  const _endpoint = !endpoint.startsWith("/") ? `/${endpoint}` : endpoint;

  return joinURL(_base, _endpoint);
};
