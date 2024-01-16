import React, { useEffect,useState } from 'react'

const Home = () => {
    const [datarray, setdatarray]=useState([]); //destructuring

    let api_key ="3ceb6fa0-c1f2-471d-8bf9-925ce727ae18";
    
     async function fetchFromOffset(offset) {                 //refer w3school async await for this and below code and also from book

        let url=`https://api.cricapi.com/v1/currentMatches?apikey=${api_key}&offset=`;

    
           let response= await fetch(url + offset);
           let data1 =await response.json(); 
            console.log(data1.data);
           setdatarray(data1.data);
    }
    useEffect(() => {
        fetchFromOffset(0);
    }, [])
    
       return(
        <>
        {
     datarray.map((curElem)=>{
          return (
        
        <div className='relative' key={curElem.id}>
        <h1 className='matchname'>{curElem.name}</h1>
        <h2 className='matchtype'>Matchtype: {curElem.matchType}</h2>
        <h2 className='date'>{curElem.date}</h2>
        <h2 className='status'>Result: {curElem.status}</h2>
        <h2 className='venue'>Venue: {curElem.venue}</h2>
        <h2 className='teaminfo'><img src={curElem.teamInfo[0].img} alt="" />&nbsp;&nbsp;{curElem.teamInfo[0].shortname} vs {curElem.teamInfo[1].shortname}&nbsp;&nbsp;<img src={curElem.teamInfo[1].img} alt="" /></h2>
        </div>
        
        )
        }
        )
        }
    </>
       )
}

export default Home