
// const express = require('express');
// const path = require('path');
// const router = express.Router();
// // const contactControllerr = require('../controllers/contact')
// const contactController = require('../controllers/contact');
// router.get('/contactus',contactController);
// router.post('/contactus',(req,res)=>{
//     res.redirect('/');
// })

// module.exports = router;

// routes/contactus.js
const express = require('express');
const router = express.Router();

router.get('/contactus', (req, res, next) => {
  res.render('contactus', { path: '/admin/contactus' });
});

router.post('/contactus', (req, res, next) => {
  // Handle the form submission logic here
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
