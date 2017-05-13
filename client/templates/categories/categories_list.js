var categoriesData = [
  {
    text: 'Compra',
    icon_name: 'shop',
    image_url: 'categories/1.jpg',
    route: '/buy'
  },
  {
    text: 'Crea',
    icon_name: 'paint brush',
    image_url: 'categories/2.jpg',
    route: '/craft'
  },
  {
    text: 'Aprende',
    icon_name: 'idea',
    image_url: 'categories/3.jpg',
    route: '/learn'
  },
  {
    text: 'Vende',
    icon_name: 'money',
    image_url: 'categories/4.jpg',
    route: '/sell'
  }
];

var subcategoriesData = [
  {
    text: 'Costura',
    image_url: 'subcategories/sewing.jpg'
  },
  {
    text: 'Tejido',
    image_url: 'subcategories/knitting.jpg'
  },
  {
    text: 'Crochet',
    image_url: 'subcategories/crochet.jpg'
  },
  {
    text: 'Joyería',
    image_url: 'subcategories/jewerly.jpg'
  },
  {
    text: 'Pintura',
    image_url: 'subcategories/painting.jpg'
  },
  {
    text: 'Jardinería',
    image_url: 'subcategories/gardening.jpg'
  },
  {
    text: 'Madera',
    image_url: 'subcategories/woodworking.jpg'
  },
  {
    text: 'Tarjetería',
    image_url: 'subcategories/card.jpg'
  }
];

Template.categoriesList.helpers({
  categories: categoriesData
});
