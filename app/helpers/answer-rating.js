import Ember from 'ember';

//helper for displaying the star rating that will be used for sorting answers as a computed property
export function answerRating(params) {
  var answer = params[0];
  var star = "Not rated yet";

  if (answer.get('rating') !== "") {
    star = "";
    for (var i = 0; i < 5 && i < answer.get('rating'); i++) {
      star = star + '<span class="glyphicon glyphicon-star-empty star-glyph"></span>';
    }
  }
  return Ember.String.htmlSafe(star);
}

export default Ember.Helper.helper(answerRating);
