const mongoose = require('mongoose');
const connectToMongoDB = require('./connet');
connectToMongoDB();

  const slide = new mongoose.Schema ({
    Slide1 : [{
    title: String,
    description_slide: String,
    image_url: String
    }],

    Slide2 : [{
    title: String,
    description_slide: String,
    image_url: String
    }],

    Slide3 : [{
      title: String,
      description_slide: String,
      image_url: String
    }]
  
  })
  const SlideBander = mongoose.model('Slide',slide)

// const newSlideBander = new SlideBander({
//   Slide1 : [{
//     title: "Fresh Vegetable Shopaaaaaaa",
//     description_slide: "Many variations of passages of Lorem Ipsum available, but the majority have suffered.",
//     image_url: "images/banner-img.png"
//     }],

//     Slide2 : [{
//       title: "Fresh Vegetable Shopaaaaaaa2",
//       description_slide: "Many variations of passages of Lorem Ipsum available, but the majority have suffered.",
//       image_url: "images/banner-img.png"
//     }],

//     Slide3 : [{
//       title: "Fresh Vegetable Shopaaaaaaa2",
//       description_slide: "Many variations of passages of Lorem Ipsum available, but the majority have suffered.",
//       image_url: "images/banner-img.png"
//     }]
// });
// newSlideBander.save()

module.exports = mongoose.model('Slide',slide);