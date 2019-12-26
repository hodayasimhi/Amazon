const Express = require('express');
//const {ctrl} = require('./controller');
//const logger = require('morgan'); // NOTE: for debugging
const { AmazonRouter } = require('./router');
const app = Express();
const port = process.env.PORT || 3000;

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
//app.use(logger('dev'));



app.use('/Amazon', AmazonRouter);

//exception catch
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
   });
   
app.listen(port, () => console.log('Express server is running on port ', port));