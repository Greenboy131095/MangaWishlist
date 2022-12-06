
import './App.css';
import axios from 'axios';
import { useState ,useEffect} from 'react';
import Header from './Header/Header.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Book from './Book/Book.js';
import Book1 from './Book1/Book1.js';
import Login from './login/Login.js'
import Product from './Product/Product.js'
import Wishlist  from './Wishlist/Wishlist.js';
import Wishlist1  from './Wishlist1';
import { Fragment } from 'react';
import Profiles from './Profiles'

function App() {
  const [peoples, setPeoples]=useState([])
  /*useState([
    { 
      id:"123",
      name:"Black Jack",
      rating:4.5,
      url: "http://2.bp.blogspot.com/-M-KXCs039xc/U6Jkh4LA7qI/AAAAAAAAovA/KPB4EoyW4oM/s1600/Bia-tap1.jpg",
      Price:20,
      Description:"The best seller",
      Summary:"Black Jack (Japanese: ブラック・ジャック, Hepburn: Burakku Jakku) is an episodic Japanese manga series written and illustrated by Osamu Tezuka in the 1970s, dealing with the medical adventures of the title character, doctor Black Jack.",
      Genre:"Medical Suspense",
      Written:"Osamu Tezuka",
      Published:"Akita Shoten"
    },
    {  
       id:"234",
       name:"Naruto",
       rating:4,
       url: "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
       Price:19,
       Description:"The best seller",
       Summary:"Black Jack (Japanese: ブラック・ジャック, Hepburn: Burakku Jakku) is an episodic Japanese manga series written and illustrated by Osamu Tezuka in the 1970s, dealing with the medical adventures of the title character, doctor Black Jack.",
       Genre:"Medical Suspense",
      Written:"Osamu Tezuka",
      Published:"Akita Shoten"
  },
  {
     id:"235",
     name:'One Piece',
     rating: 5,
     url: "https://cdni.fancaps.net/file/fancaps-animeimages/1674211.jpg",
     Price:18,
     Description:"The best seller",
     Summary:"Black Jack (Japanese: ブラック・ジャック, Hepburn: Burakku Jakku) is an episodic Japanese manga series written and illustrated by Osamu Tezuka in the 1970s, dealing with the medical adventures of the title character, doctor Black Jack.",
     Genre:"Medical Suspense",
      Written:"Osamu Tezuka",
      Published:"Akita Shoten"
  }

]);*/
useEffect(()=>{
  const fetchData = async()=>{
    const result =await axios.get('http://localhost:5000/api/wishlists')
    setPeoples(result.data)
  }
  fetchData()

},[])
const categories=[
  {name:'Wishlists'},
  {name:'Your Books'},
  {name:'Profile'},
  {name:'Log Out'}
];
  return (
    <div className="App">
     
     
    
     <Router>
    

       <Routes>
        {peoples.map(people=>{
          return(
            <Route path={`/yourmanga/${people.name}`} 
            element={
              <Fragment>
                <Header backButtons='/MangaTracker' />
                <Book name={people.name}/>
              </Fragment>}/>
          )
        })}
        
        {peoples.map(people=>{
          return(
            <Route path={`/category/${people.id}`} 
            element={
              <Fragment>
                <Header backButtons='/MangaTracker' />
                <Product id={people.id}/>
              </Fragment>}/>
          )
        })}
        <Route
              path="/category/Log%20Out"
              element={
                <Fragment>
                   <Login/>
                </Fragment>}
            ></Route>
             <Route
              path="/category/123"
              element={
                <Fragment>
                  <Header backButtons='/MangaTracker' />
                <Product id="123"/>
                </Fragment>}
            ></Route>
         
            <Route
              path="/category/CurrentBookList"
              element={
                <Fragment>
                  <Header  />
                  <Wishlist1/>
                </Fragment>}
            ></Route>
            <Route
              path="/category/Wishlists"
              element={
                <Fragment>
                  <Header  />
                  <Wishlist1/>
                </Fragment>}
            ></Route>
             <Route
              path="/"
              element={
                <Fragment>
                 <Login/>
                </Fragment>}
            ></Route>
            <Route
              path="/category/Profile"
              element={
                <Fragment>
                <Header backButtons='/MangaTracker' />
                <Profiles/>
                </Fragment>}
            ></Route>

            <Route
              path="/category/Your%20Bookself"
              element={
                <Fragment>
                 <Header/>
                 <div className='line1'> {peoples.slice(0,3).map(people=>{
                    return(<Book1 id={people.id}/>)
                  })}</div>
                   <div className='line1'> {peoples.slice(3,6).map(people=>{
                    return(<Book1 id={people.id}/>)
                  })}</div>
                  <div className='line1'> {peoples.slice(6,9).map(people=>{
                    return(<Book1 id={people.id}/>)
                  })}</div>
                   <div className='line1'> {peoples.slice(9,12).map(people=>{
                    return(<Book1 id={people.id}/>)
                  })}</div>
                  <div className='line1'> {peoples.slice(12,15).map(people=>{
                    return(<Book1 id={people.id}/>)

                  })}</div>
                  <div className='line1'> {peoples.slice(0,3).map(people=>{
                    return(<Book1 id={people.id}/>)
                  })}</div>
                </Fragment>}
            ></Route>
        
         
       
         <Route path="/MangaTracker" element={
           <Fragment >
              <Header/>
             <div className='line2'> <Book id='2'/></div>
              <Wishlist/>
              
           </Fragment>
            }>

            </Route>

         <Route path='/Profiles' element={
           <Fragment>
             <Header backButtons='/MangaTracker' />
             <Profiles/>
             
           </Fragment>}>

         </Route>
         
         

        
       </Routes>
     </Router>
     
    </div>
  );
}

export default App;
