export type IngredientNames = 'salad' | 'cheese' | 'meat' | 'bacon';

export type Ingredients = {
    [key in IngredientNames]: number;
}