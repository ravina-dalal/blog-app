import React,{useState,useEffect} from 'react'
import Quote from '../Quote/Quote';
import axios from 'axios';

const AllQuotes=()=>{

    
 const [quotes,setQuotes]=useState([]);
 const [isLoading,setIsLoading]=useState(true);

 async function getAllQuotes(){
  try{
    const res=await axios.get('http://localhost:8000/allquotes')
    setQuotes(res.data);
    setIsLoading(false);
  }
  catch (e) {
    console.log('cant quote');
  }
 }
 useEffect(()=>{
    getAllQuotes();
 },[]);

    return(
        <div>
            <h1>AllQuotes</h1>
            {isLoading?<p>Loading...</p>:<ul style={{padding:'0px'}}>
                {
                 quotes.map((quote)=>{
                    return <Quote
                    key={quote._id}
                    text={quote.text}
                    author={quote.author}
                    id={quote._id}
                    />
                 })   
                }
            </ul>
            }
            
        </div>
    )
}

export default AllQuotes