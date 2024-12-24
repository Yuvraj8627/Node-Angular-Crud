exports.getProducts = (req, res) => {
    const { page = 1, pageSize = 10 } = req.query;
    const offset = (page - 1) * pageSize;
    db.query(
        `SELECT products.id AS ProductId, products.name AS ProductName, categories.name AS CategoryName, categories.id AS CategoryId
         FROM products INNER JOIN categories ON products.categoryId = categories.id LIMIT ? OFFSET ?`,
        [parseInt(pageSize), parseInt(offset)],
        (err, results) => {
            if (err) return res.status(500).send(err);
            res.json(results);
        }
    );
};