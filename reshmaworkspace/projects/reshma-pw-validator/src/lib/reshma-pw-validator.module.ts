import { NgModule } from '@angular/core';
import { ReshmaPwValidatorComponent } from './reshma-pw-validator.component';
import { ZoomOnHoverDirective } from './zoom-on-hover.directive';



@NgModule({
  declarations: [
    ReshmaPwValidatorComponent,
    ZoomOnHoverDirective
  ],
  imports: [
  ],
  exports: [
    ReshmaPwValidatorComponent
  ]
})
export class ReshmaPwValidatorModule { }
