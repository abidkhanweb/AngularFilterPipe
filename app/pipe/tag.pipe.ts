import { Pipe, PipeTransform  } from "@angular/core";



@Pipe({
    name:'tag',
})

export class TagPipe implements PipeTransform  {
    transform(value,gender){
        if(gender=="Male"){
            return "Mr. " + value; 
        }
        else{
            return "Miss. " + value;
        }
    }
    
}