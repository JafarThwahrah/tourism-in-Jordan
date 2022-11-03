import React from 'react'
import Tours from '../components/Tours'

function Home (data) {
   
  return (
    <div className='m-5'>
        <Tours data={data.data}/>
    </div>
  )
}

export default Home;