require('dotenv').config()
const axios=require('axios')

const showSearch=async(req,res)=>{
    const name=req.params.name
    await axios({
        url:"https://api.igdb.com/v4/games",
        method:"POST",
        headers:{
            'Accept': 'application/json',
            'Client-ID':`${process.env.CLIENT_ID}`,
            'Authorization': `Bearer ${process.env.AUTHORIZATION}`,
        },
        data:`search "${name}";fields cover.*,name,aggregated_rating,first_release_date,genres.*,platforms.*;where cover!=null & total_rating_count!=null & genres!=null & name!=null & aggregated_rating!=null;limit:16;`
    })
    .then((response)=>{
        res.json(response.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports={
    showSearch,
}