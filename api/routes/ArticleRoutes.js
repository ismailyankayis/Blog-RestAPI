"user strict";

module.exports = function(app) {
  var Article = require("../controllers/ArticleController");

  app
    .route("/articles")
    .get(Article.list_all_articles)
    .post(Article.create_a_article);

  app
    .route("/articles/:Id")
    .get(Article.read_a_article)
    .delete(Article.delete_a_article);
};
