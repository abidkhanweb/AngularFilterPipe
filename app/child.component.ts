import { Component,Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child-selector',
    templateUrl: './app/child.component.html'
})

export class ChildComponent {
    @Input() totalGender:any;
    @Input() gender:any;

    
    // counterHandler(counter){
    //     if(this.totalGender[0]=="All"){
            
    //         console.log(counter="7");
    //     }
    //     else{
    //         return false;
    //     }
    // }
   // @Input() gender:any;
    navSelected:any;

    ngOnInit(){
        this.navSelected="All"
    }
    
    @Output() counterGender: EventEmitter<any> = new EventEmitter<any>(); 
    counterHandler(counter){
        this.counterGender.emit(counter);
    }

}