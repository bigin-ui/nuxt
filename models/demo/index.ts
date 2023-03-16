import { BaseListModel, BaseModel } from "../common";

export interface DemoKeyValueObject {
  name: string;
  displayName: string;
  value: string;
  displayValue: string;
}

export interface DemoModel extends BaseModel {
  name: string;
  epic: number;
  userStory: number;
  employee_name: DemoKeyValueObject;
  purpose: DemoKeyValueObject;
  nation: DemoKeyValueObject;
  state: DemoKeyValueObject | null;
  county: DemoKeyValueObject | null;
  city: DemoKeyValueObject | null;
  fields: DemoKeyValueObject[];
  version: number;
}

export interface DemoList extends BaseListModel<DemoModel> {}
