import { Meteor } from 'meteor/meteor';

if (!Meteor.isProduction) {
// Create the various merchant.js scripts for the client
  require('./refreshMerchants');
}

Meteor.startup(() => {
  
});
