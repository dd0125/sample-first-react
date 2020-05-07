import React, { createContext, useContext } from "react";
const Context = createContext({name: ''});

const GrandChild = () => {
  //分割代入
  const { name } = useContext(Context);
  return <div>
      {name}
    </div>;
};

const Child = () => <GrandChild />;

const UseContext = () => {
  return (
    <Context.Provider value={{ name: "taro2" }}>
      <Child />
    </Context.Provider>
  );
};

export default UseContext;