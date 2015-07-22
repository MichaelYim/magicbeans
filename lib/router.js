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

      this.route('profile', {
    path: '/profile',
  });

    this.route('requests', {
    path: '/requests',
  });

    this.route('newRequest', {
    path: '/requests/new',
  });

  this.route('proposals', {
    path: '/proposals',
  });
})

Router.onBeforeAction("loading");