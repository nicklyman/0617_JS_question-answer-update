// Displays new question form when text is clicked
// Saves new question to Firebase database
// Child of question.js

import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  //Add new question form hidden by default
  addNewQuestion: false,

  actions: {
    //Add new question form displayed
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save() {
      //gets new question data from new-question.hbs form
      var params = {
        question: this.get('question') ? this.get('question') : "",
        author: this.get('author') ? this.get('author') : "",
        notes: this.get('notes') ? this.get('notes') : "",
        answer: this.get('answer') ? this.get('answer') : "",
        date: new Date(),
        // date: moment().format('MMMM DD, YYYY HH:MM'),
      };
      //hides new question form
      this.set('addNewQuestion', false);
      //new question data is sent to question.js route and question-tile.hbs to display on index.hbs
      this.sendAction('save', params);
    },
  }
});
