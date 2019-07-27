var App = {
  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    Friends.initialize(); // added

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
  },

  fetch: function(callback = () => {}) {
    Parse.readAll(data => {
      // examine the response from the server request:
      // data.results.forEach(line => {
      //   var msg = MessageView.render({text: line.text, username: line.username, roomname: line.roomname})
      //   $('#chats').append(msg)
      // });
      data.results.forEach(item => Messages.allMessages.push(item));
      data.results.forEach(item => (Rooms.roomList[item.roomname] = true));
      console.log(Messages.allMessages);
      MessagesView.renderMessage(Messages.allMessages);
      RoomsView.initialize();

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
