import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data=useLoaderData()
    // const [data,setData] =useState([])
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/avishij')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })

    // } ,[]) //whenever our page gets mounted or a component gets loaded then useEffect is used

  return (
    <div className='text-center bg-gray-600 text-white p-4 text-3xl '>Github followers: {data.followers}
    <img className="text-center" src={data.avatar_url} alt="Git profile" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader =async ()=>{
    const response =await fetch('https://api.github.com/users/avishij')
    return response.json()
}