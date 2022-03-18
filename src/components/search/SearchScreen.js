import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroesByName } from '../../helpers/getHeroesByName';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../hero/HeroCard';
import { queryString } from 'query-string';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const query = queryString.parse(location.search);
  console.log(query);

  const [formValues, handleInputChange] = useForm({
    searchText: '',
  })

  const { searchText } = formValues;
  const heroesFiltered = getHeroesByName('Algo');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${ searchText }`);
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
