import { ProductCollectionConstraint } from "./productcollection_constraint";

export interface ProductCollection {
  link: string;
  name: string;
  constraint: ProductCollectionConstraint;
}