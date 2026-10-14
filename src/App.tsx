
import { useState } from 'react';

function App() {
  const [recipe, setRecipe] = useState('');
const [result, setResult] = useState<string[]>([]);

  const recipes = [
    'Chicken Biryani',
    'Masala Dosa',
    'Veg Fried Rice',
    'Tomato Pasta',
    'Paneer Curry'
  ];

  function searchRecipe() {
    const filtered = recipes.filter((item) =>
      item.toLowerCase().includes(recipe.toLowerCase())
    );

    setResult(filtered);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Recipe Finder</h1>

      <input
        type="text"
        placeholder="Enter recipe name"
        value={recipe}
        onChange={(e) => setRecipe(e.target.value)}
      />

      <button onClick={searchRecipe}>
        Search Recipes
      </button>

      <h2>Recipes Shown</h2>

      {result.length > 0 ? (
        result.map((item, index) => (
          <p key={index}>{item}</p>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
}

export default App;
