
import './App.css';
import { List } from './component/listandkeys';

function App() {

  const array = [
    {
      productId : "1",
      productPic : "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=300",
      productName : "Campus",
      productDescription : "hsdfhjfsn fhjfhjsfhj fhjefhjsfhbsf efbhjefbhjsfbhjsdf",
      Price : "$400",
      Rating : "Rating: 4/5"
      
   },
   {
    productId : "2",
    productPic : "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=300",
    productName : "Rebook",
    productDescription : "hsdfhjfsn fhjfhjsfhj fhjefhjsfhbsf efbhjefbhjsfbhjsdf",
    Price : "$450",
    Rating : "Rating: 4.5/5"
    
 }, {
  productId : "3",
  productPic : "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=300",
  productName : "Bata",
  productDescription :"hsdfhjfsn fhjfhjsfhj fhjefhjsfhbsf efbhjefbhjsfbhjsdf",
  Price : "$300 ",
  Rating : "Rating: 3/5"
  
}
]


  return (
    <div className="App">
   {array.map((Element , ind) =>
   <List 
   obj = {Element}
   />
   )}
    </div>
  );
}

export default App;