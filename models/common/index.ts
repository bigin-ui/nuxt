export interface BaseModel {
  id?: string | number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  createdBy?: any;
  updatedBy?: string;
  isDeleted?: boolean;
}

export interface BaseListModel<T> {
  total: number;
  entities: T[];
}

export interface BaseSearchModel {
  keyword?: string;
  start?: number;
  length?: number;
  orderBy?: string;
}
