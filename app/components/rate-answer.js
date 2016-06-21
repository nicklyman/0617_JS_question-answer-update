import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    //Gets the rating value from form in rate-answer.hbs and converts it to an integer
    rateAnswer(answer) {
      var params = {
        rating: this.get('rating') ? parseInt(this.get('rating')) : "",
      };
      //Passes action through answer-tile to question.js to be displayed on question.hbs
      this.sendAction('rateAnswer', params, answer);
    }
  }
});
