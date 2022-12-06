import React, {useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card';
import {Link}from 'react-router-dom';

import "./Wishlist.css"
import axios from 'axios';
const Wishlist = () => {
    
  const [people, setPeople]= useState([]);
  /*useState([ {
    "id": 1,
    "name": "Solo Leveling",
   "alternateName": "Na Honjaman Level-Up, Only I Level Up",
    "description": "E-class hunter Jinwoo Sung is the weakest of them all. Looked down on by everyone, he has no money, no abilities to speak of, and no other job prospects. So when his party finds a hidden dungeon, he's determined to use this chance to change his life for the better... but the opportunity he finds is a bit different from what he had in mind!",
    "url": "https://upload.wikimedia.org/wikipedia/en/9/99/Solo_Leveling_Webtoon.png"
  },
  {
    "id": 2,
    "name": "Berserk",
    "alternateName": "",
    "description": "Born beneath the gallows tree from which his dead mother hung, Guts has always existed on the boundary between life and death. After enduring a terrible childhood, he spends his adulthood in brutal combat, pitting his strength against others in order to build his own. Life is simple enough for Guts until he meets Griffith, the inspirational, ambitious, and beautiful leader of the mercenaries, the Band of the Hawk. When Guts loses to Griffith in a duel, he is forced to join the Band of the Hawk, and, despite himself, finds a sense of camaraderie and belonging amongst them. However, as Griffith leads his soldiers from victory to victory, the bloody wars and underhanded politics reveal a side to him that nobody quite expected. Very soon, what seems like a straightforward march for conquest becomes a harrowing struggle for humanity and life itself. Can Guts, a simple warrior, defend those who have come to mean the most to him, all the while struggling not to lose to the darkness he has carried with him his entire life?",
    "url": "https://upload.wikimedia.org/wikipedia/en/3/33/Berserk_2016_anime_key_art.jpg"
  },
  {
    "id": 3,
    "name": "One Piece",
    "alternateName": "",
    "description": "Long ago the infamous Gol D. Roger was the strongest and most powerful pirate on the seas. As he was about to be executed he revealed that he hid all of his wealth, including the legendary treasure known as One Piece, on an island at the end of the Grand Line - a treacherous and truly unpredictable sea. Monkey D. Luffy is a spirited, energetic and somewhat dim-witted young man with a very big dream: to find One Piece and become the Pirate King! However Luffy is no ordinary boy, as when he was younger he ate one of the Devil's Fruits and gained its power to become a Rubber Man. Now in this grand age of pirates Luffy sets out to gather a crew and sail to the most dangerous sea in the world so that he can fulfill his dream... and maybe even his appetite!",
    "url": "https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg"
  }]);
 */
useEffect(()=>{
  const fetchData = async()=>{
    const result =await axios.get('http://localhost:5000/api/wishlists')
    setPeople(result.data)
  }
  fetchData()

},[])
    return (
    <div className='tinderCards_cardContainer'>
       <div className='column1'>
          {people.slice(0,4).map((person)=>{
            return(<TinderCard className='manga_title'  preventSwipe={["up","down"]}>
                <Link to={`/category/${person.id}`}><div className="card"  style={{backgroundImage:`url(${person.url})`}}>
                 
                </div>
                <div> 
                  <h3>{person.name}</h3>
                 
                  </div>
              
                </Link>
            </TinderCard>

          )
            
          })
        }
        </div>
      
       
    </div>
  )
}

export default Wishlist;

