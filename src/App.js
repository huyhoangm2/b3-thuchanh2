import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styles from "./styles.module.css";
import styled from 'styled-components';

export default function App() {
  const [numClicked, setNumClicked] = useState(0);
  const handleClick = () => {
    setNumClicked((current) => {
      return current = current + 1;
    });
  };
  const textStyle = (numClicked % 2 === 0) ? styles.textBlue : styles.textRed;
  return (
    <div className="App">
      <button onClick={handleClick}>Click here</button>
      <h2 className={textStyle}>You clicked {numClicked} times</h2>
      <h2 
style={{
        color:  (numClicked % 2 === 0) ? 'blue' : 'red'
}}
>You clicked {numClicked} times
</h2>
    </div>
  );
  
}
const StyledText = styled.h2`
  color: ${(props) => {
    if (props.numClicked % 2 === 0) {
      return "blue";
    }
    return "red";
  }};
`;
