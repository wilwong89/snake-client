const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
};

let connection;

const up = 'Move: up';
const down = 'Move: down';
const left = 'Move: left';
const right = 'Move: right';

const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log("Quit");
    process.exit();
  }
  switch (key) {
  case 'w':
    connection.write(up);
    break;
  case 's':
    connection.write(down);
    break;
  case 'a':
    connection.write(left);
    break;
  case 'd':
    connection.write(right);
    break;
  }
};

module.exports = {setupInput};