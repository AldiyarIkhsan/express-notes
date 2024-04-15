import React, { MouseEventHandler } from 'react';
import './BuildControl.css';
import { IngredientNames } from '@/interfaces/Ingredients';

interface Props {
  type: IngredientNames;
  onMoreClick: MouseEventHandler<HTMLButtonElement>;
  onLessClick: MouseEventHandler<HTMLButtonElement>;
  isDisable: boolean;
}

const BuildControl = ({ type, onLessClick, onMoreClick, isDisable }: Props) => {
  return (
    <div className="BuildControl">
      <div className="Label">{type}</div>
      <button disabled={isDisable} onClick={onLessClick} className="Less">
        Less
      </button>
      <button onClick={onMoreClick} className="More">
        More
      </button>
    </div>
  );
};

export default BuildControl;
