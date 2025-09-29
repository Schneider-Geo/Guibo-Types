import { Icon } from "./icon";

export interface CrossContentMetainfo {
   type: string;
   link: string;
   customId?: string;
   name?: string;
   bundle?: string;
   bundleName?: string;
   descriptions?: Record<string, string>;
   icon?: Icon;
   names?: Record<string, string>;
}