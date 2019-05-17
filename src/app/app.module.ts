import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { components } from "./components";
import { views } from "./views";
import { NgxsModule } from "@ngxs/store";
import { GameState } from "./game.state";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsEmitPluginModule } from "@ngxs-labs/emitter";
import { HttpClientModule } from "@angular/common/http";

// prettier-ignore
@NgModule({
  declarations: [
    ...components,
    ...views,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    NgxsModule.forRoot([GameState], { developmentMode: true }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsEmitPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
