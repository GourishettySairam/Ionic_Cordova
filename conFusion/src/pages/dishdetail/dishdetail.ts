import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ActionSheetController, ModalController } from 'ionic-angular';
import { Dish } from '../../shared/dish';
import { FavoriteProvider } from '../../providers/favorite/favorite';
import { CommentPage } from '../comment/comment';
//import { Comment } from '../../shared/comment';
/**
 * Generated class for the DishdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dishdetail',
  templateUrl: 'dishdetail.html',
})
export class DishdetailPage {

  dish : Dish;
  errMess : string;
  avgstars : string;
  numcomments : number;
  favorite: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private favoriteservice : FavoriteProvider,
              private toastCtrl : ToastController,
              private actionCtrl : ActionSheetController,
              public modalCtrl : ModalController) {
    this.dish = navParams.get('dish'); // this parameter is coming from menu page
    this.favorite = this.favoriteservice.isFavorite(this.dish.id);
    this.numcomments = this.dish.comments.length;

    let total = 0;
    this.dish.comments.forEach(comment => total += comment.rating);
    this.avgstars = (total/this.numcomments).toFixed(2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishdetailPage');
  }


  addToFavorites() {
    console.log('Adding to Favorites ' , this.dish.id);
    this.favorite = this.favoriteservice.addFavorite(this.dish.id);
    this.toastCtrl.create({
      message : 'Dish ' + this.dish.id + ' added as a favorite successfully',
      position: 'middle', // by default will be displayed at the bottom
      duration : 3000
    }).present();
  }

  showActionSheet(dish: Dish){
    let actionSheet = this.actionCtrl.create({
      buttons : [{
        text : 'Add to Favorites',
        handler : () => {
          console.log('add to favorites clicked');
          this.addToFavorites();
          }
        },
        {
          text : 'Add a Comment',
          handler : () => {
            console.log('add a comment clicked');
            let modal = this.modalCtrl.create(CommentPage);
            modal.onDidDismiss(comments => {this.dish.comments.push(comments.value);console.log(comments.value)});
            modal.present();
          }
        },
        {
          text : 'Cancel',
          role : 'cancel',
          handler : () => {
            console.log('cancel clicked');
          },
        }
      ]
    });

    actionSheet.present();

  }

}
