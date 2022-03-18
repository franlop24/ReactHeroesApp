import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../helpers/getHeroById";

export const HeroScreen = () => {

  const { heroId } = useParams();

  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(heroId), [heroId])
   
  const handleRegresar = () => {
    navigate( -1 );
  }
  
  if(!hero){
    return <Navigate to='/' />
  }

  const { id, superhero, publisher, first_appearance, alter_ego, characters } = hero
  
  const imagePath = `/assets/${ id }.jpg`;

  return (
      <div className="row mt-5">
        <div className="col-4" >
          <img 
            className="img-thumbnail"
            src={ imagePath }
            alt={ hero.superhero }
          />
        </div>
        <div className="col-8" >
          <h3>{ superhero }</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Alter Ego:</b>{ alter_ego }</li>
            <li className="list-group-item"><b>Publisher:</b>{ publisher }</li>
            <li className="list-group-item"><b>First Appareance:</b>{ first_appearance }</li>
          </ul>

          <h5 className="mt-5">Characters</h5>
          <p>{ characters }</p>

          <button 
            className="btn btn-outline-info"
            onClick={ handleRegresar }>
            Regresar
          </button>
        </div>
      </div>
  )
}
