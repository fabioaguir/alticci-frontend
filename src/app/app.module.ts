import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculateAlticciSequenceComponent } from './calculate-alticci-sequence/calculate-alticci-sequence.component';
import { CalculateAlticciSequenceService } from './calculate-alticci-sequence/calculate-alticci-sequence.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CalculateAlticciSequenceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CalculateAlticciSequenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
