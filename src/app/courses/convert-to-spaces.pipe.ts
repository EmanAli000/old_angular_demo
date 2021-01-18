import { debounceTime } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'converttospaces'
})

export class ConvertToSpacesPipe implements PipeTransform
{
    transform(value: string, replaceBy: string): string {
        return value.replace(replaceBy,' ');
    }
    
}