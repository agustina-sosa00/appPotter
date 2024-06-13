/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacters } from '../../helpers/booksHelper';
import '../../App.css'

export const CharactersById = () => {
  const { index } = useParams();

  const [state, setState] = useState([]);

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const data = await getCharacters();
        // Filtrar el objeto cuyo index coincida con el index del parámetro
        const character = data.find((elem) => String(elem.index) === String(index));
        if (character) {
          setState([character]); 
        } 
      } catch (error) {
        setState([]); 
      }
    };
    getCharacter();
  }, [index]);

  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      {
        state.length > 0 ? (
          state.map((elem) => (
            <div key={elem.index} className='w-[80%] h-[500px] flex justify-center items-center'>
              <div className='w-1/3 h-full'>
                <img src={elem.image} alt="" className='w-full h-full rounded-2xl shadow-black shadow-xl'/>
              </div>
              <div className='w-1/2 h-full flex flex-col justify-evenly items-center'>
                <h1 className='fontTitle text-4xl'>{elem.fullName}</h1>
                <h2>Apodo: {elem.nickname}</h2>
                <h2>Casa: {elem.hogwartsHouse}</h2>
                <h2>Fecha Nac: {elem.birthdate}</h2>
                <h2>Interpretado por: {elem.interpretedBy}</h2>
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
