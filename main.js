// Lovebug
// A somewhat buggy dating app.
// Fix it up if you can!


// our clients' names, used only for grabbing the right client from the user input
const names = [
  'ladybug',
  'caterpillar',
  'bee',
  'ant',
  'snail',
  'spider',
]

// the data we working with
// rank 1 is best
const clients = [
  '🐞', // rank: 6
  '🐛', // rank: 5
  '🐝', // rank: 4
  '🐜', // rank: 3
  '🐌', // rank: 2
  '🕷', // rank: 1
]


// the command the user wants run
const command = process.argv[2];
// the name they want it run on
const name = process.argv[3];
// the corresponding client
const client = clients[names.indexOf(name)]
// console.log(client)

// get a random client from whatever list was passed in
const randomClient = function(clients) {
  return clients[Math.floor(Math.random() * clients.length-1)]; 

}


const matchRandomly = function(client) { //***WORKS */
  // get our client's location within our system
  const clientLocation = clients.indexOf(client);

  // find all the clients before our client in the system
  const clientsBeforeOurClient = clients.slice(0, clientLocation);
  // find all the clients after our client in the system
  const clientsAfterOurClient = clients.slice(clientLocation + 1);//**added index after client */
  // add them together
  const otherClients = clientsBeforeOurClient.concat(clientsAfterOurClient);//**added .concat to merge */
  // console.log(otherClients);
  
  // exclude our client from matches by making an array of everyone else
 
  // return a random client from the remaining pool
  return randomClient(otherClients);
}


const reversal = clients.reverse(); //***added reverse function as global.//
const reversalNames = names.reverse();
const getRank = function(client) {

  return clients.indexOf(client) +1 //**WORKS */
}

const getMatch = function(client) { //***WORKS */
  // get the client's location in our data
const clientLocation = clients.indexOf(client);

  // find their two nearest neighbors
  const neighbor1 = clients[clientLocation - 1];
  const neighbor2 = clients[clientLocation + 1];
  const neighbors = [neighbor1, neighbor2];

  // pick one of them and return it
  return randomClient(neighbors); //***changed to utilize randomClient function//
}


if (command === 'random') {
  // match them randomly
  console.log(matchRandomly(client));
} else if (command === 'rate') {
  // get back their rank in the system
  console.log(getRank(client));
} else if (command === 'match') {
  // get one of their neighbors in the ranking
  console.log(getMatch(client));
} else if (command !== 'match' && command !== 'rate' && command !== 'random' ) {
  console.log('Please try one of our options:');
  console.log('random [client name] -> a totally random other user');
  console.log('match [client name] -> a match of similar ranking');
  console.log("rate [client name] -> the client's ranking in our system");
}