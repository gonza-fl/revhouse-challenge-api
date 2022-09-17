require('dotenv/config');
const Presentations = require('../../models/User')
const express = require('express');
const Router = require('express');
const sequelize = require('../../database');
const cors = require('cors');
const morgan = require('morgan');

const router = Router()
const app = express();

const { PORT, BASE_URL } = process.env;
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.head('/status', (_req, res) => {
  res.status(200).end();
});

const basePathParticipation = `${BASE_URL}/participations`;
router.use(basePathParticipation, require('../../routes/user.routes'));

app.use('/api', router);
app.use((_req, _res, next) => {
  const err = new Error('Not Found');
  err.code = 404;
  next(err);
});

async function serverUp() {
    try {
      await sequelize.sync({ force: true });
      console.log('DB conected successfully');
      app.listen(PORT, () => {
        console.log(`########## Server listen on port ${PORT} ##########`)
      });
      } catch (error) {
      console.log('Server up error', error);
    }
};



module.exports = serverUp;
