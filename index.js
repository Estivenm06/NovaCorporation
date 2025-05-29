import express from 'express';
import mainRouter from './routers/pagesRouter.js';

const port = process.env.PORT || 3001; 

const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));
app.use('/', mainRouter);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})