var seeder = require('mongoose-seed');
var mongoose = require('mongoose');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://127.0.0.1:27017/server_hotel', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true
}, function () {

  // Load Mongoose models
  seeder.loadModels([
    './models/Member',
    './models/Booking',
    './models/Users'
  ]);

  // Clear specified collections
  seeder.clearModels(['Member', 'Booking', 'Users'], function () {

    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () {
      seeder.disconnect();
    });

  });
});

var data = [
  // start booking
  {
    'model': 'Booking',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cee1'),
        bookingStartDate: '12-12-2020',
        bookingEndDate: '12-12-2020',
        invoice: 1231231,
        itemId: {
          _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
          title: 'Village Angga',
          price: 6,
          duration: 2,
        },
        total: 12,
        memberId: mongoose.Types.ObjectId('5e96cbe292b97300fc903333'),
        bankId: mongoose.Types.ObjectId('5e96cbe292b97300fc903323'),
        payments: {
          proofPayment: 'images/bukti.jpg',
          bankFrom: 'BCA',
          status: 'Proses',
          accountHolder: 'ang'
        }
      }
    ]
  },
  // end booking

  // member
  {
    'model': 'Member',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903333'),
        firstName: 'Elfin',
        lastName: 'Sanjaya',
        email: 'elfinsanjaya12@gmail.com',
        phoneNumber: '082377954008'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903334'),
        firstName: 'Yein',
        lastName: 'Narayana',
        email: 'elfinsanjaya1207@gmail.com',
        phoneNumber: '082377954008'
      }
    ]
  },
  {
    'model': 'Users',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903345'),
        username: 'admin',
        password: 'rahasia',
      },
    ]
  }
];