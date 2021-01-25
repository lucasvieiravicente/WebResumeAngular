import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { KnowledgeResponse } from 'src/app/models/knowledgeResponse';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public knowledges!: Observable<KnowledgeResponse[]>;

  constructor(
  private services: ApiServicesService,
  private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getKnowledges();
  }

  getKnowledges() {
    this.knowledges = this.services.getAllKnowledge().pipe(first());
  }

  getBase64AsImage(fileData: string[]): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${fileData}`);
  }

  getAltDescription(title: string): string {
    return `Logo image of ${title}`;
  }
}
