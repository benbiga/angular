import { AuthosService } from './authors.service';
import { Component } from '@angular/core';


@Component({
    'selector' : 'authors',
    'template' : `<h2>{{title}}</h2>
        <ul>
            <li *ngFor="let author of authors">
                {{author}}
            </li>
        </ul>
    `
})
export class AuthorsComponent{
    title = "List of authors";
    authors;

    constructor(authorsService : AuthosService)
    {
        this.authors = authorsService.getAuthors();
    }
}