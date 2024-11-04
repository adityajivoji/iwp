const express = require("express");

const about = require("../controllers/about");
const all = require("../controllers/all");
const index = require("../controllers/index");
const newprod = require("../controllers/new");
const show = require("../controllers/show");
const router = express.Router();

/*
 * App Routes
 */

router.get("/", index.root);
router.get("/products", index.homepage);
router.get("/products/about", about.about);

router.get("/products/all", all.all);

router.get("/products/sortByAscPrice", all.sortasc);

router.get("/products/sortByDesPrice", all.sortdes);
router.get("/products/new", newprod.new);

//CREATE ROUTE
router.post("/products", newprod.afterCreate);
router.get("/products/:category/category", all.category);
router.get("/products/:brand/brand", all.brand);

//SHOW ROUTE
router.get("/products/:id/show", show.show);

router.post("/products/:id/reviews", show.review);
module.exports = router;
