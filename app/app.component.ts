import { Component, OnInit, Directive } from '@angular/core'; //Import Component and ngOnInit dependenicies
import { AppServices } from './app.services'; // Import AppService 


@Component({
  selector: 'my-app',
  template: `<div class="container container-fluid">
             <h2>Toggling display using Structural directives</h2><br>

             <button class="btn btn-primary" (click)="toggleShow()">{{showMsg}}</button> <!-- Create a button which, on click triggers a function toggleShow and the display msg changes --> 
             <h4>The data for the below table is provided by a service and display is toggled using a structural directive</h4><br><br>
             <table *ngIf="showTable" class="table table-bordered"> <!-- Display the table only if the showTable value is true --> 
                <thead>
                    <tr [ngClass]="{classTableHead:true}"> <!-- Assign an attribute directive ngClass to the table head --> 
                        <th>Name</th>
                        <th>DOB</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Enroll link</th>
                </thead>
                <tbody>
                    <tr  *ngFor="let cartoon of cartoons" [ngClass]="{classTableBody:true}"> <!-- Loop through the array of cartoons and display each value as table row. Assign an attribute directive ngClass to the table body -->  
                        <td>{{cartoon.name}}</td>
                        <td>{{cartoon.DOB}}</td>
                        <td>{{cartoon.email}}</td>
                        <td>{{cartoon.status}}</td>
                        <td><a href="{{cartoon.enroll}}">{{cartoon.enroll}}</a></td>
                    </tr>
                </tbody>
             </table>
             </div>`,
  styles: [`
            .classTableHead {background-color:	#ffa69f;
                             border: 3px solid #ffb69f}
            .classTableBody {background-color:	#ffe69f;
                             border: 3px solid #ffd69f}
         `]// Two styles are defined, one for the table head and one for the table body
})


export class AppComponent implements OnInit { // Export a class AppComponent 
        cartoons = [{}]; //Declare an array of objects
        constructor(private _appServives : AppServices){} //Declare a private variable of the type AppServices
        
        ngOnInit(){
            this.cartoons = this._appServives.getData() //Run OnInit which assigns the variable to the data fetched by the getData function of the AppServices
        }

        showMsg="Hide Table";// Set default value of display msg to Hide
        showTable = true; //Declare a variable to set current value of table display
        toggleShow(){ //Create a function
            this.showTable = !this.showTable; // on click of the button, negate the value of the showTable 
            if(this.showTable){
                this.showMsg="Hide Table" //if the table is shown, change the display msg to "Hide"
            }
            else {
                this.showMsg="Show Table"//if the table is hidden, change the display msg to "Show"
            }
    }

} 
