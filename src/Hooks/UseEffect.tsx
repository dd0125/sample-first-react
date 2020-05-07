import * as React from 'react';

type Props = {
}



const UseEffect: React.FC<Props> = (props): React.ReactElement => {
  const [count, setCount] = React.useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  React.useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    // alert(count);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );  
  

}

export default UseEffect;