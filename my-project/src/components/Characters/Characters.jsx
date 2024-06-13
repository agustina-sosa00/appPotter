/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { getCharacters } from '../../helpers/booksHelper'
import { Link } from 'react-router-dom'

export const Characters = () => {
    const [charactersState, setCharactersState] = useState()
    console.log(charactersState, '<<<<<<<<<<<----------charactersState')

    useEffect(()=>{
        const Characters = async () => {
            try {
               const data = await getCharacters();
               setCharactersState(data) 
            } catch (error) {
                console.log(error)
            }
        } 
        Characters()
    }, [])

  return (
    <>
    <div className='w-full min-h-screen flex flex-wrap justify-evenly'>
        {
            charactersState?.length > 0 ? (
                charactersState.map((character)=>{
                    if(character.image){
                        return (
                        <div key={character.index} className='w-[300px] h-[400px] bg-gray-600 mb-2 flex flex-col justify-evenly items-center mt-10 rounded-2xl shadow-black shadow-xl'>
                            <img src={character.image} alt="" className='w-64 h-64 rounded-full '/>
                            <h2 className='text-center'>{character.fullName}</h2>
                            <Link to={`/character/${character.index}`}>
                                <button>Ver mas info</button>
                            </Link>
                            
                        </div>
                     )
                    }
                    
                })
            ) : (<p>no hay personajes que mostrar</p>)
        }
    </div>
    
    </>
  )
}
 
