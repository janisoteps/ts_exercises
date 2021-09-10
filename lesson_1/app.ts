interface Product{
    id: number,
    name: string,
    price: number
}

function getProduct(id) : Product{
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
    }
}

const showProduct = (name: string, price:number)  => {
    return `The product ${name} costs ${price}$.`
};

const product = getProduct(1);


let message: string = showProduct(product.name, product.price);

console.log(message);
// create a new heading 1 element
let heading = document.createElement('h1');
heading.textContent = message;
// add the heading the document
document.body.appendChild(heading);

