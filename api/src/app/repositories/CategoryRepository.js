const db = require('../../database');

class CategoryRepository {
  async findAll(orderBy = '') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    return db.query(`SELECT * FROM categories ORDER BY name ${direction}`);
  }

  async findByName(name) {
    const [row] = await db.query('SELECT name FROM categories WHERE name ILIKE $1', [
      name,
    ]);

    return row;
  }

  async create({ name }) {
    const [row] = await db.query(
      `
      INSERT INTO categories(name)
      VALUES($1)
      RETURNING *
    `,
      [name],
    );

    return row;
  }
}

module.exports = new CategoryRepository();
