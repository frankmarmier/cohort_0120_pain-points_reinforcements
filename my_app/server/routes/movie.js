const express = require("express");
const router = new express.Router();
const movieModel = require("../models/movie");

router.get("/", (req, res, next) => {
  movieModel
    .find()
    .then(movies => {
      res.status(200).json(movies);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res, next) => {
  movieModel
    .findById(req.params.id)
    .then(movie => {
      res.status(200).json(movie);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
router.post("/", (req, res, next) => {
  movieModel
    .create(req.body)
    .then(createdMovie => {
      res.status(200).json(createdMovie);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
router.patch("/:id", (req, res, next) => {
  movieModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(movie => {
      res.status(200).json(movie);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
router.delete("/:id", (req, res, next) => {
  movieModel
    .findByIdAndDelete(req.params.id)
    .then(deletedMovie => {
      res.status(200).json(deletedMovie);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
