import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { KnowledgeResponse } from 'src/app/models/knowledgeResponse';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public knowledges = new Array<KnowledgeResponse>();

  constructor(private services: ApiServicesService) { }

  ngOnInit(): void {
    this.services.getAllKnowledge().subscribe(knowledges => {
      this.knowledges = knowledges
    });
  }

}
