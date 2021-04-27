const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
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
    }]
   });

   res.status(200).json(catData);
  } catch(err) { res.status(400).json(err);}
});

router.post('/', async (req, res) => {
  try {
    const catData = await Category.create(req.body);

  res.status(200).json(catData);
  } catch(err) { res.status(400).json(err);}
});

router.put('/:id', async (req, res) => {
  try {
    const catData = await Category.update({
    category_name: req.body.category_name
    },
    {where: {id:req.params.id}
  }
  );
  res.status(200).json(catData);
  } catch(err) { res.status(400).json(err);}
});

router.delete('/:id', async (req, res) => {
  try{
    const catData = await Category.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json(catData);
  } catch(err) { res.status(400).json(err);}
});

module.exports = router;
