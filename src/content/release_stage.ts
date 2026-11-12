import { Accommodation } from "./accommodation";
import { Category } from "./category";
import { Poi } from "./poi";

/** One stage of a release with its destination and accommodation. */
export interface ReleaseStage {
  category: Category;
  destination: Poi[] | null;
  accommodation: Accommodation | null;
}
