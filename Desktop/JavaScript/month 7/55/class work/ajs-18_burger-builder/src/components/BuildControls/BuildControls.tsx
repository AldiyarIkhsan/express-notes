import React from 'react';
import './BuildControls.css';
import BuildControl from '@/components/BuildControls/BuildControl/BuildControl';
import { IngredientNames, Ingredients } from '@/interfaces/Ingredients';

interface Props {
  ingredients: Ingredients;
  price: number;
  ingredientAdd: (type: IngredientNames) => void;
  ingredientRemove: (type: IngredientNames) => void;
}

const BuildControls = ({ ingredients, ingredientAdd, ingredientRemove, price }: Props) => {
  return (
    <div className="BuildControls">
      <p>
        {' '}
        Total price: <strong>{price} ₸</strong>
      </p>
      {Object.keys(ingredients).map((ingredientType) => {
        return (
          <BuildControl
            isDisable={!Boolean(ingredients[ingredientType as IngredientNames])}
            onLessClick={() => {
              ingredientRemove(ingredientType as IngredientNames);
            }}
            onMoreClick={() => {
              ingredientAdd(ingredientType as IngredientNames);
            }}
            key={ingredientType}
            type={ingredientType as IngredientNames}
          />
        );
      })}
    </div>
  );
};

export default BuildControls;
