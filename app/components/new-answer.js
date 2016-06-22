// Shows new answer form when text is clicked
// Saves answer associated with correct question
// Child of answer.js

import Ember from 'ember';

export default Ember.Component.extend({
  //hides new answer form by default
  addNewAnswer: false,

  actions: {
    //shows new answer form
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    save() {
      //gets new answer data from new-answer.hbs form
      var params = {
        answer: this.get('answer') ? this.get('answer') : "",
        answerer: this.get('answerer') ? this.get('answerer') : "",
        rating: "",
        question: this.get('question'),
      };
      //hides new answer form again
      this.set('addNewAnswer', false);
      //new answer data is sent to question.js route and question.hbs to display
      this.sendAction('save', params);
    },
  }
});
