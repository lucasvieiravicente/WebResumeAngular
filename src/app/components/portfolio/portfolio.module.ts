import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [PortfolioComponent],
  exports: [PortfolioComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class PortfolioModule { }
