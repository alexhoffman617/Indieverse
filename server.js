const express = require('express');
const expressGraphQL = require('express-graphql');
const cors = require('cors');

const {schema} = require('./server_prod/graphql/index');

const {prepopulate} = require('./server_prod/mongooes/prepopulate')

const config = require('./config');

const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
app.use(cors());

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));
// Start the app by listening on the default
// Heroku port
app.listen(config.port, () => {
  console.log("Server is running!");
});