import { MapTile } from './maptile';
export interface BundleMetainfoDTO {
    link?: string;
    name?: string;
    account?: string;
    image?: string;
    logo?: string;
    downloadSize?: string;
    theme?: string;
    voices?: Array<string>;
    audio?: Array<string>;
    icons?: Array<string>;
    tiles: Array<MapTile>;
}
