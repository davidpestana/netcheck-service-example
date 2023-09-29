import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './characters/characters.component';
import { CharactersNumberComponent } from './characters-number/characters-number.component';


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharactersNumberComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
