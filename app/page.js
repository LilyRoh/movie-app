'use client'

import { useEffect } from 'react'
import SearchMoviesClient from './SearchMoviesClient';



export default function Page() {

  useEffect(()=>{
    console.log('in useeffec');
  })
  
  return (
<div className ="container">
    <h1 className="title">
    Search Moives
    </h1>
    <SearchMoviesClient></SearchMoviesClient>
  
</div>




    )

}