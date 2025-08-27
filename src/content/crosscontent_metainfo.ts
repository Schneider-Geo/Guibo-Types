import { Icon } from "./icon";

export interface CrosscontentMetainfo {
   type: string;
   link: string;
   name: string;
    bundle?: string;
   descriptions?: Record<string, string>;
   icon?: Icon;
   names?: Record<string, string>;
}