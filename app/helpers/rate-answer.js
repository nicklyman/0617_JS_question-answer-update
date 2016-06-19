// A helper for rating answers with 1 to 5 stars. Hope to use a computed property to list answers in order of stars but this is not working yet.
import Ember from 'ember';

export function rateAnswer(params) {
  var answer = params[0];
  var star = "Not rated yet";

  if (answer.get('rating') !== "") {
    star = "";
    for (var i = 0; i < 5 && i < answer.get('rating'); i++) {
      star = star + '<span class="glyphicon glyphicon-star star-glyph"></span>';
    }
  }
  return Ember.String.htmlSafe(star);
}

export default Ember.Helper.helper(rateAnswer);
