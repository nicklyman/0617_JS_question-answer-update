// Child of index.js
// Returns answer to particular question from database

import Ember from 'ember';

export default Ember.Route.extend({
  //returns correct answer associated with question by ID
  model(params) {
    return this.store.findRecord('answer', params.answer_id);
  },
});
