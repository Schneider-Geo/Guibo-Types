import { Bounds } from "./bounds";
export interface BundleMetadata {
	
	id?: number;
	link?: string;
	customId?: string;
	account?: string;
	name?: string;
	description?: string;
	image?: string;
	statusText?: string;
	status?: string;
	bounds?: Bounds;
	mother?: string;
	type?: string;
	map?: string;
	settings: Record<string, string>;
}