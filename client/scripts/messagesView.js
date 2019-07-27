var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function() {
  },

  renderMessage: function(messages){
    console.log(messages)
    if (messages.constructor === [].constructor) {
      messages.forEach(message => {
        if (!message.roomname) message.roomname = '';
        if (!message.text) message.text = '';
        if (!message.username) message.username = '';
        $('#chats').append(MessageView.render(message))
      })
    } else {
      if (!message.roomname) message.roomname = '';
      if (!message.text) message.text = '';
      if (!message.username) message.username = '';
      $('#chats').append(MessageView.render(message))
    }

    // $('#chats').append(MessageView.render(message))
  }

};

