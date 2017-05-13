if (Users.find().count() === 0) {
  Users.insert({
    names: 'Yeliana Andrea',
    last_names: 'Torres Medina',
    identification: '987654321',
    mail: 'yatorresm@unal.edu.co',
    password: 'YEYO'
  });

  Users.insert({
    names: 'Jesús Felipe',
    last_names: 'Chavarro Muñoz',
    identification: '123456789',
    mail: 'jfchavarrom@unal.edu.co',
    password: 'YISUS'
  });
}
