const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll();
    res.status(200).json(tagData);
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(
      id: req.params.id, {
      include: [
        {
          model: Product,
          through: ProductTag,
          as: 'tag_product'
        }]
    });
    res.status(200).json(tagData);
  } catch (err) {
    // console.log(err);
    res.status(400).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((tag) => res.status(200).json(tag))
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => res.status(200).json(tag))
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => res.status(200).json(tag))
});

module.exports = router;
