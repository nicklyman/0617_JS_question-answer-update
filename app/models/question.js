// Framework for question database fields

import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  question: attr(),
  author: attr(),
  notes: attr(),
  date: attr(),
  answers: hasMany('answer', { async: true })
});
