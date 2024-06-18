/* eslint-disable no-undef */
import axios from "axios"


export const getBooks = async () => {
 try {
    const res = await axios.get('https://potterapi-fedeperin.vercel.app/es/books')
    console.log(res.data)
    return res.data
 } catch (error) {
    console.log(error)
 }
}


// -------------------------------------------------------------------------------

export const getCharacters = async () => {
 try {
    const res = await axios.get('https://potterapi-fedeperin.vercel.app/es/characters')
    console.log(res.data, 'character')
    return res.data
 } catch (error) {
    console.log(error)
 }
}

// -------------------------------------------------------------------------------




export const getSpells = async () => {
   try {
      const res = await axios.get('https://potterapi-fedeperin.vercel.app/es/spells')
      console.log(res.data, '<<<<<<<<<<<<<<-------spells helper ');
      return res.data
   } catch (error) {
      console.log(error)
   }
}