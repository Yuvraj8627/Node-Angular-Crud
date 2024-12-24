const Category = require('../models/category');
exports.getAllCategories = (req, res) => {
    Category.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};
exports.createCategory = (req, res) => {
    const { name } = req.body;
    Category.create(name, (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ id: result.insertId, name });
    });
};
exports.updateCategory = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    Category.update(id, name, (err) => {
        if (err) return res.status(500).send(err);
        res.json({ id, name });
    });
};
exports.deleteCategory = (req, res) => {
    const { id } = req.params;
    Category.delete(id, (err) => {
        if (err) return res.status(500).send(err);
        res.json({ id });
    });
};
