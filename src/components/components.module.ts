import { NgModule } from '@angular/core';

import { YouImgComponent } from './you-img/you-img';
import { YouChoiceComponent } from './you-choice/you-choice.component';
import { YouChoiceOptionComponent } from './you-choice-option/you-choice-option.component';
import { YouChoiceOptionlistComponent } from './you-choice-optionlist/you-choice-optionlist.component';
import { YouKatexComponent } from './you-katex/you-katex';
import { IonicModule } from '../../node_modules/ionic-angular/umd';
import { YouShortanswerComponent } from './you-shortanswer/you-shortanswer';

@NgModule({
    declarations: [
        YouChoiceComponent,
        YouChoiceOptionComponent,
        YouChoiceOptionlistComponent,
        YouImgComponent,
        YouKatexComponent,
        YouShortanswerComponent,
    ],
    imports: [IonicModule],
    exports: [
        YouChoiceComponent,
        YouChoiceOptionComponent,
        YouChoiceOptionlistComponent,
        YouImgComponent,
        YouKatexComponent,
        YouShortanswerComponent,
    ],
})
export class ComponentsModule { }
