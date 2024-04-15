import React, { ReactNode } from 'react';
import './Burger.css';
import { IngredientNames, Ingredients } from '@/interfaces/Ingredients';
import Ingredient from '@/components/Burger/Ingredient/Ingredient';

interface Props {
  ingredients: Ingredients;
}

const Burger = ({ ingredients }: Props) => {
  const ingredientList: ReactNode = Object.entries(ingredients).map(([ingredientName, value]) => {
    return Array(value)
      .fill('')
      .map((_, index) => {
        return <Ingredient key={ingredientName + index} type={ingredientName as IngredientNames} />;
      });
  });

  return (
    <div className="Burger">
      <Ingredient type="bread-top" />
      {ingredientList}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
