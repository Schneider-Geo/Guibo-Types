import {Context } from "./context";
export interface Text {

	id?: number;
	link?: string;
	bundle?: string;
	space?: string;
	category?: string;
	title?: string;
	titles?: Record<string, string>;
	remark?: string;
	description?: string;
	descriptions?: Record<string, string>;
	images?: Array<string>;	
	sorting: number;
	context?: Context;
}
