import { Db, MongoClient } from 'mongodb';
const {
  MONGO_USERNAME_ROOT,
  MONGO_PASSWORD_ROOT,
  MONGO_DB
} = process.env;

const options = {
  connectTimeoutMS: 5000,
  serverSelectionTimeoutMS: 5000,
};

let db: Db;

const loadDB = async () => {
  if (db) {
    return db;
  }

  try {
    const url = `mongodb://${MONGO_USERNAME_ROOT}:${MONGO_PASSWORD_ROOT}@mongo:27017/${MONGO_DB}?authSource=admin&directConnection=true`;
    const client = await MongoClient.connect(url, options);

    console.log('Connected successfully to MongoDB');

    db = client.db();
  } catch (error) {
    console.log(error);
    throw error;
  }

  return db;
};

export default loadDB;
