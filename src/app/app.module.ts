import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
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
  imports: [HttpClientModule, BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [RestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
