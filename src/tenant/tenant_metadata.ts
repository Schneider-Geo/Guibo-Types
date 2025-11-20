export interface TenantMetadata {
    
    name?: string;
    link: string;
    names?: Record<string, string>;
	logo?: string;
	operatorid?: string;
    defaultLanguage?: string;
    units?: string;
    accountType?: string;
    settings: Record<string, string>;
    permissions: any;
	
	

} 