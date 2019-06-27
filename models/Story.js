var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StorySchema = new Schema({
    title: String,
    timeStamp: String,
    summary: String,
    link: String,
    imgUrl: String,
    saved: Boolean
})

var Story = mongoose.model('Story', StorySchema)

module.exports = Story