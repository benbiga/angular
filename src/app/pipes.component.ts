import {Component} from '@angular/core';

@Component({
    selector : 'pipesData',
    template : `
    <div class="container">
        {{course.title | lowercase}}<br/>
        {{course.rating | number:'1.3'}}<br/>
        {{course.students | number}}<br/>
        {{course.price | currency:'DHs'}}<br/>
        {{course.releaseDate | date:'shortDate'}}<br/>
    </div>
    `}
)
export class PipesComponent{

    course = {
        title :"The complete angular course",
        rating: 4.0123,
        students:   30123,
        price:  190.25,
        releaseDate :   new Date(2016,3,1)
    }
}