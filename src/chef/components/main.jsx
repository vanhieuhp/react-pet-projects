import React from "react";

export default function Main() {

    let [isImportant, setIsImportant] = React.useState("Hello")

    function changeValue() {
        setIsImportant("Hello React");
    }

    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");
        if (!newIngredient) {
            return;
        }
        ingredients.push(newIngredient);
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
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
            <h1>Is state important to know?</h1>
            <button onClick={changeValue} className="value">{isImportant}</button>
        </main>
    )
}