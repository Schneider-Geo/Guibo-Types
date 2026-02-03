import { Bounds } from "./bounds";
import { Location } from "./location";

export interface Bundle {
  id: number | null;
  link: string;
  customId: string;
  account: string;
  name: string;
  archive: number;
  names: Record<string, string>;
  description: string;
  descriptions: Record<string, string>;
  fullname: string;
  fullnames: Record<string, string>;
  image: string;
  type: string;
  status: string;
  libraryType: string;
  statusText: string;
  enabled: boolean;
  maxZoom: number | null;
  center: Location;
  boundingBox: Bounds;
  settings: Record<string, string>;
  myOwn: boolean;
  ownerName: string;
  shared: boolean;
  logo: string;
  lastOpened: string;
}