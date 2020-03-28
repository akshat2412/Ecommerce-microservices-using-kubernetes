import { app } from './src/app'

const port = process.env.ORDER_MICROSERVICE_PORT || 8085;

// start the Express server
app.listen( port, () => {
    console.log( `order microservice started at http://localhost:${ port }` );
} );