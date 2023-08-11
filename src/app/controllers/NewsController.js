class NewsController {

    // [Get] / news
    newsIndex(req, res){
        res.render('news')
    }

    moreInf(req, res) {
        res.render('newsDetails', {li3: "duyanh"})
    }
}

module.exports = new NewsController