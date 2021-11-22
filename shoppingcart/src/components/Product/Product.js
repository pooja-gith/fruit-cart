import QuantityButton from "./QuantityButton";
const Product = ({product}) => {
    return (
       <div className="product">
           <div>
          <img src={`./${product.img}.jpg`} alt={`${product.img}`}/>
           </div>
           <div className="descContainer">
           <h2 className="title">{product.name}</h2>
           <p>${product.price}</p>
           <QuantityButton/>
           <button className="addToCartButton">ADD TO CART</button>
           <a href="/">View full details &#859;</a>
           </div>
           
       </div>

    )
}
export default Product;