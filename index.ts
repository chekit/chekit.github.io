import express, { NextFunction, Request, Response } from 'express';

const app = express();

app.disable('x-powered-by');
app.set('view engine', 'pug');

app.use(express.static(`${__dirname}/public`));
app.set('port', process.env.PORT || 8000);

app.get('/', (err, res, req) => {
	res.render('index', { pageTitle: 'Home', message: ' Meadowlark Travel' });
})

app.listen(app.get('port'), () => {
	console.log(`Express is running on http://localhost:${app.get('port')}.`);
});