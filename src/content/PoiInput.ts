import {Tag} from "./tag";
import {Category} from "./category";

export interface PoiInput {
  externalId?: string;
  remark?: string;
  names: Record<string, string>;
  descriptions: Record<string, string>;
  lat: number;
  lng: number;
  icon?: string;
  attributes: Record<string, string>;
  tags?: Array<Tag>;
  category: Category;
}
