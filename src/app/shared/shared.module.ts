import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import {MaterialModule} from '../material.module';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import {DurationPipe} from './pipes/duration.pipe';
import {HighlightDirective} from './directives/highlight.directive';
import {FilterPanelComponent} from './components/filter-panel/filter-panel.component';
import {OrderByPipe} from './pipes/order-by.pipe';
import {FilterPipe} from './pipes/filter.pipe';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    BreadcrumbComponent,
    FilterPanelComponent,
    FooterComponent,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    HighlightDirective,
    ConfirmationDialogComponent
  ],
  exports: [
    HeaderComponent,
    BreadcrumbComponent,
    FilterPanelComponent,
    FooterComponent,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    HighlightDirective
  ],
  entryComponents: [ConfirmationDialogComponent]
})
export class SharedModule { }
