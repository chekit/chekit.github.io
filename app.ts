import express from 'express';
import path from 'path';

import router from './routes';

const app = express();

app.disable('x-powered-by');

app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

export default app;