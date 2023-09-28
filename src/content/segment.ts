import { Waypoint } from './waypoint';
import { Icon } from './icon';

export interface Segment {
    id?: number;
    link?: string;
    name?: string;
    type?: string;
    color?: string;
    icon?: Icon;
    waypoints:  Array<Waypoint>;
}