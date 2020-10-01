import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Comment } from '../../shared/comment';

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl : ViewController,
              private formBuilder : FormBuilder) {

                this.comments = this.formBuilder.group({
                  author : [ '', Validators.required ] ,
                  comment : [ '' ],
                  date : new Date().toString(),
                  //date : new Date(),
                  rating : [ 0, Validators.required ]
                });
  }

  comments : FormGroup;
  //something : Comment;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit(){
    console.log(this.comments);
    this.viewCtrl.dismiss(this.comments);
  }

}
