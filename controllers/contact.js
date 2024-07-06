const path = require('path');
const express = require('express');

const contactController= (req,res,next)=>{
    (req, res, next) => {
        res.sendFile(path.join(__dirname, '../', 'views', 'contactus.html'));
    }
}

module.exports = contactController;