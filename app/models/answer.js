// Framework for answer database fields
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  answer: attr(),
  answerer: attr(),
  // rating: attr(),
  question: belongsTo('question', { async: true })
});
