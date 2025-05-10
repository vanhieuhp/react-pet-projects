import React from "react";

export default function Main() {

    const [ingredients, setIngredients] = React.useState(["Chicken", "Oregano", "Tomatoes"])
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient");
        if (!newIngredient) {
            return;
        }
        setIngredients([...ingredients, newIngredient])
    }

    return (
        <main>
            <form action={handleSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul className="ingredient-list">
                {ingredientsListItems}
            </ul>
        </main>
    )
}