import { UserRole } from "./user_role";

export interface User {
    
    email: string;
    link?: string; 
    role?: UserRole;

} 