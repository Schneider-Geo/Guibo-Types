export class Category {
    link: string;
    name: string;
    textpages:  any[];
    routes: any[];
    pois: any[];
 
    constructor(link: string , name: string ) {
     this.link = link;
     this.name = name;
     this.textpages = [];
     this.routes = [];
     this.pois  = [];
   }
 
 
 }
