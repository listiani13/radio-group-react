// @flow
import React, {Component} from 'react';
type Props = {
  name: string,
  children?: mixed,
};
export default class RadioGroup extends Component<Props> {
  // let addPropToChild = React.Children.map();

  render() {
    let {name} = this.props;
    let childWithProp = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        name: name,
      });
    });
    return <div>{childWithProp}</div>;
  }
}
