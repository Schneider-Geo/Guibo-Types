import { ProductCollectionConstraint } from "./productcollection_constraint";

export interface ProductCollection {
  link: string;
  names: Record<string, string>;
  constraint: ProductCollectionConstraint;
}