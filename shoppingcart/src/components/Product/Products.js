import Product from "./Product";

const products = [
    {
id: 1,
price: 25,
img: 'garlic',
name: 'Garlic - 1kg',
category: 'vegetable'
    },
{
id: 2,
price: 45,
img: 'lemon',
name: 'Lemon - 1kg',
category: 'fruit'
}
];
const Products = () => {
    return (
       <div>Products
           {products.map(product => <Product product={product} />)}
       </div>

    )
}
export default Products;