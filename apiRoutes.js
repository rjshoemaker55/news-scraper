const cheerio = require('cheerio')
const axios = require('axios')
const Story = require('./models/Story')

module.exports = (app) => {
    app.get('/findstories', (req, res) => {
        axios.get('https://apnews.com/').then(function (response) {

            const $ = cheerio.load(response.data)

            let stories = []

            $('.cards').find('.FeedCard').each(function (i, element) {
                const headline = $(element).find('a.headline')
                const summary = $(element).find('p')
                const rawLink = $(element).find('.c0150').attr('href')
                const link = `https://apnews.com/${rawLink}`
                const timeStamp = $(element).find('.Timestamp')

                const result = {
                    headline: headline.text(),
                    summary: summary.text(),
                    link: link,
                    timeStamp: timeStamp.text(),
                }

                stories.push(result)

                Story.create(result)
                    .then(function(article) {
                        console.log(article)
                    })
                    .catch(function(err) {
                        console.log(err)
                    })

                return i < 11
            })


            res.render('news', { stories: stories })

        })
    })
}