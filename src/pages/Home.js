import { useEffect, useRef, useState } from 'react';
import Recipe from './../components/Recipe';
import classes from './Home.module.css';
import Loading from '../components/Loading';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const [isloading, setIsLoading] = useState(false);

  function handleSearch() {
    setQuery(inputRef.current.value);
    inputRef.current.value = '';
    setRecipes([]);
  }
  function onSubmitFormHandler(e) {
    e.preventDefault();
    setIsLoading(true);
  }

  useEffect(() => {
    getRecipes();
  }, [query]);

  const exampleUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=5f58e3cf&app_key=ce9299390e79f0d97d0dccf3c3d01f50`;

  const getRecipes = async () => {
    const response = await fetch(exampleUrl);
    const data = await response.json();
    setRecipes(data.hits);
    setIsLoading(false);
  };

  return (
    <div className={classes.home}>
      <section className={classes.front}>
        <h1>
          let's Start <span>Cooking</span>
          <br></br> with popular <span>Recipes</span>
        </h1>
        <p>
          Want to learn cook but confused how to start?<br></br> No need to
          worry again...!!
        </p>
        <a href="#main">Get Started</a>
      </section>
      <section className={classes.main} id="main">
        <form className={classes.search} onSubmit={onSubmitFormHandler}>
          <input
            type="text"
            placeholder="Search any recipe here"
            ref={inputRef}
          />
          <button onClick={handleSearch}>Search</button>
        </form>
        <div className={classes.recipe}>
          {!recipes.length > 0 && isloading && <Loading />}
          {!recipes.length > 0 && !isloading && (
            <p className="centered">No recipe to show, search first..!!</p>
          )}
          {recipes.length > 0 &&
            recipes.map((recipe) => (
              <Recipe
                className={classes.card}
                key={recipe.recipe.calories}
                hits={recipe.recipe}
              />
            ))}
        </div>
      </section>
      <div className="footer"></div>
    </div>
  );
};

export default Home;
