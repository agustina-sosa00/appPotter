/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { getBooks } from '../../helpers/booksHelper'
import { Link } from 'react-router-dom'
import '../../App.css'

export const Books = () => {
    const [bookState, setBookState] = useState()

    useEffect(()=>{
        const booksGet = async () => {
            try {
                const data = await getBooks()
                setBookState(data)
            } catch (error) {
                console.log(error)
            }
        }
        booksGet()
    }, [])
  return (
    <div className='w-full min-h-screen flex justify-center items-center divBooks flex-wrap'>
        
            {
                bookState?.map((book) => {
                    return(
                        <div key={book.index} className=' w-[300px] h-[400px] flex flex-col justify-evenly items-center bg-gray-600 radius-10 m-10 rounded-2xl shadow-black shadow-xl'>
                            <img src={book.cover} alt="" className=' w-[200px] h-[250px]'/>
                            <h2>{book.title}</h2>
                            <Link to={`/books/${book.index}`}>
                            <button >Ver mas</button>
                            </Link>
                        </div>
                    )
                })
            }   
        
        
    </div>
  )
}
