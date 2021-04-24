// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    model: Category,
    unique: false,
    foreignKey:'category_id'
  },
  as: 
});


// Categories have many Products
Category.hasMany(Product, {
  through: {
    model: Product,
    unique: false,
    foreignKey:''
  },
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
    foreignKey: ''
  }
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
    foreignKey: ''
  }
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
