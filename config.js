require('dotenv').config()
module.exports = {
    database: {
      connectionString: process.env.MONGO_URL,
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    },
    server: {
      port: process.env.PORT || 5000
    }
  };