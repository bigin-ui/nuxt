import { AsyncData, FetchResult, UseFetchOptions } from "#app";
import { FetchError } from "ohmyfetch";
import { NitroFetchRequest } from "nitropack";
import { KeyOfRes, PickFrom } from "nuxt/dist/app/composables/asyncData";
import { Ref } from "vue";

export function useApiFetch<
  ResT = void,
  ErrorT = FetchError,
  ReqT extends NitroFetchRequest = NitroFetchRequest,
  _ResT = ResT extends void ? FetchResult<ReqT> : ResT,
  Transform extends (res: _ResT) => any = (res: _ResT) => _ResT,
  PickKeys extends KeyOfRes<Transform> = KeyOfRes<Transform>
>(
  request: Ref<ReqT> | ReqT | (() => ReqT),
  opts?: UseFetchOptions<_ResT, Transform, PickKeys>
): AsyncData<PickFrom<ReturnType<Transform>, PickKeys>, ErrorT | null> {
  const headers: Record<string, any> = useRequestHeaders(["cookie"]);

  return useFetch(request, { headers, ...opts });
}

export function useApiLazyFetch<
  ResT = void,
  ErrorT = FetchError,
  ReqT extends NitroFetchRequest = NitroFetchRequest,
  _ResT = ResT extends void ? FetchResult<ReqT> : ResT,
  Transform extends (res: _ResT) => any = (res: _ResT) => _ResT,
  PickKeys extends KeyOfRes<Transform> = KeyOfRes<Transform>
>(
  request: Ref<ReqT> | ReqT | (() => ReqT),
  opts?: Omit<UseFetchOptions<_ResT, Transform, PickKeys>, "lazy">
): AsyncData<PickFrom<ReturnType<Transform>, PickKeys>, ErrorT | null> {
  const headers: Record<string, any> = useRequestHeaders(["cookie"]);

  return useLazyFetch(request, { headers, ...opts });
}
