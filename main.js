const fs = require('fs');

function AddProduct(filePath, fileContent) {
    fs.appendFileSync(filePath, fileContent + '\r\n');
};

function FindProductById(filePath, id) {
    let data = fs.readFileSync(filePath, 'utf8');

    data = data.split('\r\n');
    
    for (let i = 0; i < data.length; i++) {
        if (id == data[i].split(',')[0]) {
            return data[i];
        }
    }
};

function UpdateProductById(filePath, id, newContent) {
    let data = fs.readFileSync(filePath, 'utf8');

    data = data.split('\r\n');

    for (let i = 0; i < data.length; i++) {
        if (id == data[i].split(',')[0]) {
            data[i] = newContent;
        }
    }

    fs.writeFileSync(filePath, data.join('\r\n'));
}

function DeleteProductById(filePath, id) {
    let data = fs.readFileSync(filePath, 'utf8');

    data = data.split('\r\n');

    for (let i = 0; i < data.length; i++) {
        if (id == data[i].split(',')[0]) {
            data.splice(i, 1);
        }
    }

    fs.writeFileSync(filePath, data.join('\r\n'));
};


// Add product
AddProduct('./List.csv', '1, Iphone X, 2019, 128/6, red');
AddProduct('./List.csv', '3, Xiaomi Note 7, 2020, 64/4, gray');
AddProduct('./List.csv', '7, Samsung A33, 2021, 128/6, black');

// Find product by id
console.log(FindProductById('./List.csv', 3))

// // Update product by id
UpdateProductById('./List.csv', 7, '7, Samsung A34, 2022, 128/8, blue');
console.log(FindProductById('./List.csv', 7))

// Delete product by id
DeleteProductById('./List.csv', 1);
DeleteProductById('./List.csv', 3);
DeleteProductById('./List.csv', 7);