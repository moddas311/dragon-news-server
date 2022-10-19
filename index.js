const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());

const news = require('./data/news.json');
const categories = require('./data/categories.json');


app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(news => news._id === id);
    res.send(selectedNews);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news);
    }
    else {
        const categoryNews = news.filter(news => news.category_id === id)
        res.send(categoryNews);
    }
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/', (req, res) => {
    res.send('News API Ruing');
});


app.get('/news-category', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log('Dragon news server running port:', port);
})