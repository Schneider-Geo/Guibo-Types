import {Icon} from "./icon";
import {Category} from "./category";
import {Bounds} from "./bounds";
import {Figures} from "./figures";
import {Context} from "./context";
import {Elevation} from "./elevation";
import {Tag} from "./tag";
import {PoiReference} from "./poi_reference";
import { NavigationInstruction } from "./navigation_instruction";
import { Waypoint } from "./waypoint";
import { Supplement } from "./supplement";
import {Segment} from "./segment";
export interface Poi {
    id?: number;
    externalid?: string;
    link?: string;
    bundle?: string;
    name?: string;
    remark?: string;
    sorting?: number;
    description?: string;
    centerlat?: number;
    centerlng?: number;
    zoom?: number;
    audioFile?: string;
    videoFile?: string;
    icon?: Icon;
    category?: Category;
    space?: string;
    enabled : boolean ;
    relevant : boolean;
    activityCategory?: string;
    bbox?: Bounds;
    context: Context;
    images?: Array<string>;
    tags?: Array<Tag>;
    references?: Array<PoiReference>;
    attributes: Record<string, string>
}