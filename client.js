const net = require('net');

var HOST = '18.218.30.137'; 
var PORT = 8080;
var max = '100';

 var prompt = require('prompt');

  prompt.start();

  prompt.get(['number'], function (err, result) {
    
      if (err) { return onErr(err); }
        console.log('  number: ' + result.number);
        max = result.number;
      
        var client = new net.Socket();
        client.connect(PORT, HOST, function() {

            console.log('CONNECTED TO: ' + HOST + ':' + PORT);

            client.write(max);
        });


        client.on('data', function(data) {

            console.log('DATA: ' + data);

            client.destroy();

        });


        client.on('close', function() {
            console.log('Connection closed');
        });     

      
  });






