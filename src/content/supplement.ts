import { Icon } from './icon';

export interface Supplement {
    id?: number;
    lng?: number;
    lat?: number;
    title?: string;
    titleMap:  Record<string, string>;
    type?: string;
    icon?: Icon;
}