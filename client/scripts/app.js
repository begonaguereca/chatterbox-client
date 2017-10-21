var app = {};

app.init = function() {
};

app.send = function (data) {
  var newData = {
  createdAt: null,
  objectId: ,
  roomname: ,
  text: data,
  updatedAt: ,
  username: newSearch
  };

  $.ajax({
    url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function() {
      console.log(`You have successfully posted ${data} to the server`);
    }, 
    error: function() {
      console.log('Error, the server was unable to handle your request');
    }
  });
};

app.fetch = function () {
  $.ajax({
    url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
    type: 'GET',
    contentType: 'application/json',
    success: function(element) {
      console.log (element);
      element.results.forEach (function(obj) {
        //button 
        

        //roomName 


        //message
        $('#chats').append(`<p>${obj.username}</p>
          <p>${obj.text}</p>`);

      });
    }, 
    error: function() {
      console.log('ERROR herree');
    }
  });
};

app.clearMessages = function() {
  $('#chats').html('');
  // document.getElementById('chats').innerHTML = '';
};

app.renderMessage = function(message) {
  console.log ('chats: ', $('#chats'));
};

app.renderRoom = function(roomName) {
  console.log ('room: ', $('#roomSelect'));
  $('#roomSelect').html(`<option>${roomName}</option>`);
};

app.handleUsernameClick = function () {
  return true;
};

// $('#chats').append (app.fetch ());
app.fetch ();

$('#sharing').click(function() {
  app.send($('#usertext'));


});


// app.fetch ();



