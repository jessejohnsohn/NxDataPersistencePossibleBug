import { AppState } from "./app.reducer";
import { Injectable } from "@angular/core";
import { createEffect } from "@ngrx/effects";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { of } from "rxjs";
import { Actions } from "@ngrx/store-devtools/src/reducer";
import { AppComponent } from "../app.component";
import * as AppActions from "./app.actions";
import { DataPersistence } from "@nrwl/angular";

@Injectable()
export class AppEffects {
  getUsers$ = createEffect(() =>
    this.dataPersistence.navigation(AppComponent, {
      run: (_r: ActivatedRouteSnapshot, _state: AppState) => {
        return of(AppActions.appLaunched);
      },
      onError: (_a: ActivatedRouteSnapshot, error: any) => {
        throw new Error(error);
      }
    })
  );

  constructor(
    private readonly actions$: Actions,
    private readonly router: Router,
    private readonly dataPersistence: DataPersistence<AppState>
  ) {}
}
