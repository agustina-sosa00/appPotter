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

// export const getBookById = async () => {
//  try {
//     const res = await axios.get('https://api.potterdb.com/v1/books/3')
//    //  console.log(res.data)
//     return res.data
//  } catch (error) {
//     console.log(error)
//  }
// }

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

// export const getCharactersById = async (name) => {
//    try {
//       const res = await axios.get(`https://api.potterdb.com/v1/characters/${name}`)
//       console.log(res.data, 'character by id helper')
//       return res.data
//    } catch (error) {
//       console.log(error)
//    }
// }