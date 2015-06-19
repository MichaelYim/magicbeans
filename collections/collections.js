this.Requests = new Meteor.Collection('requests');

// this.Requests.allow({
//   update: ownsDocument,
//   remove: ownsDocument,
//   insert: ownsDocument
// });

this.Proposals = new Meteor.Collection('proposals');

this.QuestionBoxes = new Meteor.Collection('questionBoxes');

this.Images = new Meteor.Collection('images');