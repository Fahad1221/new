var net = require('net');

var HOST = '0.0.0.0'; 
var PORT = 8080;
var max = 0;

net.createServer(function(sock) {

    sock.on('data', function(data) {

        max = parseInt(data);
        
        var primes = getPrimes(max);
        
        sock.write('primes are: "' + primes + '"');

    });

    sock.on('close', function(data) {});

}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);

function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

