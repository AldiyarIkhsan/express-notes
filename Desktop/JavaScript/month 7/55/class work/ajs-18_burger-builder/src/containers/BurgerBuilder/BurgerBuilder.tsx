import BuildControls from '@/components/BuildControls/BuildControls';
import Burger from '@/components/Burger/Burger';
import IngredientPrices from '@/helpers/ingredientPrices';
import { IngredientNames, Ingredients } from '@/interfaces/Ingredients';
import React, { useState } from 'react';

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState<Ingredients>({ bacon: 0, salad: 0, cheese: 0, meat: 0 });

  const [totalPrice, setTotalPrice] = useState(IngredientPrices.bread);

  const addIngredientHandler = (type: IngredientNames) => {
    const oldCount = ingredients[type];

    const updatedCount = oldCount + 1;

    const updatedIngredients = { ...ingredients };

    updatedIngredients[type] = updatedCount;

    setIngredients(updatedIngredients);

    const priceAddition = IngredientPrices[type];

    const newPrice = totalPrice + priceAddition;

    setTotalPrice(newPrice);
  };

  const removeIngredientHandler = (type: IngredientNames) => {
    const oldCount = ingredients[type];

    if (oldCount <= 0) {
      return;
    }

    const updatedCount = oldCount - 1;

    const updatedIngredients = { ...ingredients };

    updatedIngredients[type] = updatedCount;

    setIngredients(updatedIngredients);

    const priceAddition = IngredientPrices[type];

    const newPrice = totalPrice - priceAddition;

    setTotalPrice(newPrice);
  };

  return (
    <>
      <Burger ingredients={ingredients} />
      <BuildControls price={totalPrice} ingredientAdd={addIngredientHandler} ingredientRemove={removeIngredientHandler} ingredients={ingredients} />
    </>
  );
};

export default BurgerBuilder;
