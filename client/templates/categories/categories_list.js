var categoriesData = [
  {
    text: 'Compra',
    icon_name: 'shop',
    image_url: 'categories/1.jpg'
  },
  {
    text: 'Crea',
    icon_name: 'paint brush',
    image_url: 'categories/2.jpg'
  },
  {
    text: 'Aprende',
    icon_name: 'idea',
    image_url: 'categories/3.jpg'
  },
  {
    text: 'Vende',
    icon_name: 'money',
    image_url: 'categories/4.jpg'
  }
];

Template.categoriesList.helpers({
  categories: categoriesData
});

var subcategoriesData = [
  {
    text: 'Costura',
    image_url: 'subcategories/1.jpg'
  },
  {
    text: 'Tejido',
    image_url: 'subcategories/2.jpg'
  },
  {
    text: 'Crochet',
    image_url: 'subcategories/3.jpg'
  },
  {
    text: 'Joyería',
    image_url: 'subcategories/4.jpg'
  },
  {
    text: 'Pintura',
    image-url: 'subcategories/5.jpg'
  },
  {
    text: 'Jardinería',
    image-url: 'subcategories/6.jpg'
  },
  {
    text: 'Madera',
    image-url: 'subcategories/7.jpg'
  },
  {
    text: 'Tarjetería',
    image-url: 'subcategories/8.jpg'
  }
];
