import * as React from 'react';

type Props = {
}



const UseState: React.FC<Props> = (props): React.ReactElement => {
  const [count, setCount] = React.useState<number>(0);

  const onClick = () => {
    setCount(count + 1);
  }

  const result: React.ReactElement[] = [];
  result.push(<div>
    <h2>UseState</h2>
      ddd
  </div>);
  result.push(<div>
        <button onClick={onClick}>+1</button>
        { count }
  </div>);
  return <>
    {result}
  </>;
}

export default UseState;