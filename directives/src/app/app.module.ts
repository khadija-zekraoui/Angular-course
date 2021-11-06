import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroDirectives } from './intro-directives/intro-directives.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { EnhancedCustomDirectiveDirective } from './enhanced-custom-directive/enhanced-custom-directive.directive';
import { EventCustomDirectiveDirective } from './event-custom-directive/event-custom-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    IntroDirectives,
    CustomDirectiveComponent,
    BasicHighlightDirective,
    EnhancedCustomDirectiveDirective,
    EventCustomDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
