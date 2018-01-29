// @flow
import React from 'react';
type Props = {
  name?: string,
  children?: string,
};
export default function RadioButton(props: Props) {
  return (
    <span>
      <input type="radio" name={props.name} value={props.children} />
      {props.children}
      <br />
    </span>
  );
}
