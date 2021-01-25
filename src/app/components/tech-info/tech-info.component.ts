import { Component, Inject, Injectable } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { KnowledgeResponse } from 'src/app/models/knowledgeResponse';
import { HttpParameterCodec } from "@angular/common/http";

@Component({
  selector: 'app-tech-info',
  templateUrl: './tech-info.component.html',
  styleUrls: ['./tech-info.component.scss']
})
@Injectable()
export class TechInfoComponent {

  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: KnowledgeResponse) {}

  openDialog(): void {
    this.dialog.open(TechInfoComponent, {
      width: '40%',
      data: {
        title: this.data.title,
        firstDescription: this.data.firstDescription,
        secondDescription: this.data.secondDescription
      }
    });
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

  getSearchUrl(): string { 
    return 'https://www.google.com/search?q=' + encodeURIComponent(this.data.title);
  }

}
