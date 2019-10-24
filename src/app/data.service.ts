import { Injectable }           from '@angular/core';
import { ComponentItem }   from './component-item';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

@Injectable()
export class DataService {
  getComponent() {
    return [
      new ComponentItem(ThirdComponent, {
        title:"Third Component loaded dynamically"
      }),
      new ComponentItem(FirstComponent, {
        title:"First Component loaded dynamically"
      }),
      new ComponentItem(SecondComponent, {
        title:"Second Component loaded dynamically"
      }),
    ];
  }
}