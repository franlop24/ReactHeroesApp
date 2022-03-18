import React from 'react';
import { getHeroesByName } from '../../helpers/getHeroesByName';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

  const [formValues, handleInputChange] = useForm({
    searchText: '',
  })

  const { searchText } = formValues;
  const heroesFiltered = getHeroesByName('Algo');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(heroesFiltered);
  }

  return (
    <>
        <h1>Búsqueda</h1>
        <hr />

        <div className='row'>
          <div className='col-5'>
            <h4>Buscar</h4>
            <hr />
            <form onSubmit={ handleSearch }>
              <input 
                type="text"
                placeholder="Buscar un héroe"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ handleInputChange }
              />

              <button 
                type='submit'
                className='btn btn-outline-primary mt-1'
              >
                Buscar
              </button>
            </form>
          </div>

          <div className='col-7'>
            <h4>Resultados</h4>
            <hr />
            {
              heroesFiltered.map( hero => (
                <HeroCard
                  key={ hero.id } 
                  { ...hero }
                />
              ))
            } 
          </div>
        </div>
    </>
  )
}
