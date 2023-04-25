import Productcard from './component/productcard';
import './App.css';
import './component/productcard.css'


function App() {

      const Pro={
        productId : "1",
        productPic : "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=300",
        productName : "Nike",
        productDescription : "gsjkd kjadnjsn",
        Price : "7$",
        Rating : "4"
     
      }
  return (
    <div className="allPro">
      <div className="fRow">
       <Productcard proOne={Pro}/>
       <Productcard proOne={Pro}/>
       <Productcard proOne={Pro}/>
       </div>
       <div className="sRow">
       <Productcard proOne={Pro}/>
       <Productcard proOne={Pro}/>
       </div>
       </div>
       
  );
}

export default App;
