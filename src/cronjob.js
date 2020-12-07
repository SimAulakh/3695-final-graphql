const cron = require('node-cron');
const moment = require('moment');
const { Note, Upcoming } = require('./database')
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://simrat:st2uvwxyz8@graphql-api.5vlpg.mongodb.net/graphqlNotes?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var mongooseConnect = mongoose.connection;

cron.schedule('*/30 * * * *', () => {
    Note.find({}, function(err, result) {
        var data = [];
        if (err) {
            console.log(err); }
        else {
            data.push(...result);}
            
        const result = data.filter(a => a.date == moment(new Date()).format("YYYY-MM-DD"))
        for(let x of result) {
            mongooseConnect.collection('upcomings').insertOne(x)
        }
      });
})