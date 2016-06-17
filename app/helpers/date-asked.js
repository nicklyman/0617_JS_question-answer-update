import Ember from 'ember';
import moment from 'moment';

export function dateAsked(params) {
  var dateAsked = params[0].get('date');

  return dateAsked;
}

export default Ember.Helper.helper(dateAsked);
