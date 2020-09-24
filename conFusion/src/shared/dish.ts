import { Comment } from './comment';

export interface Dish {
  id : number;
  name : string;
  image : string;
  category : string;
  price : string;
  label : string;
  featured : boolean;
  description : string;
  comments : Comment[];
}
