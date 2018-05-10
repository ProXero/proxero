import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RecordSelectorService } from './record-selector.service';
import { DataReceiverService } from './data-receiver.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatNativeDateModule, MatInputModule, MatTableModule, MatTabsModule, MatCardModule,
        MatStepperModule, MatButtonModule} from '@angular/material';
import { AppComponent } from './app.component';
import { EscapeComponent } from './escape/escape.component';
import { RouterModule, Routes } from '@angular/router';
import { DailyMessageComponent } from './daily-message/daily-message.component';
import { EndComponent } from './end/end.component';
import { FormsModule }   from '@angular/forms';
import { CodeInputComponent } from './code-input/code-input.component';
import { MainComponent } from './main/main.component';
import { EskuvoComponent } from './eskuvo/eskuvo.component';
import { CountdownComponent } from './countdown/countdown.component';

const appRoutes: Routes = [
  { path: 'escape', component: EscapeComponent },
  { path: 'end', component: EndComponent },
  { path: 'Start', component: DailyMessageComponent },
  { path: 'eskuvo', component: EskuvoComponent },
  { path: '**', component: MainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EscapeComponent,
    DailyMessageComponent,
    EndComponent,
    CodeInputComponent,
    MainComponent,
    EskuvoComponent,
    CountdownComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatStepperModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    HttpClientModule,
    DataReceiverService,
    RecordSelectorService
  ],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { 
  
}
