import { Op } from 'sequelize';
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

const getProducts = asyncHandler(async (req, res) => {
  const pageSize = parseInt(process.env.PAGINATION_LIMIT, 10) || 10;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          [Op.like]: `%${req.query.keyword}%`,
        },
      }
    : {};

  const { count, rows: products } = await Product.findAndCountAll({
    where: keyword,
    limit: pageSize,
    offset: pageSize * (page - 1),
  });

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Produto não encontrado');
  }
});

const createProduct = asyncHandler(async (req, res) => {
  const { name, price, image, brand, category, description, countInStock } = req.body;

  const product = await Product.create({
    name,
    price,
    userId: req.user ? req.user.id : null,
    image,
    brand,
    category,
    countInStock,
    numReviews: 0,
    description,
  });

  res.status(201).json(product);
});

const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  const product = await Product.findByPk(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Produto não encontrado');
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByPk(req.params.id);

  if (product) {
    await product.destroy();
    res.json({ message: 'Produto removido' });
  } else {
    res.status(404);
    throw new Error('Produto não encontrado');
  }
});

const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findByPk(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.userId === req.user.id
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Produto já avaliado');
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      userId: req.user.id,
    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: 'Avaliação adicionada com sucesso' });
  } else {
    res.status(404);
    throw new Error('Produto não encontrado');
  }
});

const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.findAll({
    order: [['rating', 'DESC']],
    limit: 3,
  });

  res.json(products);
});

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
};