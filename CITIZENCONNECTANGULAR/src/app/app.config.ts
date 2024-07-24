import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { AuthEffects } from './State/Effects/auth.effects';
import { authReducer } from './State/Reducers/authReducer';
import { provideHttpClient } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideHttpClient(),
  provideStore({ authR: authReducer}),
  provideEffects([AuthEffects]),
  provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })],
  
};
