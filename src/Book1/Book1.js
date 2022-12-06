import './Book1.css'
import {Link,useNavigate}from 'react-router-dom';
import axios from 'axios';
import React, {useState, useEffect} from 'react'
const Book=({id})=>{
  const history = useNavigate();
  const [data,setData]=useState(
    {
      id:"",
      name:"",
      alternateName:"",
      description:"",
      url:""
    }
  )
    const [manga, setManga]= useState([]);
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
      }
    
    ]);
    */
   
   /*function findManga(mangaName){
    return mangaName.name===name;
  }*/
  
    useEffect(()=>{
     
      const fetchData =  async()=>{
        const result = await axios.get('http://localhost:5000/api/wishlists')
        setManga(result.data)
       
        
      }
       fetchData()
     
    
    },[])
    /*function findManga(mangaName){
      return mangaName.name===name;
    }
   const variable= manga.find(findManga);*/
    
   
   let variable;
   function submit(e){
    e.preventDefault();
    setData(variable)
    axios.post("http://localhost:5000/api/wishlists1/Create",{
      "id":parseInt(variable.id),
      "name":variable.name,
      "alternateName":variable.alternateName,
      "description":variable.description,
      "url":variable.url
    }).then(res=>{
      
        console.log(res)
    })
    history("/category/CurrentBookList")
   }
    return(

       
        manga.map(book=>{

          if (book.id==id){
            variable=book;
            return ( <div className="book">
            <Link to={`/category/${book.id}`} > <img src={book.url} class="img"></img>
             <h1>{book.name}</h1>
            
             <p>{book.Description}</p>
             </Link>
             <p><Link to="/category/Wishlists"><button   onClick={(e)=>submit(e)} className='button'>Add To Wishlist</button></Link></p>
           </div>)
          }
          
        })
       
    )
}
export default Book