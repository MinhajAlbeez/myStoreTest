const Product = require('../models/Product');
const { getProductFromExternalAPI } = require('../services/externalApi');

const getProduct = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const [external, local] = await Promise.all([
      getProductFromExternalAPI(id),
      Product.findOne({ id })
    ]);

    if (!external) return res.status(404).json({ error: 'Product not found' });

    res.json({
      id: external.id,
      title: external.title,
      current_price: local?.current_price || { value: 0.00, currency_code: 'USD' }
    });
  } catch (err) {
    console.error('Get Error:', err);
    res.status(500).json({ error: 'Internal error' });
  }
};

const updateProductPrice = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { current_price } = req.body;

    if (!current_price?.value || !current_price?.currency_code) {
      return res.status(400).json({ error: 'Invalid price' });
    }

    const external = await getProductFromExternalAPI(id);
    if (!external) return res.status(404).json({ error: 'Product not found' });

    const updated = await Product.findOneAndUpdate(
      { id },
      { id, current_price },
      { new: true, upsert: true }
    );

    res.json({
      id,
      title: external.title,
      current_price: updated.current_price
    });
  } catch (err) {
    console.error('Update Error:', err);
    res.status(500).json({ error: 'Internal error' });
  }
};

module.exports = { getProduct, updateProductPrice };
