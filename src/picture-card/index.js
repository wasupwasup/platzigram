var yo = require('yo-yo');
var moment = require('moment')
var translate = require('../translate');

module.exports = function pictureCard(pic){
  var el
  function render(picture){
    return yo`<div class="card ${picture.liked ? 'liked' : ''}" >
    <div class="card-image">
      <img class="activator" src="${picture.url}">
    </div>
    <div class="card-content">

      <a class="card-title" href="/user/${picture.user.username}">
        <img src="${picture.user.avatar}" class="avatar" />
        <span class="usename">${picture.user.username}</span>
      </a>
      <small class="right time">${translate.date.format(picture.createAt)}</small>
      <p>
        <a onclick=${like.bind(null, true)} href="#" class="left"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
        <a onclick=${like.bind(null, false)} href="#" class="left"><i class="fa fa-heart" aria-hidden="true"></i></a>
        <span class="left likes">${translate.message('likes', { likes: picture.likes} )}</span>
      </p>
    </div>
  </div>`
}

  function like(liked) {
    pic.liked = liked
    pic.likes += liked ? 1 : -1
    var newEl = render(pic)
    yo.update(el, newEl)
    return false
  }

  el = render(pic)
  return el
}
