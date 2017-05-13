if (Products.find().count() === 0) {
  Products.insert({
    name: 'Camisa bordada',
    description: 'Esta camisa es bordada a mano, con toques de perlas de fantasía.',
    category: 'buy',
    subcategory: 'sewing',
    price: '12000',
    user_id: 'fNytBDGpjnjHqkhAX'
  });

  Products.insert({
    name: 'Cuadro punto de cruz',
    description: 'Hermoso cuadro bordado a mano con la técnica punto de cruz.',
    category: 'buy',
    subcategory: 'sewing',
    price: '110000',
    user_id: 'fNytBDGpjnjHqkhAX'
  });

  Products.insert({
    name: 'Hilo doble',
    description: 'Hilo especial para bordar con punto de cruz',
    category: 'craft',
    subcategory: 'sewing',
    price: '15000',
    user_id: 'fNytBDGpjnjHqkhAX'
  });
}
