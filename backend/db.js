const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/postManagerDB', { useNewUrlParser : true , useUnifiedTopology: true },
    err => {
        if(!err) {
            console.log('success connection');
        } else {
            console.log('error' + JSON.stringify(err, undefined, 2));
        }
    }
)