import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ICourseModel} from '../../../courses/interface/courses.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbox-panel',
  templateUrl: './toolbox-panel.component.html',
  styleUrls: ['./toolbox-panel.component.scss']
})
export class ToolboxPanelComponent implements OnInit {

  @Output() filteredSearch = new EventEmitter<string>();

  public searchText: string;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  searchCourse() {
    this.filteredSearch.emit(this.searchText);
  }


  openCourseModal() {
    const link = ['/courses/add'];
    this.router.navigate(link);
  }
}
