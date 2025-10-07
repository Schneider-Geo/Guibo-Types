export interface User {
    
    email: string;
    role?: string;
    privileges?: Record<string, boolean>;
    link?: string; 

} 