import { Bounds } from "./bounds";
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
	archive?: string;
	ownerName?: string;
	map?: string;
	settings: Record<string, string>;
	logo?: string;
	myOwn?: boolean;
}