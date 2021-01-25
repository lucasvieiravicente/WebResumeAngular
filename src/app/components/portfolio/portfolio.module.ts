import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [PortfolioComponent],
  exports: [PortfolioComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
  ]
})
export class PortfolioModule { }
