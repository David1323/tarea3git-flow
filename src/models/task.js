let nextId = 1;

function createTask({ title, description = "", done = false }) {
  return {
    id: nextId++,
    title,
    description,
    done,
    createdAt: new Date().toISOString(),
  };
}

module.exports = { createTask };
