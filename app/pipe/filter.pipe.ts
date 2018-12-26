import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'filter'
})

export class FilterPipe implements PipeTransform {
    
    transform(users: any[], term: any): any {
        // Return list if not any keyword
        if (!users || !term) {
            return users;
        }
        if(!users.length){
            alert("Please click to append new user list");
        }
        // filter items array, items which match and return true will be
        return users.filter(function(item:any){
            return /* Return name */ item.name.toLowerCase().includes(term.toLowerCase()) || 
                /* Return address */ item.address.toLowerCase().includes(term.toLowerCase()) || 
                 /* Return gender */ item.gender.includes(term)
        });
        
    }
}