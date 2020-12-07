const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://simrat:st2uvwxyz8@graphql-api.5vlpg.mongodb.net/graphqlNotes?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var mongooseConnect = mongoose.connection;
mongoose.set('useFindAndModify', false);

const Note = mongoose.model("Note", {
    title: String,
    date: String,
    url: String,
    content: String,
    video: String,
    reminder: String,
    Image: String,
    tags: [{type: String}]
});

const Upcoming = mongoose.model("Upcoming", {
    title: String,
    date: String,
    url: String,
    content: String,
    video: String,
    reminder: String,
    Image: String,
    tags: [{type: String}]
});

module.exports = {
    Note,
    Upcoming
}