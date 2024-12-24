const db = require('./db');

const Product = {
    getAll: (offset, limit, callback) => {
        const query = `
            SELECT products.id AS ProductId, products.name AS ProductName, 
                   categories.name AS CategoryName, categories.id AS CategoryId
            FROM products 
            INNER JOIN categories ON products.categoryId = categories.id 
            LIMIT ? OFFSET ?`;
        db.query(query, [limit, offset], callback);
    },

    getById: (id, callback) => {
        const query = `
            SELECT products.id AS ProductId, products.name AS ProductName, 
                   categories.name AS CategoryName, categories.id AS CategoryId
            FROM products 
            INNER JOIN categories ON products.categoryId = categories.id 
            WHERE products.id = ?`;
        db.query(query, [id], callback);
    },

    create: (name, categoryId, callback) => {
        const query = 'INSERT INTO products (name, categoryId) VALUES (?, ?)';
        db.query(query, [name, categoryId], callback);
    },

    update: (id, name, categoryId, callback) => {
        const query = 'UPDATE products SET name = ?, categoryId = ? WHERE id = ?';
        db.query(query, [name, categoryId, id], callback);
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM products WHERE id = ?';
        db.query(query, [id], callback);
    }
};