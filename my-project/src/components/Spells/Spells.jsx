/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { getSpells } from '../../helpers/booksHelper'

export const Spells = () => {
    const [state, setState] = useState()

    useEffect(()=>{
        const spellsGet = async () => {
            try {
                const data = await getSpells()
                console.log(data, '<<<<<<<<<<<<<<-------- data spells')
                setState(data)
            } catch (error) {
                console.log(error)
            }
        }
        spellsGet()
    }, [])

  return (
    <>
        <div className='w-full min-h-screen flex flex-wrap justify-center items-center'>
            {
                state?.length > 0 ? (
                    state.map((spell)=>{
                        return(
                            <div key={spell.index} className=' w-80 h-36  m-5'>
                                <h1>{spell.spell}</h1>
                                <p>{spell.use}</p>
                            </div>
                        )
                    })
                ) : (<p>no hay hechizos que mostrar</p>)
            }
        </div>
    </>  
)
}
