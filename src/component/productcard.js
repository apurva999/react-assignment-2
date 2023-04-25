import './productcard.css'

export default function Productcard({proOne}){

    const addToCard=()=>{
        alert(" Product of is  1 , which is Shoes of brand Adidas has of rupees 4000 is added in the cart , please proceed to pay !!! ")
    }
return(
    <div className="item">
    <img src={proOne.productPic}
    />
    <h1>{proOne.productName}</h1>
    <p>{proOne.productDescription }</p>
    <h2>{proOne.Price}</h2>
    <h4>{proOne. Rating}</h4>
    <button onClick={addToCard}>Add To Cart</button>
    </div>
   
)

}