import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [SearchBarComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    const custom = createCustomElement(SearchBarComponent, {injector});
    customElements.define('app-search-bar', custom);
  }

  ngDoBootstrap() {

  }
}
