import { Icon } from "./icon";

export interface CrossContentMetainfo {
   type: string;
   link: string;
   name: string;
    bundle?: string;
   descriptions?: Record<string, string>;
   icon?: Icon;
   names?: Record<string, string>;
}