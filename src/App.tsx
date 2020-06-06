
import * as React from 'react';
import { hot } from "react-hot-loader/root";
import { Hello } from "./components/Hello";

interface Props {
   name: string
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return <div>
      <div>Hello {name}</div>
      <Hello author="Nisn Sabag"></Hello>
      </div>;
  }
}

export default hot(App);
