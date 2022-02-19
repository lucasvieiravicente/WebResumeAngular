import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { StackIds } from 'src/app/enums/StackIds';
import { KnowledgeResponse } from 'src/app/models/knowledgeResponse';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { TechInfoComponent } from '../tech-info/tech-info.component';

@Component({
  selector: 'app-knowledge-card',
  templateUrl: './knowledge-card.component.html',
  styleUrls: ['./knowledge-card.component.scss']
})
export class KnowledgeCardComponent {

  knowledges!: Promise<KnowledgeResponse[]>;

  constructor(private services: ApiServicesService,
              private sanitizer: DomSanitizer,
              private dialog: MatDialog,
              private breakpoint: BreakpointObserver)  { }

  public getKnowledgesPerStackId(stackId: StackIds){
    this.knowledges = this.services.getKnowledgeByStackId(stackId);
  }

  getBase64AsImage(fileData: string[]): SafeResourceUrl {
    console.log(fileData);
    return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${fileData}`);
  }

  getAltDescription(title: string): string {
    return `Logo image of ${title}`;
  }

  async openInfo(index: number) {
    const techInfoComponent = new TechInfoComponent(this.dialog, this.breakpoint, await this.knowledges.then(knowledges => knowledges[index]))
    techInfoComponent.openDialog();
  }
}
