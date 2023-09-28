import { Icon } from './icon';
export interface PoiReference {
    lat?: number;
    lng?: number;
    type?: string;
    link?: string;
    dfs?: number;
    icon?: Icon;

}