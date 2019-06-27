const Story = require('../models/Story')

module.exports = (app) => {
    app.get('/', (req,res) => {
        Story.find({ saved: false })
            .then(function(stories) {
                res.render('news', { stories: stories })
            }) 
    })

    app.get('/savedstories', (req,res) => {
        Story.find({ saved: true })
            .then(function(stories) {
                res.render('news', { stories: stories })
            }) 
    })
}