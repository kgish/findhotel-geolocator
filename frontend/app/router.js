import Ember from 'ember';
import config from 'frontend/config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('import');
  this.route('challenge');
});

export default Router;
