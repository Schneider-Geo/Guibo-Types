import { ProductCollectionConstraint } from "./productcollection_constraint";

export interface ProductCollection {
  link: string;
  name: Record<string, string>;
  constraint: ProductCollectionConstraint;
}