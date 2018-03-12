const uuid = require('uuid/v4')
let snacks = []

function getAll () {
  return snacks;
}

function create (body) {
  const errors = []
  const name = body.name

  let response
  if (!name) {
    errors.push('A name is required')
    response = { errors }
  } else {
    const snack = { id: uuid(), name }
    snacks.push(snack)
    response = snack
  }

  return response
}

function getOne(id) {
  const errors = []
  const snack = snacks.find((s) => s.id == id)
  if (!snack) {
    errors.push('Could not find snack')
    return { errors }
  } else {
    return snack
  }
}

function update(id, params) {
  const errors = []
  for (let i = 0; i < snacks.length; i++) {
    if (snacks[i].id == id) {
      snacks[i] = {
        id,
        ...params
      }
      return snacks[i];
    }
  }
  errors.push('Could not update snack')
  return { errors }
}

function del(id) {
  const errors = []
  for (let i = 0; i < snacks.length; i++) {
    if (snacks[i].id == id) {
      const foundSnacks = snacks[i];
      snacks.splice(i, 1);
      return foundSnacks;
    }
  }
  errors.push('Could not delete snack')
  return { errors }
}


module.exports = { getAll, create, getOne, update, del }
