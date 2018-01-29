// @flow
import React, {Component} from 'react';
import RadioGroup from './RadioGroup';
import RadioButton from './RadioButton';
// import type {State} from './state';
type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <div>
        <RadioGroup name="gender">
          <RadioButton>Male</RadioButton>
          <RadioButton>Female</RadioButton>
          <RadioButton>Rather not to say</RadioButton>
        </RadioGroup>
      </div>
    );
  }
}
export default App;
