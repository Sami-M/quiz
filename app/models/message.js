import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  useragent: DS.attr('string'),
  message: DS.attr('string'),
  pic: DS.attr('string'),
  username: DS.attr('string')
});
