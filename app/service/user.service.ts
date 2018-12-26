import { Injectable } from "@angular/core";

@Injectable()

export class UserService{
    
    users:any = [];
    newUsers:any = [];

    constructor(){
        this.users = [
            { userId: 1, name: 'Darshan', address: 'Mulund', gender: 'Male' },
            { userId: 2, name: 'Madhavi', address: 'Ambernath', gender: 'Female' },
            { userId: 3, name: 'Radhakrishna', address: 'Ghansoli', gender: 'Male' },
            { userId: 4, name: 'Abhishek', address: 'Rabale', gender: 'Male' },
            { userId: 5, name: 'Siddharth', address: 'Titwala', gender: 'Male' },
            { userId: 6, name: 'Arvind', address: 'Thane', gender: 'Male'},
            { userId: 6, name: 'Manisha', address: 'Vashi', gender: 'Female'},
        ];

        this.newUsers = [
            { userId: 1, name: 'Darshan', address: 'Mulund', gender: 'Male' },
            { userId: 2, name: 'Madhavi', address: 'Ambernath', gender: 'Female' },
            { userId: 3, name: 'Radhakrishna', address: 'Ghansoli', gender: 'Male' },
            { userId: 4, name: 'Abhishek', address: 'Rabale', gender: 'Male' },
            { userId: 5, name: 'Siddharth', address: 'Titwala', gender: 'Male' },
            { userId: 6, name: 'Arvind', address: 'Thane', gender: 'Male'},
            { userId: 6, name: 'Manisha', address: 'Vashi', gender: 'Female'},
        ];

        
    };

    getUsersFromService(){
        return this.users;
    }

    deleteUser(name) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].name === name) {
                this.users.splice(i, 1);
            }
        }

        // var myCounter = 0;
        // [true,false,true,false,true].forEach(v => v ? myCounter++ : v);
        // console.log(myCounter);
    }

    getNewData(){
        return this.newUsers;
    }


}