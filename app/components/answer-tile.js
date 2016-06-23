// Child of answer.js

import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['rating:desc'],
  sortedAnswers: Ember.computed.sort('answers', 'sortBy'),

  actions: {
    // Rating for answer is saved to Firebase
    rateAnswer(answer, params) {
      // Object.keys(params).forEach(function(key) {
       if(params["rating"]!== null) {
         answer.set("rating",params["rating"]);
      //  }
      };
      answer.save();
    },
  }
});
