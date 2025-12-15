const { Sequelize } = require('sequelize');
require('dotenv').config();

// Connexion à Neon avec SSL
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
  define: {
    freezeTableName: true,
    underscored: false,
    timestamps: true,
  },
});

sequelize.authenticate()
  .then(() => console.log('✅ Connexion DB OK !'))
  .catch(err => console.error('❌ Erreur DB:', err));

module.exports = sequelize;
