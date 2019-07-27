var MessagesView = {

  $chats: $('#chats'),

  template: _.template(
    `<h1>Messages</h1>
    <div><%= name %></div>
    <div><%= text %></div>
    <div><%= createdAt %></div>
    `
  ),

  initialize: function() {

  },

  render: function() {
  },

  renderMessage: function(message){
    $('#chats').append(MessageView.render(message))
  }

};

