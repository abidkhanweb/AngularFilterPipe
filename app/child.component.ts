<<<<<<< HEAD
import { Component,Input } from '@angular/core';
=======
import { Component,Input, OnInit, Output, EventEmitter } from '@angular/core';
>>>>>>> Changes for Input Directive

@Component({
    selector: 'child-selector',
    templateUrl: './app/child.component.html'
})

<<<<<<< HEAD
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
=======
export class ChildComponent implements OnInit {
    @Input() totalGender:any;
   // @Input() gender:any;
    navSelected:any;

    ngOnInit(){
        this.navSelected="All"
    }
    
    @Output() counterGender: EventEmitter<any> = new EventEmitter<any>(); 
    counterHandler(counter){
        this.counterGender.emit(counter);
    }

>>>>>>> Changes for Input Directive
}