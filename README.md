# React CRUD Operations with Class Components and Hooks

This repository demonstrates how to perform CRUD (Create, Read, Update, Delete) operations in React using two different methods: class components and functional components with hooks.

## Components

### 1. Timeclass Component (Class Component)

- Displays the current date and time using the `Date` object.
- Uses the class-based approach with state to manage the date and time.
- Updates the date and time every second using `setTimeout`.
- Utilizes `componentDidUpdate` lifecycle method to log the current time whenever the component updates.

### 2. Timehook Component (Functional Component with Hooks)

- Displays the current date and time.
- Utilizes functional components with hooks like `useState`.
- Updates the date and time every second using `setTimeout`.
- Simplifies state management using `useState` for managing date and time.

### 3. List Component (Class Component)

- Manages a list of departments with CRUD operations.
- Uses the class-based approach with state to manage the list of departments, the current department being edited, and whether the component is in update mode or not.
- Provides input fields for adding new departments or updating existing ones.
- Handles delete and update operations for individual departments.

### 4. Reduce Component (Functional Component with Reducer and Hooks)

- Manages a list of departments with CRUD operations.
- Utilizes `useReducer` hook along with a reducer function to manage complex state logic.
- Handles adding, updating, and deleting departments.
- Demonstrates a different approach to state management using reducers and hooks.

## How to Use

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Access the application in your browser at `http://localhost:3000`.

Feel free to explore each component to understand the differences between class components and functional components with hooks in React.

## Author

[Your Name]

Last Updated: May 25, 2024
