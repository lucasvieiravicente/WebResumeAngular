import { Component, Input, ViewChild } from '@angular/core';
import { StackResponse } from 'src/app/models/StackResponse';
import { KnowledgeCardComponent } from '../knowledge-card/knowledge-card.component';

@Component({
  selector: 'app-stack-panel',
  templateUrl: './stack-panel.component.html',
  styleUrls: ['./stack-panel.component.scss']
})

export class StackPanelComponent {
  
  @Input() stack!: StackResponse;
  @ViewChild(KnowledgeCardComponent) knowledgeComponent!: KnowledgeCardComponent;
  panelOpenState = false;
  private loadedKnowledges = false;

  public getKnowledges(){
    if(!this.loadedKnowledges){
      this.knowledgeComponent.getKnowledgesPerStackId(this.stack.stackId);
      this.loadedKnowledges = true;
    }
  }

  public getStackName(): string {
    return this.stack ? this.stack.stackName : '';
  }
}
