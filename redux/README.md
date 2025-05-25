# Redux Learning Projects

This repository contains two practical examples of Redux implementation in React applications, demonstrating different aspects of state management.

## Projects Overview

### 1. Redux Counter
A simple counter application demonstrating basic Redux concepts:
- State management with Redux Toolkit
- Actions and reducers
- Store configuration
- Component integration with Redux

### 2. Redux Cart
A shopping cart application showcasing more complex Redux implementations:
- Multiple reducers
- Complex state management
- Action creators
- Selectors
- Async operations

## Tech Stack

- React 18
- Redux Toolkit
- Modern JavaScript (ES6+)
- Create React App
- ESLint & Prettier for code quality

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd redux
```

2. Install dependencies for each project:

For Redux Counter:
```bash
cd redux_counter
npm install
```

For Redux Cart:
```bash
cd redux_cart
npm install
```

## Running the Projects

### Redux Counter

1. Navigate to the project directory:
```bash
cd redux_counter
```

2. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

### Redux Cart

1. Navigate to the project directory:
```bash
cd redux_cart
```

2. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
redux/
├── redux_counter/           # Basic Redux implementation
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── store/         # Redux store configuration
│   │   └── App.js         # Main application component
│   └── package.json
│
└── redux_cart/             # Advanced Redux implementation
    ├── src/
    │   ├── components/     # React components
    │   ├── store/         # Redux store configuration
    │   ├── features/      # Redux slices and features
    │   └── App.js         # Main application component
    └── package.json
```

## Available Scripts

For both projects:
- `npm start` - Start development server
- `npm test` - Run tests
- `npm run build` - Build for production
- `npm run eject` - Eject from Create React App

## Learning Resources

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Redux Documentation](https://react-redux.js.org/)
- [Redux Fundamentals](https://redux.js.org/tutorials/fundamentals/part-1-overview)

## Code Quality

Both projects use:
- ESLint for code linting
- Prettier for code formatting
- Modern JavaScript best practices

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private and not licensed for public use.

## Support

For support, please open an issue in the repository or contact the development team. 