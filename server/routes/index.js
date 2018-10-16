import express from 'express';

const router = express.Router();
/* GET home page. */
router.get('/', (req, res) => {
  res.send('Welcome to the stormanager Api');
});

module.exports = router;
