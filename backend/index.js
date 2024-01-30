const express = require('express');
const port = 33000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send(` Hello
    
    ` );
});
app.use('/forms', require('./routes/forms_router'));
app.listen(port, () => {
    console.log('Example app listening on http://localhost:' + port);
});

//Run app, then load http://localhost:port in a browser to see the output.