import React from 'react';
import './Ingredient.css';
import { IngredientNames } from '@/interfaces/Ingredients';

interface Props {
  type: IngredientNames | 'bread-top' | 'bread-bottom';
}

const Ingredient = ({ type }: Props) => {
  switch (type) {
    case 'bread-top':
      return (
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
      );
    case 'bread-bottom':
      return <div className="BreadBottom"></div>;

    case 'salad':
      return <div className="Salad"></div>;
    case 'bacon':
      return <div className="Bacon"></div>;
    case 'cheese':
      return <div className="Cheese"></div>;
    case 'meat':
      return <div className="Meat"></div>;

    default:
      return null;
  }
};

export default Ingredient;
