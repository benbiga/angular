
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:   'caseTitle'
})
export class titlecase implements PipeTransform{
    
    
    transform(value: string): any{
        if(!value){
            return null;
        }
        let splitingResult = value.split(' ');
        if(splitingResult){
            splitingResult[0] = titlecase.capitalize(splitingResult[0]);
            for(let i =1;i<splitingResult.length;i++)
            {
                let word = splitingResult[i];
                if(this.isPreposition(word))
                {
                    word  = word.toLowerCase();
                }
                else
                {
                    word = titlecase.capitalize(word);
                }
            }
        }

        return splitingResult.join(' ');
    }

    static capitalize(value: string): string {
        return value.substr(0,1).toUpperCase() + value.slice(1).toLowerCase();
    }

    private isPreposition(word) : boolean{
        let prepositions: string[] = [
            'of','the'
        ];

        return prepositions.includes(word.toLowerCase());
    }
}