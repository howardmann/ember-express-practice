import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    planets: {embedded: 'always'}
  }
});
