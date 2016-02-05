import Ember from 'ember';

export default Ember.Component.extend({
  didReceiveAttrs(){
    const profile = this.get('message');
    const username = profile.get('username');
    profile.set('username', username.replace('.', ' '));
  }
});
