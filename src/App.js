import './App.css';
import {useEffect,useState} from 'react';
import db from "./firebase"
import { onSnapshot,collection } from 'firebase/firestore';

const Dot= ({color}) =>{
  const style={
    height:25,
    width:25,
    margin:"0px 10px",
    backgroundColor:color,
    borderRadius:"50%",
    display:"inline-block"
  }
  return <span style={style} ></span>
};
function App() {
  const [colors, setColors] =useState([{name:"Loading...",id:"initial"}]); //array destructuring
  
  console.log(colors)
  useEffect(
    () => 
    onSnapshot(collection(db,"colors"),(snapshot) =>
      setColors(snapshot.docs.map((doc) => ({...doc.data(), id:doc.id})))
    ),
  
 []
 );
  return (
    <div className="App">
      <button className="button">New </button>
      <ul>
        {colors.map((color) => (
          <li key={color.id}>
            <a href="#">edit </a> <Dot color={color.value} /> {color.name} 
          </li>
        ))}
       
         
      </ul>
    </div>
  );
}

export default App;

