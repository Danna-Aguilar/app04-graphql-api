import express from 'express';
import expressGraphql from 'express-graphql';
import Scheme from './schema/Schema.js';
import mongoose from 'mongoose';
const {graphqlHTTP} = expressGraphql;
const port = 5000;
const app = express();
const dbName='Tacosdb'
const user='admin'
const password='172920'
const connectionString= `mongodb+srv://${user}:${password}@clustertacos.ognri.mongodb.net/${dbName}?retryWrites=true&w=majority`
mongoose.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology:true})
.then(console.log('connected to Tacosdb'))
.catch (error=>console.llog(`[Error]: ${error}`));

app.use('/graphql', graphqlHTTP({
    schema: Scheme,
    graphiql: true
}));

app.listen(port, console.log(`listening at: http://localhost:${port}/graphql`));