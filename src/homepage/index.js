var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next) {
  title('Platzigram');
  var main = document.getElementById('main-container');
  var pictures = [
    {
      user: {
        username: 'miguelo',
        avatar: 'https://pbs.twimg.com/profile_images/712613525387083776/S9cQNrx8_400x400.jpg'
      },
      url:'http://materializecss.com/images/office.jpg',
      likes: 800,
      liked: true,
      createAt: new Date()
    },
    {
      user: {
        username: 'miguelo',
        avatar: 'https://pbs.twimg.com/profile_images/712613525387083776/S9cQNrx8_400x400.jpg'
      },
      url:'http://materializecss.com/images/office.jpg',
      likes: 0,
      liked: false,
      createAt: new Date().setDate(new Date().getDate() - 10)
    }

  ]
  empty(main).appendChild(template(pictures));

})
