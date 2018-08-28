import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp({
            apiKey: 'AIzaSyAlSVvAzNRjUdJmzc5kHZWZnqH7T2WIJu4',
            authDomain: 'user-service-example-51951.firebaseapp.com',
            databaseURL: 'https://user-service-example-51951.firebaseio.com',
            projectId: 'user-service-example-51951',
            storageBucket: '',
            messagingSenderId: '36155795813',
        }),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
