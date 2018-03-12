const model = require('../models/snack')

function getAll (req, res, next) {
  const data = model.getAll()
  res.status(200).json({ data })
}

function create (req, res, next) {
  const result = model.create(req.body)

  if (result.errors) {
    return next({ status: 400, message: `Could not create new snack`, errors: result.errors })
  }

  res.status(201).json({ data: result })
}

function getOne(req, res, next) {
  const snack = model.getOne(req.params.id)
  if (snack.errors) {
    return next({ status: 400, message: `Cannot retrieve the snack`, errors: snack.errors })
  }
  res.json({ data: snack });
}

function update(req, res, next) {
  const snack = model.update(req.params.id, req.body)
  if (snack.errors) {
    return next({ status: 400, message: `Could not update the snack`, errors: snack.errors })
  }
  res.json({ data: snack })
}

function del(req, res, next) {
  const snack = model.del(req.params.id)
  if (snack.errors) {
    return next({ status: 400, message: `Could not delete the snack`, errors: snack.errors })
  }
  res.json({ data: snack })
}

module.exports = { getAll, getOne, create, update, del }
