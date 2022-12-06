import React, {useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card';
import {Link,useNavigate}from 'react-router-dom';
import axios from 'axios';

import "./Wishlist1.css"

const Wishlist1 = () => {
  const history = useNavigate();
  const [people, setPeople]= useState([]);
  /*useState([ 
    { 
      id:"123",
      name:"Black Jack",
      rating:4.5,
      url: "http://2.bp.blogspot.com/-M-KXCs039xc/U6Jkh4LA7qI/AAAAAAAAovA/KPB4EoyW4oM/s1600/Bia-tap1.jpg",
      Price:20,
      Description:"The best seller"
    },
    {  
       id:"234",
       name:"Naruto",
       rating:4,
       url: "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
       Price:19,
       Description:"The best seller"
  },
  {
     id:"235",
     name:'One Piece',
     rating: 5,
     url: "https://cdni.fancaps.net/file/fancaps-animeimages/1674211.jpg",
     Price:18,
     Description:"The best seller"
  },
  {
    id:"235",
    name:'One Piece',
    rating: 5,
    url: "https://cdni.fancaps.net/file/fancaps-animeimages/1674211.jpg",
    Price:18,
    Description:"The best seller"
 }
]);*/
const [data,setData]=useState(
  {
    id:"",
    name:"",
    alternateName:"",
    description:"",
    url:""
  }
)
 let a=0;
useEffect(()=>{
  const fetchData = async()=>{
    const result =await axios.get('http://localhost:5000/api/wishlists1')
    setPeople(result.data)
  }
  fetchData()
 

},[])
let variable;

     
   
  return (
    <div className='tinderCards_cardContainer'>
       
          <div className='column1'>{people.map((person)=>{

            return(<TinderCard className='manga_title' key={person.name} preventSwipe={["up","down"]}>
                <Link to={`/category/${person.id}`} > <div className="card"  style={{backgroundImage:`url(${person.url})`}}>
                 
                </div>
                <div> 
                  <h3>{person.name}</h3>
                
                  </div>
              
                </Link>
                
                <div className='pair_buttons'>
                <button  id={person.id} onClick={(e)=>{
                  e.preventDefault();
                 
                  axios.post("http://localhost:5000/api/wishlists1/Delete",{
                    "id":parseInt(person.id),
                    "name":person.name,
                    "alternateName":person.alternateName,
                    "description":person.description,
                    "url":person.url
                  }).then(res=>{
                    
                      console.log(res)
                     
                  })
                  window.location.reload();
                
                }} className='button1'>Remove </button>
                <a href="https://truyenqqpro.com/truyen-tranh/black-jack-1737-chap-166.html">
                  <button className='button1'> Continue Reading</button>
               </a>
               </div>
            </TinderCard>
          )})
          }
          </div>
         
          
        
        
         
          
       
    </div>
  )
}

export default Wishlist1;

