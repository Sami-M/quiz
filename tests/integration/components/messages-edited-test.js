import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';


moduleForComponent('messages-edited', 'Integration | Component | messages edited', {
  integration: true
});

test('it renders', function(assert) {

  let message = Ember.Object.create({
    username: 'sami.mirimiri',
    pic: 'http://semantic-ui.com/images/avatar/small/joe.jpg',
    useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36',
    message: 'testing',
    date: 'Sun Oct 11 2015 04:40:51 GMT-0400 (EDT)'
  });
  this.set('message', message);

  this.render(hbs`{{messages-edited message=message}}`);

  let containsMessageText = (this.$().text().indexOf('testing') > -1) && 
  (this.$().text().indexOf('sami mirimiri') > -1) && 
  (this.$().text().indexOf('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36') > -1) && 
  (this.$().text().indexOf('Sun Oct 11 2015 04:40:51 GMT-0400 (EDT)') > -1);
  
  assert.ok(containsMessageText);
});
