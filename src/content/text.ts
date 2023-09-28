import {Context } from "./context";
export interface Text {

	id?: number;
	link?: string;
	
	bundle?: string;
	space?: string;
	category?: string;
	title?: string;
	remark?: string;
	description?: string;
	images?: Array<string>;	
	sorting: number;
	context: Context;
}
