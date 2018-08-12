import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionTestVO } from '../../components/model/question/question.test.vo';
import { QuestionChoiceVO } from '../../components/model/question/question.choice.vo';
import { KatexOptions } from '../../../node_modules/ng-katex';
import { ExamineVO } from '../../components/model/examine/examine.vo';
import { TestService } from '../../service/test.service';

/**
 * Generated class for the ViewExaminePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-examine',
  templateUrl: 'view-examine.html',
})
export class ViewExaminePage {
  equationTexString: string;
  testImg: string;
  title = 'ng-katex';
  url = 'https://github.com/garciparedes/ng-katex';
  equation = 'x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}';

  questionTest: QuestionTestVO;

  choiceList: Array<QuestionChoiceVO>;
  options: KatexOptions = {
    displayMode: false,
  };

  testid: number;
  examine: ExamineVO;

  constructor(public navCtrl: NavController, public navParams: NavParams, private testService: TestService) {
    this.examine = navParams.get('examine');
  }

  ionViewDidLoad() {
    this.testService.getAllTestQuestionsByTestId(this.examine.examineId).subscribe((questions: QuestionTestVO) => {
      // 选择题
      this.choiceList = questions.choiceList;

      console.log(this.choiceList.length);
    });
  }

}
