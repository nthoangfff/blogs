const mongoose = require('mongoose');
// otherFile.js

const connectToMongoDB = require('./connet');

// Call the connectToMongoDB function to establish the connection
connectToMongoDB();
// otherFile.js

const product = new mongoose.Schema({
    company: String,
    address: String,
    phone: Number,
    email: String,
    vegetables: [
        {
          name: String,
          price: Number,
          image:String,
          description: String
        }
      ],
      testimonials: [
        {
          name: String,
          comment: String
        }
      ]
    }
)

// const Product  = mongoose.model('Product', product);

// const newProduct = new Product({
//     company: "Vege5124214",
//     address: "123 Green Street, Veggieville",
//     phone: "1234567890",
//     email: "info@vege.com",
//     vegetables: [
//       {
//         name: "Carrot",
//         price: 3.0,
//         image: "images/img-7.png",
//         description: "Fresh and crunchy carrot, great for salads."
//       }
//     ],
//     testimonials: [
//       {
//         name: "John Doe",
//         comment: "I love shopping at Vege. The vegetables are always fresh and delicious!"
//       }
//     ]
//   });
 
//   newProduct.save()
//   .then(() => {
//     console.log('User created');
//   })
//   .catch((error) => {
//     console.error('Error creating user:', error);
//   });
module.exports = mongoose.model('Product', product);