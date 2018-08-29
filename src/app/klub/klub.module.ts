import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KlubRoutingModule } from './klub-routing.module';
import { RurkiComponent } from './rurki/rurki.component';
import { DziewczynyComponent } from './dziewczyny/dziewczyny.component';

@NgModule({
  imports: [
    CommonModule,
    KlubRoutingModule
  ],
  exports:[
    RurkiComponent
  ],
  declarations: [RurkiComponent, DziewczynyComponent]
})
export class KlubModule { }
