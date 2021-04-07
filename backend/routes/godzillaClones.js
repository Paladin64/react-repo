const router = require("express").Router();
let GodzillaClone = require("../models/godzillaClone.model");

router.route("/").get((req, res) => {
  GodzillaClone.find()
    .then((godzillaClones) => {
      res.json(godzillaClones);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const link = req.body.link;
  const image = req.body.image;
  const appearances = Array(req.body.appearances);
  const abilities = Array(req.body.abilities);
  const meters = req.body.height.meters;
  const feet = req.body.height.feet;

  const newGodzillaClone = new GodzillaClone({
    name,
    link,
    image,
    appearances,
    abilities,
    height: {
      meters,
      feet
    }
  });

  newGodzillaClone
    .save()
    .then(() => res.json("Godzilla Clone added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  GodzillaClone.findById(req.params.id)
    .then((godzillaClone) => res.json(godzillaClone))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  GodzillaClone.findByIdAndDelete(req.params.id)
    .then(() => res.json("Godzilla Clone deleted"))
    .catch((err) => res.statusCode(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  GodzillaClone.findById(req.params.id)
    .then((godzillaClone) => {
      godzillaClone.username = req.body.username;
      godzillaClone.link = req.body.link;
      godzillaClone.image = req.body.image;
      godzillaClone.appearances = Array(req.body.appearances);
      godzillaClone.abilities = Array(req.body.abilities);
      godzillaClone.height = Object(req.body.height);

      godzillaClone
        .save()
        .then(() => res.json("Godzilla Clone updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
