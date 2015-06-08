Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFoundPage',
  waitOn: function() {
    return [Meteor.subscribe('users')];
  }
});

Router.map(function() {
  this.route('home', {
    path: '/',
    waitOn: function() {
      return [Meteor.subscribe('users'), Meteor.subscribe('instruments'), Meteor.subscribe('instrumentList'), Meteor.subscribe('chatrooms')];
    }
  });
  this.route('search', {
    path: 'musicians',
    waitOn: function() {
      return [Meteor.subscribe('users'), Meteor.subscribe('instruments'), Meteor.subscribe('instrumentList'), Meteor.subscribe('chatrooms')];
    }
  });
  this.route('edit_form', {
    path: 'edit_profile',
    waitOn: function() {
      return [Meteor.subscribe('instruments'), Meteor.subscribe('instrumentList')];
    },
    data: function() {
      return Meteor.user();
    }
  });
  this.route('info', {
    path: 'info',
    waitOn: function() {
      return [Meteor.subscribe('users'), Meteor.subscribe('instruments'), Meteor.subscribe('instrumentList'), Meteor.subscribe('chatrooms')];
    }
  });
  return this.route('shoutOuts', {
    path: 'shoutOuts',
    waitOn: function() {
      return [Meteor.subscribe('users'), Meteor.subscribe('instruments'), Meteor.subscribe('instrumentList'), Meteor.subscribe('chatrooms'), Meteor.subscribe('shoutouts')];
    }
  });
});

Router.onBeforeAction("loading");