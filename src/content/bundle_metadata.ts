import { Bounds } from "./bounds";
import { Marker } from "./marker";
export interface BundleMetadata {
	
	id?: number;
	link?: string;
	customId?: string;
	account?: string;
	name?: string;
	names?: Record<string, string>;
	description?: string;
	image?: string;
	statusText?: string;
	status?: string;
	bounds?: Bounds;
	mother?: string;
	type?: string;
	libraryType?: string;
	archive?: string;
	ownerName?: string;
	map?: string;
	settings: Record<string, string>;
	logo?: string;
	myOwn?: boolean;
	languages?: string[];
	child: boolean;
	markers?: Array<Marker>;
}