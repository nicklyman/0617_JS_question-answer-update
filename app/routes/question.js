// Child of index.js
// Returns individual question from database correctly
// Correctly updates and saves question
// Adds new answer to list of answers for that question

import Ember from 'ember';

export default Ember.Route.extend({
  //returns correct question by ID
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    //saves updated question and displays home page
    update(question) {
      question.save();
      this.transitionTo('index');
    },

    save(params) {
      //saves new questions and new answers associated with the correct question
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    },
  }
});
