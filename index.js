const express = require("express");
const app = express();

const handlebars = require('express-handlebars');
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'default',
}));

app.use(express.static('public'))
app.use(express.static('public/img'));
app.use('/plyr', express.static(__dirname + '/node_modules/plyr/dist/'));

app.get('/', (req, res) => {

    res.render('main', {
        layout: 'index'
    });
});

console.log("app is running");
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
