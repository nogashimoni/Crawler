const express = require('express');
const router = express.Router();
const Crawler = require('../services/crawler').Crawler

router.get('/all', (req, res, next) => {
    res.status(200).send('all');
});

router.get('/:website', (req, res) => {
    const website = req.params.website;
    const tree = (new Crawler()).crawl(website);
    res.status(200).send(tree);
});

module.exports = router;
