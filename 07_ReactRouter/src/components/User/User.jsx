import React from 'react'
import { useParams } from 'react-router-dom';


function User() {

    const {id} = useParams()
    return (
        <div className='text-center bg-slate-700 text-white'>USER : {id} </div>
    )
}

export default User;
