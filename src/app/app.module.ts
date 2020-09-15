import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AskAppointementComponent } from './components/ask-appointement/ask-appointement.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResultsComponent } from './components/results/results.component';
import { RestService } from './services/rest.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResultsComponent,
    AskAppointementComponent,
  ],
  imports: [BrowserModule],
  providers: [RestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
