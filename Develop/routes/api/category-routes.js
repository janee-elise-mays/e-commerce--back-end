const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  try{
  const catData = await Category.findAll();
    res.status(200).json(catData);
  } catch(err) { res.status(500).json(err);}
});
  
// find all category
router.get('/:id', async(req, res) => {
  try{ 
    const catData = await Category.findByPk(req.params.id,
  {
    include: [{
      model: Product,
      through: Product.category_id,
      as: 'products'
    }]
   });

   res.status(200).json(catData);
  } catch(err) { res.status(400).json(err);}
});

router.post('/', (req, res) => {
  Category.create(req.body)
  .then((category) => res.status(200).json(category))
  .catch((err) => res.status(400).json(err));
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((category) => res.status(200).json(category))
  .catch((err) => res.status(400).json(err));
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((category) => res.status(200).json(category))
  .catch((err) => res.status(400).json(err));
});

module.exports = router;
