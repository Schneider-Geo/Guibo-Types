import { ProductCollectionConstraint } from "./productcollection_constraint";

export interface ProductCollectionInput{
  account: string;
  name: string;
  constraint: ProductCollectionConstraint;
}