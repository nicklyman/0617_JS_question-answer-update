import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),

  actions: {
    //add or remove particular question to or from the favorite questions list
    addToFavorites(question) {
      this.get('favoriteQuestions').add(question);
    },
    removeFromFavorites(question) {
      this.get('favoriteQuestions').remove(question);
    },
  }
});
