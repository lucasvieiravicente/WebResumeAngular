import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutProjectComponent } from './about-project.component';

@NgModule({
  declarations: [AboutProjectComponent],
  exports: [AboutProjectComponent],
  imports: [
    CommonModule
  ]
})
export class AboutProjectModule { }
