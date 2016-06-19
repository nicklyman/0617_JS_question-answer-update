// Child of question.js
// Functionality for hide and show additional notes on home page - index.hbs

import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),

  //hides notes by default
  notesAreShowing: false,

  actions: {
    //toggles notes on and off by clicking text
    notesShow() {
      this.set('notesAreShowing', true);
    },
    notesHide() {
      this.set('notesAreShowing', false);
    },
    //add or remove particular question to or from the favorite questions list - I hope to move these methods to question.js route but am having service injection issues
    addToFavorites(question) {
      this.get('favoriteQuestions').add(question);
    },
    removeFromFavorites(question) {
      this.get('favoriteQuestions').remove(question);
    },
  }
});
