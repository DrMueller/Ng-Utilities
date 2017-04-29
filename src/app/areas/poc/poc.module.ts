import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelTestingComponent } from './components/model-testing/model-testing.component';

@NgModule({
  exports: [
    ModelTestingComponent
  ],
  imports: [
    CommonModule
  ],
  declarations: [ModelTestingComponent]
})
export class PocModule { }
