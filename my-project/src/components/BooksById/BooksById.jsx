/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBooks } from '../../helpers/booksHelper';
import '../../App.css'


export const BookById = () => {
  const { index } = useParams();

  const [state, setState] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const data = await getBooks();

        // Filtrar el objeto cuyo index coincida con el index del parámetro
        const character = data.find((elem) => String(elem.index) === String(index));

        if (character) {
          setState([character]); 
        } 
      } catch (error) {
        console.error(error, 'error al traer datos del personaje por id');
        setState([]); 
      }
    };
    getBook();
  }, [index]);

  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      {
        state.length > 0 ? (
          state.map((elem) => (
            <div key={elem.index} className='w-[80%] h-[500px] flex justify-center items-center'>
              <div className='w-1/3 h-full'>
                <img src={elem.cover} alt="" className='w-full h-full rounded-2xl shadow-black shadow-xl'/>
              </div>
              <div className='w-1/2 h-full flex flex-col justify-evenly items-center'>
                <h1 className='fontTitle text-4xl text-center'>{elem.title}</h1>
                <h2 className='text-center'>{elem.description}</h2>
                <h2>Fecha de publicacion: {elem.releaseDate}</h2>
                <h2> Cant. páginas: {elem.pages}</h2>
              </div>
              
            </div>
          ))
        ) : (
          <p>No se encontró el personaje para el índice {index}</p>
        )
      }
    </div>
  );
};
