var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // console.log($('#message')[0].value)
    // console.log($('#message'))
    // console.log(App.username)
    console.log($('select'))
    Parse.create({username: App.username, text: $('#message')[0].value, roomname: 'this room!'})
    // App.fetch((data)=> console.log(data))
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};