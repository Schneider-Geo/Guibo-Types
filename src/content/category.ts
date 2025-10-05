export interface Category {
	id?: number;
	link?: string;
	bundle?: string;
	customId?: string;
	space?: string;
	name?: string;
	names?: Record<string, string>;
	sorting?: number;
	open?: boolean;
	visible?: boolean;
	appEnabled?: boolean;
	pdfEnabled?: boolean;
	geocontent? : Array<string>;
  	textcontent? : Array<string>;


 }
