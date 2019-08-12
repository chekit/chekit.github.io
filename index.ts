import app from './app';

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), () => {
	console.log(`Express is running on http://localhost:${app.get('port')}.`);
});