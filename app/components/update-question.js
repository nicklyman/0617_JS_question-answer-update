// Child of question.js
// Updates question in form - goes to question.js

import Ember from 'ember';

export default Ember.Component.extend({
  //hides update question form by default
  updateQuestionForm: false,

  actions: {
    //shows update question on question.hbs template page
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    //gets update question data from update-question.hbs form
    update(question) {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      //hides update question form again
      this.set('updateQuestionForm', false);
      //sends updated question to question.js route to be displayed on question.hbs
      this.sendAction('update', question, params);
    }
  }
});
