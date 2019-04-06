import express from 'express';
import mongoose, { Schema } from 'mongoose';
import graphqlHTTP from 'express-graphql';

import schema from './graphql';

const app = express();

mongoose.connect('mongodb://aaaa:graphql_mima@47.99.152.43:27017/graphql', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', () => {
  console.log('数据库连接失败')
}).once('open', () => {
  console.log('数据库连接成功')
})




app.get('/', (req, res) => {
  res.send('Hello world, this is graphql api.')
})

app.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: true,
  pretty: true
})))

app.listen(3000, () => {
  console.log('Graphql API Running at port 3000');
})