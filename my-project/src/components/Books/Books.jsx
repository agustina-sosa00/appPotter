/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { getBooks } from '../../helpers/booksHelper'

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
    <div className=' w-full min-h-screen bg-black flex justify-evenly flex-wrap '>
        {
            bookState?.map((book) => {
                return(
                    <div key={book.index} className=' w-[300px] flex flex-col justify-evenly items-center bg-gray-600 radius-10 m-10'>
                        <img src={book.cover} alt="" className=' w-[200px] h-[250px]'/>
                        <h2>{book.title}</h2>
                        <p className='text-center'>{book.description}</p>
                        <p>{book.releaseDate}</p>
                        <p>{book.pages}</p>
                    </div>
                )
            })
        }
    </div>
  )
}
