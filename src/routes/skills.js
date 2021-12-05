const express = require('express');
const router = express.Router();
const Knex = require('../db');

router.get('/list', async (req, res) => {
  const skills = await Knex('skills')
    .select(
      'skills.id',
      'skills.name',
      'modules.name as moduleName',
    )
    .join('modules', { 'skills.module_id': 'modules.id' });

  res.status(200).json(skills);
});

router.post('/add', async (req, res) => {
  const name = req.body.name;
  const moduleId = req.body.moduleId;

  if (!name || !moduleId) {
    return res.status(400).json({ message: 'Name and moduleId are required!' });
  }

  // select moduleId
  const module = await Knex('modules').select('*').where({ id: moduleId }).first();
  if (!module) {
    return res.status(400).json({ message: `module ${moduleId} is not found!` });
  }

  const inserted = await Knex('skills').insert({
    name: name,
    module_id: moduleId,
  });

  return res.status(200).json({ succes: true, data: inserted });
});

router.put('/update/:id', async (req, res) => {
  const id = req.params.id;
  const newName = req.body.name;
  const moduleId = req.body.moduleId;

  if (!id || !newName || moduleId) {
    return res.status(400).json({ message: 'Name and ID and moduleId are required!' });
  }

  const updated = await Knex('skills').update({ name: newName, module_id: moduleId }).where({ id: id });

  res.json({ succes: true, data: updated });
});

router.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: 'id is required!' });
  }

  const deleted = await Knex('skills').where({ id: id }).del();

  res.json({ succes: true, data: deleted });
});

module.exports = router;
