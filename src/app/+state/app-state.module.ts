import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import {
  routerReducer,
  StoreRouterConnectingModule,
  RouterState
} from "@ngrx/router-store";
import * as fromApp from "./app.reducer";
import { AppEffects } from "./app.effects";
import { environment } from "src/environments/environment";

@NgModule({
  imports: [
    StoreModule.forRoot(
      { app: fromApp.reducer },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true
        }
      }
    ),
    StoreModule.forFeature("router", routerReducer),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    })
  ]
})
export class AppStateModule {}
