const Product = require("../models/Product");

// Create
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get by id
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product)
      return res.status(404).json({ message: "Product not found" });

    res.status(200).json(product);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update
exports.updateProduct = async (req, res) => {
  try {

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(product);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete
exports.deleteProduct = async (req, res) => {
  try {

    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Product deleted" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search by name
exports.searchProduct = async (req, res) => {

  const name = req.query.name;

  const products = await Product.find({
    productName: { $regex: name, $options: "i" }
  });

  res.json(products);
};

// Filter by category
exports.filterCategory = async (req, res) => {

  const cat = req.query.cat;

  const products = await Product.find({ category: cat });

  res.json(products);
};