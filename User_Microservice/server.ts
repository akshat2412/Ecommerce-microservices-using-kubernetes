import { app } from './src/app'

const port = process.env.USER_MICROSERVICE_PORT;

// start the Express server
app.listen( port, () => {
    console.log( `user microservice started at http://localhost:${ port }` );
} );