import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {

  public courseForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.init();
  }

  private init() {
    this.buildCourseForm();
  }

  buildCourseForm() {
    this.courseForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      videoDetail: ['', Validators.required],
    });
  }

  addCourse(data) {
    console.log('data', data);
  }

}
