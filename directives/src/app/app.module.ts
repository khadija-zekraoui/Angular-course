import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroDirectives } from './components/intro-directives/intro-directives.component';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { BasicHighlightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { EnhancedCustomDirectiveDirective } from './directives/enhanced-custom-directive/enhanced-custom-directive.directive';
import { EventCustomDirectiveDirective } from './directives/event-custom-directive/event-custom-directive.directive';
import { StructuralDirectiveDirective } from './directives/structural-directive/structural-directive.directive';
import { CustomStructuralDirectiveComponent } from './components/custom-structural-directive/custom-structural-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroDirectives,
    CustomDirectiveComponent,
    BasicHighlightDirective,
    EnhancedCustomDirectiveDirective,
    EventCustomDirectiveDirective,
    StructuralDirectiveDirective,
    CustomStructuralDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
