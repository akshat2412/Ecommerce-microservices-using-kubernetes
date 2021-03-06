import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { AggregateRouter } from './Routes';

const app = express();
let orderRouter = new AggregateRouter().router;

app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('short'));
app.use('/orderDetails', orderRouter);
export { app };