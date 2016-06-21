// Child of question.js
// Functionality for hide and show additional notes on home page - index.hbs

import Ember from 'ember';

export default Ember.Component.extend({

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
  }
});
