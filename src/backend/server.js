import express from 'express';
import data from './data.js'
import wishlist from './wishlist.js'
import cors  from 'cors'
import  bodyParser from 'body-parser';
import { RssFeed } from '@material-ui/icons';
const app= express();
app.use(cors());
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )
  app.use(bodyParser.json())

app.get('/api/wishlists',(req,res)=>{
    res.send(data.wishlist)
})

app.get('/api/wishlists1',(req,res)=>{
    res.send(wishlist.data)
})
app.post('/api/wishlists1/Create',(req,res)=>{
    let a=0;
    wishlist.data.map(manga=>{
        if(manga.id===req.body.id){
            a++;
        }
    })
    if (a==0){
        wishlist.data.push({
            "id":req.body.id,
            "name":req.body.name,
            "description":req.body.description,
            "url":req.body.url,
            "alternateName":req.body.alternateName
        });
        console.log(req.body.id);
        res.send("successfull")
    }else{
        console.log("already added")
        res.send('1');
    }
    
})
app.post('/api/wishlists1/Delete',(req,res)=>{
    let a=0;
    wishlist.data.map(manga=>{
        if(manga.id===req.body.id){
           wishlist.data.pop(manga);
        }
    })
    
    
})

const port = process.env.PORT||5000;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
  });