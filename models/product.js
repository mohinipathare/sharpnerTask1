const products = [];
const fs = require('fs');
const path = require('path');

// const getProductsFromFile = (cb)=>{
//     const p = path.join(path.dirname(process.mainModule.filename),
//         'data',
//         'products.json'
//     );  

//         fs.readFile(p,(err,fileContent)=>{
//             if(!err){
//                 cb(JSON.parse(fileContent));
//             }
//             console.log(err);
//             cb([]);
//         })
// }
const getProductsFromFile = (cb) => {
    const p = path.join(path.dirname(process.mainModule.filename),
        'data',
        'products.json'
    );

    fs.readFile(p, 'utf8', (err, fileContent) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File not found, return empty array
                cb([]);
            } else {
                console.log(err);
                cb([]);
            }
        } else {
            try {
                const products = JSON.parse(fileContent);
                cb(products);
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
                cb([]);
            }
        }
    });
}

module.exports = class product{
    constructor(t){
        this.title = t;
    }

    save(){
        const p = path.join(path.dirname(process.mainModule.filename),
        'data',
        'products.json'
    );  
        getProductsFromFile(products=>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err)=>{
            console.log(err);
        })
        });
    }

    static fetchAll(cb){
        getProductsFromFile(cb);
    }
}