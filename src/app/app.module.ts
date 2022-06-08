import { VentasModule } from './ventas/ventas.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

//Cambiar el locale de la app
import localeEs from '@angular/common/locales/es-MX';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
registerLocaleData(localeFr);

//Modulo personalizado
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouterModule, SharedModule, VentasModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-MX' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
