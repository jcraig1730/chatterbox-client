var Friends = {
  addFriend: function(){

  },

  toggleStatus: function(name){
    if (this.friendList.includes(name)){
      this.friendList.splice(this.friendList.indexOf(name), 1);
    } else {
      this.friendList.push(name);
    }
    console.log(this.friendList)
  },

  friendList: [],

  initialize: function(){

    $(document).on('click', '.username', function(element){
      console.log(element.target.innerText);
      Friends.toggleStatus(element.target.innerText)
    });
  }

};