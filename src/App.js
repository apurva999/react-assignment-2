import Card from "./profile"
import './App.css';
import Profiles from "./people";

function App() {
  return (
    <>
    <Card 
    imgUrl={Profiles[0].imgUrl}
    designation={Profiles[0].designation}
    name={Profiles[0].name}
    about={Profiles[0].about}
    />
    <Card 
    imgUrl={Profiles[1].imgUrl}
    designation={Profiles[1].designation}
    name={Profiles[1].name}
    about={Profiles[1].about}
    />
     <Card 
    imgUrl={Profiles[2].imgUrl}
    designation={Profiles[2].designation}
    name={Profiles[2].name}
    about={Profiles[2].about}
    />
    
    </>
    
  );
  
}


export default App;
