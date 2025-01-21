import { useEffect, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import MyRecipesComponent from './MyRecipesComponent';
import Header from './Header';
import edamam from './edamam.png';

function App() {

  const MY_ID = "7e837de7";
  const MY_KEY = "9385ac666061d0af21c9c22455331469";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("italian");

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);
      console.log(data.hits);
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault()
    setWordSubmitted(mySearch)
  }

  return (
    <div className='App'>
    <Header />

      <div className='heading-line'>
        <form onSubmit={finalSearch} className='input-wrapper'>
          <input onChange={myRecipeSearch} value={mySearch} placeholder='Search your recipe...'/>
          <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="searchicon" size="2x" />
        </button>
        </form>
      </div>

<div className='flexbox'>
  {myRecipes.map((element, index) => (
    <MyRecipesComponent key={index}
    label={element.recipe.label}
    image={element.recipe.image}
    like = {element.recipe.yield}
    calories={element.recipe.calories}
    weight={element.recipe.totalWeight}
    ingredients={element.recipe.ingredientLines} />
    ))}
  </div>

  <br />

<footer>
  <a className='footer' href='https://anastasiarzhavskaia.github.io/portfolio/#' target="_blank" rel="noreferrer">
          Developed with <FontAwesomeIcon icon={faHeart} /> by Anastasia Rzhavskaia
        </a>

        <a href='https://www.edamam.com/' target="_blank" rel="noreferrer">
          
          <img className='edamam' src={edamam} alt="logo" />
          
        </a>
        </footer>
    </div>
  );
}

export default App;
