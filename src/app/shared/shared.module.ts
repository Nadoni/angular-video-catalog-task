import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import {MaterialModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import {DurationPipe} from './pipes/duration.pipe';
import {HighlightDirective} from './directives/highlight.directive';
import {ToolboxPanelComponent} from './components/toolbox-panel/toolbox-panel.component';
import {OrderByPipe} from './pipes/order-by.pipe';
import {FilterPipe} from './pipes/filter.pipe';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HeaderComponent,
    BreadcrumbComponent,
    ToolboxPanelComponent,
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
    ToolboxPanelComponent,
    FooterComponent,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    HighlightDirective
  ],
  entryComponents: [ConfirmationDialogComponent]
})
export class SharedModule { }
