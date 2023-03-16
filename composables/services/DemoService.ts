import { DemoModel } from "~~/models";

export const useDemoService = () => ({
  getDemoData: () => useApiFetch<DemoModel[]>("/v1/DemoData"),
});
