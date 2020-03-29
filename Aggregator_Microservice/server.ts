import { app } from './src/app'

const port = process.env.AGGREGATOR_MICROSERVICE_PORT;

// start the Express server
app.listen( port, () => {
    console.log( `aggregator microservice started at http://localhost:${ port }` );
} );