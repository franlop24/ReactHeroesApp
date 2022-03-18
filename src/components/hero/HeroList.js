import { getHeroesByPublisher } from "../../helpers/getHeroesByPublisher"
import { HeroCard } from "./HeroCard";


export const HeroList = ({ publisher }) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if( !validPublisher.includes(publisher) ){
        throw new Error(`${ publisher } is not a valid publisher`);
    }

    const heroes = getHeroesByPublisher(publisher)
    return (
        <div className="row row-cols-1 row-cols-md-3 g-3">
                {
                    heroes.map( hero => (
                        <HeroCard 
                            key={ hero.id } 
                            { ...hero } 
                            />
                    ))
                }
        </div>
    )
}