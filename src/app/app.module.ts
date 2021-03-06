import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ClickOutsideModule } from 'ng-click-outside';
import { AppComponent } from './components/app.component';
import { AskAppointementComponent } from './components/ask-appointement/ask-appointement.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResultsComponent } from './components/results/results.component';
import { RestService } from './services/rest.service';
import { DatePipe } from './utils/pipes/date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    AskAppointementComponent,
    ProfileComponent,
    DatePipe,
  ],
  imports: [
    HttpClientModule,
    ClickOutsideModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [RestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
