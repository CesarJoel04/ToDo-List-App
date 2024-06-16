const express = require("express");

const router = express.Router();

const items = [
  { id: 1, name: "Buy groceries", comleted: false },
  { id: 2, name: "Pay bills", completed: true },
  { id: 3, name: "Pay rent", completed: false },
  { id: 4, name: "Go to the gym", completed: true },
];

router.get("/", (req, res) => {
  res.json({
    items,
  });
});

module.exports = router;
