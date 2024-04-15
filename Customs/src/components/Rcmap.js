import React from 'react';

function PComponent({ children }) {
  // Map over the children and add a new prop to each child
  const modifiedChildren = React.Children.map(children, (child) => {
    // Check if the child is a valid React element
    if (React.isValidElement(child)) {
      // Clone the child element and add a new prop
      return React.cloneElement(child, { additionalProp: 'value' });
    }
    // If the child is not a valid React element, return null
    return null;
  });

  // Render the modified children
  return <div>{modifiedChildren}</div>;
}

function ChildComponent({ additionalProp }) {
  return <div>Child Component - Additional Prop: {additionalProp}</div>;
}

function App() {
  return (
    <PComponent>
      <ChildComponent />
      <ChildComponent />
    </PComponent>
  );
}

export default App;
