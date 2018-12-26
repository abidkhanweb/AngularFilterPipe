import { Component, OnInit } from "@angular/core";
import { UserService } from './service/user.service';
import {  
    FormGroup,  
    FormControl  
} from '@angular/forms'  

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
})

export class AppComponent implements OnInit {

    users: any = [];
    newUsers: any = [];
    genderCount: any;
    counter:any;

    constructor(private _getUserServiceData: UserService) {

    }

    ngOnInit() {
        this.users = this._getUserServiceData.getUsersFromService();
        this.newUsers = this._getUserServiceData.getNewData();
    }

    // Delete user
    deleteUserData(name) {
        this._getUserServiceData.deleteUser(name);
    }

    // Append new data
    refreshData() {
        this.users = this._getUserServiceData.getNewData();
    }

    
<<<<<<< HEAD



    totalGenders:any = ["All","Male","Female"];

    

    
=======
    counterHandler(counter){
        return 7;
        // if(this.totalGender[0]=="All"){
        //     console.log(counter="7");
        // }
        // else{
        //     return false;
        // }
    }


    totalGenders:any = ["All","Male","Female"];

>>>>>>> Changes for Input Directive
    // User counter
    getAllGender(genderCount:any,allGender:any) {
        // Called user data
        var genders = this._getUserServiceData.getUsersFromService();
        var getGender = genders.filter(function (item:any) {
            if("Male"=="Male"){
                
                return item.gender;
            }
            else if("Female"=="Female"){
                return item.gender=="Female";
            }
            else {
                return getGender.length;
            }
        });

        return getGender.length;
    }
}