
'use strict'
const mongoose = require('mongoose');
const config = require('../config/config.js')

class MongoosePool {

    constructor() {
        this.url = config.mongoConfig.baseUrl
    }

    buildClient() {
        //console.log(this.url)
        mongoose.connect(this.url, {useNewUrlParser: true, useUnifiedTopology: true }).then().catch(e => console.log(e));
        mongoose.set('useCreateIndex', true);
        return mongoose;
    }

}


module.exports = MongoosePool 