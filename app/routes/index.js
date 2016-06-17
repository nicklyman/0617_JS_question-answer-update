// Functionality of index.hbs
// Interactivity of home page
// Parent of about, contact, question, and answer .js files
// Only file that communicates directly with Firebase database

import Ember from 'ember';

export default Ember.Route.extend({
  //Sends and recieves data from/to Firebase
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },

  actions: {
    //Saves new question to database
    save(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
  }
});
