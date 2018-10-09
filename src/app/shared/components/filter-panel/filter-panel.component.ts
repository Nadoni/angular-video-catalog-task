import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ICourseModel} from '../../../courses/components/interface/courses.model';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {

  @Output() filteredSearch = new EventEmitter<string>();

  public searchText: string;

  constructor() {
  }

  ngOnInit() {
  }

  searchCourse() {
    this.filteredSearch.emit(this.searchText);
  }


}
