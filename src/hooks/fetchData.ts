import {useState} from 'react';
import { useEffect } from 'react';

const FetchApi = (query : string) => {
    const [state, setState] = useState({});
  const url = "http://localhost:3001/";
  const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    };

    useEffect(() => {
      fetch(url, opts)
    .then(res => res.json())
    .then(data => setState(data))
    .catch(err =>console.error(err));
    }, [])
    
  return state;

}
export default FetchApi;