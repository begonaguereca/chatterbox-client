var app = {};

app.init = function() {

};

app.send = function (data) {
  $.ajax({
    url: 'http://parse.sfm6.hackreactor.com/',
    type: 'POST',
    data: data,
    success: function() {
      console.log('Success!!');
    }, 
    error: function() {
      console.log('ERROR');
    }
  });
};

app.fetch = function (informationLocation) {
  $.ajax({
    url: informationLocation,
    type: 'GET',
    success: function() {
      console.log('Success!!');
    }, 
    error: function() {
      console.log('ERROR');
    }
  });
};

app.clearMessages = function() {
  //$('#chats').html('');
  document.getElementById('chats').innerHTML = '';
};

app.renderMessage = function(message) {
  //debugger
  var newNode = document.createElement(message);
  // console.log (document.getElementById('chats').children);
  console.log($('#chats'));
  document.getElementById('chats').appendChild(newNode);
};

app.renderMessage ({
  username: 'Mel Brooks',
  text: 'Never underestimate the power of the Schwartz!',
  roomname: 'lobby'
});

app.renderRoom = function(room) {
  
};

