import express from 'express';
import mainRouter from './routers/pagesRouter.js';

const port = process.env.PORT || 3001; 

const app = express();

// Set up body parser
app.use(express.urlencoded({extended: true}));

// Set up view engine in this case pug
app.set('view engine', 'pug');
app.set('pug options', { pretty: false })

// Define a static folder
app.use(express.static('public'));

app.use(express.json());

// Use or define a router
app.use('/', mainRouter);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})