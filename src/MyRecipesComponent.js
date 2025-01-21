import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faStar} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

function MyRecipesComponent({label, image, calories, ingredients, like, weight}) {

    return(<div className='flexbox'>

        <div className="flexItem">
            
            <div className='img-wrapper'>
                    <img src={image} alt={label} />
            </div>
            <div className='line'>
                <FontAwesomeIcon icon={faStar} className='star'/>
                <FontAwesomeIcon icon={faStar} className='star'/>
                <FontAwesomeIcon icon={faStar} className='star'/>
                <FontAwesomeIcon icon={faStar} className='star'/>
                <FontAwesomeIcon icon={faStar} className='star'/>
            </div>
            <p className='label'>{label}</p>
            <div className='line'>
                <p className='calories'><b>{like.toFixed()}</b> <FontAwesomeIcon icon={faHeart} className='likes'/> </p>
                <p className='calories'><b>{calories.toFixed()}</b> Kcal</p>
                <p className='calories'><b>{weight.toFixed()}</b> g</p>
            </div>
            
            <p className='ingredients'><i>Ingredients</i></p>

        <ul>
            {ingredients.map((ingredient, index) => (
                <li key={index}><FontAwesomeIcon icon={faCheck} className='icon'/> {ingredient}</li>
            ))}                
        </ul>
        </div>
    </div>)
}

export default MyRecipesComponent;