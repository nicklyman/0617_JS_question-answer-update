//Injecting service for adding/removing favorited questions.
import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),
});
