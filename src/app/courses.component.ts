import { CoursesService } from './courses.service';
import {Component} from '@angular/core';

@Component({
    selector:   'courses',
    template:   `
        <div class="container">
        <h2>{{"Title : "+ title}}</h2>
        <ul *ngFor="let course of courses">
            <li>
                {{course}}
            </li>
        </ul>

        <br/> 
            <div (click) = "onDivClicked()">
            <button (click)="onSave($event)" class="btn btn-primary" [class.isActive] = "isActive" [style.backgroundColor]="isActive ? 'red' : 'blue'">Save</button></div>
            <input [(ngModel)] = "email" (keyup.enter)="onKeyUp()" />
            </div>
    
    `
})
export class CoursesComponent{
    title = "List of courses";
    courses;
    isActive = true;

    email = "badr@gmail.com";

    constructor(service : CoursesService)
    {
        this.courses = service.getCourses();
    }

    onDivClicked()
    {
        console.log("Div was clicked");
    }
    onSave($event)
    {
        console.log("Save button was clicked!");
        this.isActive = !this.isActive;
        $event.stopPropagation();
    }

    onKeyUp(){
        console.log("Enter was clicked, value = " + this.email);
    }
}