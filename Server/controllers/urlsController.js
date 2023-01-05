require('dotenv').config()
const axios=require('axios')


const showMostRated=async(req,res)=>{
    await axios({
        url:"https://api.igdb.com/v4/games",
        method:"POST",
        headers:{
  'Accept': 'application/json',
            'Client-ID':`${process.env.CLIENT_ID}`,
            'Authorization': `Bearer ${process.env.AUTHORIZATION}`,
        },
        data:"fields cover.*,total_rating_count,aggregated_rating; where cover!= null & total_rating_count != null; where total_rating_count > 1500 ; limit:25;"
    })
    .then((response)=>{
        res.json(response.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}
const showRecent=async(req,res)=>{
    await axios({
        url:"https://api.igdb.com/v4/games",
        method:"POST",
        headers:{
  'Accept': 'application/json',
            'Client-ID':`${process.env.CLIENT_ID}`,
            'Authorization': `Bearer ${process.env.AUTHORIZATION}`,
        },
        data:"fields cover.*,name,aggregated_rating,first_release_date,genres.*,platforms.*;where cover!=null & total_rating_count!=null & genres!=null & name!=null & aggregated_rating!=null & first_release_date > 1641024000;limit:30;"
    })
    .then((response)=>{
        res.json(response.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}
const showGamePage=async(req,res)=>{
    const id=req.params.id
    await axios({
        url:"https://api.igdb.com/v4/games",
        method:"POST",
        headers:{
  'Accept': 'application/json',
            'Client-ID':`${process.env.CLIENT_ID}`,
            'Authorization': `Bearer ${process.env.AUTHORIZATION}`,
        },
        data:`fields name,screenshots.*,platforms.*,genres.*,aggregated_rating,summary,involved_companies.*,artworks.*,cover.*,game_engines.*,game_modes.*,player_perspectives.*,release_dates.*,multiplayer_modes.*,similar_games.cover.*,keywords.*,websites.*, id;where id=${id}; `
    })
    .then((response)=>{
        res.json(response.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}
const showProfileGames=async(req,res)=>{
    const ids=req.body
    const str= `${ids}`;
    await axios({
        url:"https://api.igdb.com/v4/games",
        method:"POST",
        headers:{
            'Accept': 'application/json',
            'Client-ID':`${process.env.CLIENT_ID}`,
            'Authorization': `Bearer ${process.env.AUTHORIZATION}`,
        },
        data:`fields cover.*,name,id;where id=(${str});`
    })
    .then((response)=>{
        res.json(response.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports={
    showMostRated,
    showRecent,
    showGamePage,
    showProfileGames,
}