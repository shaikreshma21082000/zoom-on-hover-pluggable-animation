import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReshmaPwValidatorComponent, ReshmaPwValidatorModule } from 'projects/reshma-pw-validator/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    ReshmaPwValidatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
