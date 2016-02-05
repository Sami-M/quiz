import { moduleForModel, test } from 'ember-qunit';

moduleForModel('message', 'Unit | Model | message', {
  // Specify the other units that are required for this test.
  needs: []
});

test('model stores value', function(assert) {
  var message = this.subject({
    username: 'sami.mirimiri',
    pic: 'http://semantic-ui.com/images/avatar/small/joe.jpg',
    useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36',
    message: 'testing',
    date: 'Sun Oct 11 2015 04:40:51 GMT-0400 (EDT)'
  });

  assert.equal(message.get('username'), 'sami.mirimiri');
  assert.equal(message.get('pic'), 'http://semantic-ui.com/images/avatar/small/joe.jpg');
  assert.equal(message.get('useragent'), 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36');
  assert.equal(message.get('message'), 'testing');
  assert.equal(message.get('date'), 'Sun Oct 11 2015 04:40:51 GMT-0400 (EDT)');
});
