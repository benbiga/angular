import { titlecase } from './titleCase.component';
import { Component,Input,Output } from '@angular/core';

@Component({
    selector:   'like',
    templateUrl:   './like.component.html'
})
export class LikeComponent{
    movieTitle;
    @Input('isFavorite') isLiked = false;

    onClick()
    {
        this.isLiked = !this.isLiked;
        console.log("isLIked : "+this.isLiked);
    }

    formatTitle(){
        console.log(this.movieTitle);
    }
}