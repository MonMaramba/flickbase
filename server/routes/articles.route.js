const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articles.controller');
const { addArticleValidator } = require('../middlewares/validation');

//MIDDLEWARE
const auth = require('../middlewares/auth');

router.post(
  '/',
  auth('createAny', 'articles'),
  addArticleValidator,
  articlesController.createArticle
);

module.exports = router;
