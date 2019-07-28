var RoomsView = {
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    let rooms = Object.keys(Rooms.roomList);
    rooms.forEach(room => {
      RoomsView.renderRoom(room);
    });

    RoomsView.$button.on('click', function(){
      var newRoom = prompt('Please add a new room');
      Rooms.add(newRoom);
    });
  },

  renderRoom: function(room) {
    $('#rooms select').append(`<option value='${room}'>${room}</option>`);
  }
};
