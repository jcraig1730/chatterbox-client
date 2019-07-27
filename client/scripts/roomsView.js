var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // App.fetch((data)=> {
    //   console.log(data)
    //   // let roomNames = data.results.map(record => record.roomName)
    //   // console.log(roomNames)
    // })
  },

  renderRoom: function(room) {
    $('#rooms select').append(`<div>${room}</div>`)
  }

};
