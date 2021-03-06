import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { components } from '@app/components';
import { GameState } from '@app/game.state';
import { PlayerState } from '@app/player.state';
import { views } from '@app/views';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgxsEmitPluginModule } from '@ngxs-labs/emitter';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsModule } from '@ngxs/store';

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

    NgxsModule.forRoot([GameState, PlayerState], { developmentMode: true }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsEmitPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NgxsDispatchPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
