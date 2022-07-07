const mongoose = require('mongoose');
const admin = require("firebase-admin");

const connectFirebase = async () => {
    var serviceAccount = require("basemongo-40a08-firebase-adminsdk-wjnhl-7d5ad61cc3.json");
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });

    console.log('DB connected [firebase]');
}

module.exports = connectFirebase

// nos conectamos a las (21:40 arg)