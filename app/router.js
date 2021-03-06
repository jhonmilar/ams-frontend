import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('messages', { path: "/" }, function() {
    this.route("new", { path: "/new" });
  });
  this.route('vacations', {path: '/vacations'}, function() {
    this.route('new');
  });
});

export default Router;
