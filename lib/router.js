Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  // notFoundTemplate: 'notFoundPage',
  // waitOn: function() {
  //   return [Meteor.subscribe('users')];
  // }
});

Router.map(function() {
  this.route('home', {
    path: '/',
    // waitOn: function() {
    //   return [Meteor.subscribe('users'), Meteor.subscribe('instruments'), Meteor.subscribe('instrumentList'), Meteor.subscribe('chatrooms')];
    // }
  });

  // this.route('info', {
  //   path: 'info',
  //   waitOn: function() {
  //     return [Meteor.subscribe('users'), Meteor.subscribe('instruments'), Meteor.subscribe('instrumentList'), Meteor.subscribe('chatrooms')];
  //   }
  // });
})

Router.onBeforeAction("loading");