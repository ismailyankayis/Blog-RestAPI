"user strict";

var mongoose = require("mongoose"),
  ArticleDoc = mongoose.model("Articles"),
  CategoryDoc = mongoose.model("Categories");

module.exports = function() {
  CategoryDoc.find({ CategoryName: "İş Fikirleri" }, function(err, cat) {
    if (cat.length === 0) {
      CategoryName.create({
        CategoryName: "İş Fikirleri",
        Keywords: []
      });
    }
  });

  CategoryDoc.find({ CategoryName: "Haberler" }, function(err, cat) {
    if (cat.length === 0) {
      CategoryDoc.create({ CategoryName: "Haberler", Keywords: [] });
      console.log("asdas23");
    }
  });
};
