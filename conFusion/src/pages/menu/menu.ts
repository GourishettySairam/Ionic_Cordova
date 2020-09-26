import { Component, OnInit } from '@angular/core'; //, Inject
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Dish } from '../../shared/dish';
import { DishProvider } from '../../providers/dish/dish';
import { FavoriteProvider } from '../../providers/favorite/favorite';
import { DishdetailPage } from '../dishdetail/dishdetail';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage implements OnInit {

  dishes : Dish[];
  errMess : string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private favoriteservice : FavoriteProvider,
              private dishservice : DishProvider,
              private toastCtrl : ToastController) {
  }
  //, @Inject('BaseURL') private BaseURL
  ngOnInit() {
    this.dishservice.getDishes()
    .subscribe(dishes => this.dishes = dishes,
    errmess => this.errMess = errmess);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  dishSelected(event, dish) {
    this.navCtrl.push(DishdetailPage, {
      dish: dish
    });
  }

  addToFavorites(dish : Dish ) {
    console.log('Adding to Favorites ' , dish.id);
    this.favoriteservice.addFavorite(dish.id);
    this.toastCtrl.create({
      message : 'Dish ' + dish.id + ' added as a favorite successfully',
      duration : 3000
    }).present();
  }

}
