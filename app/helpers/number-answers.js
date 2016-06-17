import Ember from 'ember';

export function numberAnswers(params) {
  //Getting the first item from the question object and calling it question
  var question = params[0];

  //glyphicons displayed next to the question if either of the two conditions below are met
  if (question.get('answers').get('length') >= 3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-education"></span>')
  } else if (question.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-question-sign"></span>')
  }
}

export default Ember.Helper.helper(numberAnswers);
