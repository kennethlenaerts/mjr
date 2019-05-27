import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "@app/app-routing.module";
import { AppComponent } from "@app/app.component";
import { components } from "@app/components";
import { gameReducer, GameEffects } from "@app/state";
import { views } from "@app/views";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

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

    // NgxsModule.forRoot([GameState, PlayerState], { developmentMode: true }),
    // NgxsReduxDevtoolsPluginModule.forRoot(),
    // NgxsEmitPluginModule.forRoot(),
    // NgxsRouterPluginModule.forRoot(),
    // NgxsDispatchPluginModule.forRoot(),

    StoreModule.forRoot({ game: gameReducer}),
    EffectsModule.forRoot([GameEffects]),
    StoreDevtoolsModule.instrument({}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
