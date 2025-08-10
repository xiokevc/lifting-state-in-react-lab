import { useState } from 'react';
import './App.css';
import IngredientList from './components/IngredientList/IngredientList';
import BurgerStack from './components/BurgerStack/BurgerStack';

const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const [stack, setStack] = useState([]);

  const addToBurger = (ingredient) => {
    setStack((prevStack) => [ingredient, ...prevStack]);
  };

  const removeFromBurger = (indexToRemove) => {
    setStack((prevStack) =>
      prevStack.filter((_, index) => index !== indexToRemove)
    );
  };

  const clearBurger = () => {
    setStack([]);
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section className="burger-builder">
        <IngredientList ingredients={availableIngredients} addToBurger={addToBurger} />
        <div>
          <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
          {stack.length > 0 && (
            <button onClick={clearBurger} className="clear-button">
              Clear Burger
            </button>
          )}
        </div>
      </section>
    </main>
  );
};

export default App;


