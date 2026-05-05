import { Tag } from "./tag";

export type ProductType = 'HIKING' | 'CYCLING' | 'ROADBIKE' | 'GRAVEL';

export interface Product {
  link?: string;
  customId?: string;
  account?: string;
  names?: Record<string, string>;
  descriptions?: Record<string, string>;
  shortdescriptions?: Record<string, string>;
  images?: string[];
  webUrl?: string;
  minPrice?: number;
  minDays?: number;
  maxDays?: number;
  regions?: Tag[];
  type?: ProductType;
}