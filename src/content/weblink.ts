import { Context } from "./context";

export interface WeblinkDTO {
	
	id?: number; 
	l?: string;
	title?: string;
	titles?: Record<string, string>;
	link?: string;
	links?: Record<string, string>;
	bundle?: string;
	space?: string;
	context?: Context;
	 visibility?: {
        app?: number;
        pdf?: number;
    };

}