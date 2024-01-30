const router = require('express').Router();

router.get('/', (req, res) => {
    const {fullName, age} = req.query;
    if(!fullName || !age) {
       return res.status(400).send('Bad Request - missing fullName or age');
    }
    res.send(`<h2>Hello ${fullName}, you are ${age} years old.</h2>`);
})
router.post('/', (req, res) => {
    const {fullName, age} = req.body;
    if(!fullName || !age) {
       return res.status(400).send('Bad Request - missing fullName or age');
    }
    res.send(`<h2>Hello ${fullName}, you are ${age} years old.</h2>`);
})

module.exports = router