const mongoose = require('mongoose');
const winston=require('winston');
const config=require('config');
module.exports = function () {
    //connect to DB
    // let db=config.get('dbPath');
    let db='mongodb://adesheddie:gaming619@ds255577.mlab.com:55577/mosh';
    mongoose.connect(db, { useMongoClient:true })
        .then((connected) => {
            winston.info("DB Connected: "+db);
            
        });
}