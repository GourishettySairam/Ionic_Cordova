import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { DishdetailPage } from '../pages/dishdetail/dishdetail';
import { FavoritesPage } from '../pages/favorites/favorites';
import { ReservationPage } from "../pages/reservation/reservation";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DishProvider } from '../providers/dish/dish';
import { LeaderProvider } from '../providers/leader/leader';
import { PromotionProvider } from '../providers/promotion/promotion';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';

import { baseURL } from '../shared/baseurl';
import { FavoriteProvider } from '../providers/favorite/favorite';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    MenuPage,
    AboutPage,
    DishdetailPage,
    FavoritesPage,
    ReservationPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    MenuPage,
    DishdetailPage,
    FavoritesPage,
    ReservationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DishProvider,
    LeaderProvider,
    PromotionProvider,
    ProcessHttpmsgProvider,
    { provide : 'BaseURL', useValue: baseURL},
    FavoriteProvider
  ]
})
export class AppModule {}
