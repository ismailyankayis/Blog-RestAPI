"user strict";

module.exports = function(app) {
  var Category = require("../controllers/CategoryController");

  app
    .route("/categories")
    .get(Category.list_all_categories)
    .post(Category.create_a_category);

  app
    .route("/categories/:Id")
    .delete(Category.delete_a_category);
};