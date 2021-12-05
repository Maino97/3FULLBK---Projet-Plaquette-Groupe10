const express = require('express');
const router = express.Router();
const Knex = require('../db');

router.get('/list', async (req, res) => {
  const modules = await Knex('modules').select('id', 'name');
  res.status(200).json(modules);
});

router.post('/add', async (req, res) => {
  const name = req.body.name;
  if (!name) {
    return res.status(400).json({ message: 'Name is required!' });
  }

  const inserted = await Knex('modules').insert({
    name: name,
  });

  return res.status(200).json({ succes: true, data: inserted });
});

router.put('/update/:id', async (req, res) => {
  const id = req.params.id;
  const newName = req.body.name;

  if (!id || !newName) {
    return res.status(400).json({ message: 'Name and ID are required!' });
  }

  const updated = await Knex('modules').update({ name: newName }).where({ id: id });

  res.json({ succes: true, data: updated });
});

router.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: 'id is required!' });
  }

  const deleted = await Knex('modules').where({ id: id }).del();

  res.json({ succes: true, data: deleted });
});

module.exports = router;
