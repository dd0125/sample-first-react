import * as React from 'react';

// Introのpropsのtype aliasを定義
type Props = {
  title: string;
}

// React.FC型を用いる
// ジェネリクスにIntroPropsを指定
const FC: React.FC<Props> = props => {
  return (
    <>
      <h2>{props.title}</h2>
      <p className="App-intro">
        {props.children}
      </p>
    </>
  )
}


export default FC;