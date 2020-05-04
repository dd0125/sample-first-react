import React from 'react';

interface Props {
  x: number;
}
interface State {
}
  
// <{}, State> = Props の型, State の型
class Sample extends React.Component<Props, State>  {

  constructor(props: any) {
    super(props);
    this.state = {
      x: 0
    }
  }

  


  render() {
    return (
      <div className="sample">
          <h3>サンプル</h3>
          props.x = 
          { this.props.x }

      </div>
    );
      
  }
}

export default Sample;
