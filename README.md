# React Tutorial Repository

This repository contains a collection of React projects and examples designed to help you learn and practice React concepts.

## Repository Structure

The repository is organized into two main projects:

1. **core_concepts** - A collection of React examples demonstrating various core concepts
2. **tic_tac_toe_game** - An implementation of the classic Tic Tac Toe game using React

### Core Concepts Project

The `core_concepts` project contains multiple examples covering different React concepts:

- **Essentials** - Basic React concepts and syntax
- **Main Content** - Working with content and layouts
- **React Fun Facts** - Simple React facts application
- **Travel Journal** - A travel journal application
- **Chef Claude** - A recipe-related application
- **Form Action** - Working with forms in React

### Tic Tac Toe Game

A React implementation of the classic Tic Tac Toe game. This project demonstrates:
- React components
- State management
- User interaction
- Game logic

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Setting Up Core Concepts Project

1. Navigate to the core_concepts directory:
   ```
   cd core_concepts
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Setting Up Tic Tac Toe Game

1. Navigate to the tic_tac_toe_game directory:
   ```
   cd tic_tac_toe_game
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Core Concepts

The Core Concepts project allows you to explore different React examples. To view a specific example:

1. Open `core_concepts/src/App.jsx`
2. Uncomment the component you want to view and comment out the others
3. Save the file and the browser will automatically update

For example, to view the Travel Journal example:

```jsx
function App() {
  return (
    <>
        {/*<MainContent/>*/}
        {/*<ReactFact/>*/}
        <TravelJourney/>
        {/*<ChefClaude/>*/}
        {/*<FormAction/>*/}
        {/*<Essentials/>*/}
    </>
  )
}
```

### Tic Tac Toe Game

The Tic Tac Toe game provides a simple interface to play the classic game:

1. The game board consists of a 3x3 grid
2. Players take turns placing X and O markers
3. The first player to get three in a row (horizontally, vertically, or diagonally) wins
4. If all squares are filled and no player has three in a row, the game is a draw

## Learning Resources

- [React Documentation](https://react.dev/)
- [Create React App Documentation](https://create-react-app.dev/)
- [React Hooks Documentation](https://react.dev/reference/react)
- [React Router Documentation](https://reactrouter.com/)

## Contributing

Feel free to contribute to this repository by adding more examples or improving existing ones. Pull requests are welcome!

## License

This project is open source and available under the [MIT License](LICENSE).
