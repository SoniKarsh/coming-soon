import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// ReactDOM - that interacts with the DOM (Document Object Model) of the web page.
// createRoot - creates a root for a React application.
// Takes one argument, which is a DOM element where React will manage the content.
// The exclamation mark (!) after the call indicates that we're certain this element exists and won't be null. 
// This is a practice to avoid potential errors during development.
// React.StrictMode - This is a React component that wraps the main application component (<App />). 
// It helps identify potential issues in your code during development by enforcing stricter rendering rules.
// As typescript, we need to assert with !, otherwise you can create externally and then use if else to check null or not
// Also you can have try catch block.
// Using the exclamation mark (!) is a shortcut to avoid null checks during development.
// Render has two arguments, React element to render and the container element where it should be displayed in the DOM.

// The render function takes a React element and a container element. 
// It uses these to create a virtual DOM, compares it to the previous virtual DOM, 
// and efficiently updates the real DOM in the web page to reflect the desired UI changes.

// render(element, container) - This is the React element that you want to render.
// It can be a built-in element like <div>, a custom component you create (like <App /> in your example), 
// or a fragment used to group child elements without introducing extra DOM nodes.
// Container - Expects only one argument.
// when you call render directly on the root object, 
// the container element you provided during root creation (the element with ID "root" in this case) is implicitly used.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
