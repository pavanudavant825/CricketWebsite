import React, { useEffect,useState } from 'react'

const Series = () => {
    const [datarray, setdatarray]=useState([]); 

    let api_key ="3ceb6fa0-c1f2-471d-8bf9-925ce727ae18";
    
     async function fetchFromOffset(offset) {                 //refer w3school async await for this and below code and also from book

        let url=`https://api.cricapi.com/v1/series?apikey=${api_key}&offset=`;

    
           let response= await fetch(url + offset);
           let data1 =await response.json(); 
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
        <h1 className='smatchname'>{curElem.name}</h1>
        <h2 className='seriesdate'>{curElem.startDate} to {curElem.endDate}</h2>
        <h2 className='totalmatches'>Total Matches: {curElem.matches}</h2>
        <h2 className='t20is'>T20Is: {curElem.t20}</h2>
        <h2 className='odis'>ODIs: {curElem.odi}</h2>
        <h2 className='tests'>TESTs: {curElem.test}</h2>
        </div>        
        )
        }
        )
        }
    </>
       )
}

export default Series