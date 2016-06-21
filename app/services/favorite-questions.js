//Service for adding, removing a user's favorite questions to a list
import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],

  add(favorite) {
    this.get('favorites').pushObject(favorite);
  },
  remove(favorite) {
    this.get('favorites').removeObject(favorite);
  }
});
