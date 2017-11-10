import * as fromLearningPathList from '../learning-path/store/index';
import { Component, OnInit } from '@angular/core';
import { DETAIL_PAGE } from './store/actions/learning-path.layout.actions';
import { GET_LEARNING_PATH } from './store/actions/learning-path.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ota-learning-path',
  templateUrl: './learning-path.component.html',
  styleUrls: ['./learning-path.component.scss']
})
export class LearningPathComponent implements OnInit {
  pathList: any;
  isDetailPage: boolean;
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch({ type: GET_LEARNING_PATH });
    this.store
      .select(fromLearningPathList.selectLearningPathList)
      .subscribe(res => {
        this.pathList = res.pathList;
      });
  }

  toggleDetailPage(path) {
    const pathInfo = {
      pathInfo: path,
      isDetailPage: true
    };
    this.store.dispatch({ type: DETAIL_PAGE, payload: pathInfo });
    this.store
      .select(fromLearningPathList.selectLearningPathLayout)
      .subscribe(res => {
        this.isDetailPage = res.isDetailPage;
      });
  }
}