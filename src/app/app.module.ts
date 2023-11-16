import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    provideFirebaseApp(() => initializeApp({
    apiKey: "AIzaSyCO2jxiq_lf_2ZTVqqAFFznkekw0moC86s",
    authDomain: "retrokuriosa.firebaseapp.com",
    projectId: "retrokuriosa",
    storageBucket: "retrokuriosa.appspot.com",
    messagingSenderId: "770917293090",
    appId: "1:770917293090:web:11a96c3ec4be5b55bf3e7b",
    measurementId: "G-N8G9TPJPHF"})),

    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
