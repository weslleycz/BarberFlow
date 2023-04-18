const admin = require('firebase-admin');
import sequelize from 'firestore-sequelize';
const serviceAccount = require('./barberflow-1a267-firebase-adminsdk-c6u8h-bdbbf46ab3.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

sequelize.initializeApp(admin);

export { sequelize };
