const { connection } = require('./index');

connection.connect();

const query = `
CREATE TABLE IF NOT EXISTS logs (
	id int AUTO_INCREMENT PRIMARY KEY,
  endpoint varchar(255),
  params text,
	\`datetime\` datetime
)`;

connection.query(query, (error) => {
  if (error) {
    console.log('Error when create table logs');
    console.log(error);
  } else {
    console.log('Success create table logs');
  }

});

connection.end();