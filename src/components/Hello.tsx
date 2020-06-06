import * as React from "react";

// import examples for different assets, libraries and file types
import '../js/example-css-sass';
import '../js/example-json-xml';
import htmlAsset  from '../js/example-html';
import lodashJoinStrings from '../js/example-lodash';
import { imageURL, iconURL, IconSvg, IconBootstrap } from '../js/example-images';


export interface HelloProps { author: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <div className="container">
      <h1> Hello from {this.props.author}!</h1>
      <div> lodash: {lodashJoinStrings}</div>
      <div dangerouslySetInnerHTML={{ __html: htmlAsset }} />
      <img src={imageURL} title="png mushroom" alt="png mushroom" />
      <img src={IconSvg} title="svg" alt="svg" />
      <img src={IconBootstrap} title="svg" alt="svg" />
      <img src={iconURL} title="png icon" alt="png icon" />
      <h2>bootstrap header</h2>
      <div className="sassi">
        bootstrap color variable
      </div>
      <div className="sassi2">
        overidden bootstrap color variable
      </div>
    </div>;
  }
}




// import * as React from "react";
// export interface HelloProps { compiler: string; framework: string; }
// export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;
