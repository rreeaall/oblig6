import { useState, useEffect } from 'react';

const movies = ({ title, actor }) => {
    
const [data, setData] = useState("")

const getData = async = () =>{
    const dddata = await resonse.json()
    setData(dddata)
}

useEffect(() => {
    getData(title, actor)
}, [title, actor]);

}

export default movies;