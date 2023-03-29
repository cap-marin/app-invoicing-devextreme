import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxDataGridModule  } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxButtonModule,
    DxDataGridModule,
    HttpClientModule

    //desarrollador java angular, prepagada sura, poliza vida, poliza emergencias odontologicas, cursos idiomas, entrenamientos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
