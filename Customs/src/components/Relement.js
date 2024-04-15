import React from 'react';

function ParentComponent() {
  // Define some props to be passed to the child components
  const commonProps = {
    style: { color: 'blue' },
  };

  // Render ChildComponent1 and ChildComponent2 using React.cloneElement
  return (
    <div>
      {React.cloneElement(<ChildComponent1 />, commonProps)}
      {React.cloneElement(<ChildComponent2 />, commonProps)}
    </div>
  );
}

function ChildComponent1(props) {
  // Use the props passed by the ParentComponent
  return <p style={props.style}>Child Component 1</p>;
}

function ChildComponent2(props) {
  // Use the props passed by the ParentComponent
  return <p style={props.style}>Child Component 2</p>;
}

export default ParentComponent;
