const admin = require("firebase-admin");
const serviceAccount = require("./basemongo-40a08-firebase-adminsdk-wjnhl-7d5ad61cc3.json");

(async function() {
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });

    console.log('DB connected [firebase]');

    const db = admin.firestore()
    const query = db.collection('users')

    await query.doc().create({name: 'R2'})
    await query.doc().create({name: 'asdasd'})

    console.log('Inserted!');

    // READ ALL
    const querySnapshot = await query.get()
    const docs = querySnapshot.docs;

    const response = docs.map((docFromQuery) => ({
        name: docFromQuery.data().name,
        id: docFromQuery.id
    }))
    console.log(response);

    // Actualizar
    const itemUpdated = await query.doc('GBqj6LPJN2zXVKf9MAiv').update({name: "newName"})
    console.log('Update!');
})()