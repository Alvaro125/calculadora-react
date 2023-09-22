import styled from "styled-components";
import "./App.css";
import Button from "./components/button";
import Input from "./components/input";
import { useState } from "react";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: #070707;
  border-radius: 1rem;
  padding: 1rem;
`;

function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleAddNumber = (num:string|number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setOperation("");
    }
  };

  const handleMultiNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const multi = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multi));
      setOperation("");
    }
  };

  const handleDiviNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const divi = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divi));
      setOperation("");
    }
  };

  const handlePercNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("%");
    } else {
      const perc = (Number(firstNumber) / 100) * Number(currentNumber);
      setCurrentNumber(String(perc));
      setOperation("");
    }
  };

  const handleSqrtNumbers = () => {
    if (currentNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("sqrt");
    } else {
      const perc = Math.sqrt(Number(currentNumber));
      setCurrentNumber(String(perc));
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "*":
          handleMultiNumbers();
          break;
        case "/":
          handleDiviNumbers();
          break;
        case "sqrt":
          handleSqrtNumbers();
          break;
        case "%":
          handlePercNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      <Container>
        <Input
          value={currentNumber}
          style={{ gridArea: "1 / 1 / 2 / 5" }}
        ></Input>

        <Button
          onClick={() => {
            handleOnClear();
          }}
        >
          CE
        </Button>
        <Button
          onClick={() => {
            handleSqrtNumbers();
          }}
        >
          &radic;
        </Button>
        <Button
          onClick={() => {
            handlePercNumbers();
          }}
        >
          %
        </Button>
        <Button
          onClick={() => {
            handleDiviNumbers();
          }}
        >
          &divide;
        </Button>

        <Button
          onClick={() => {
            handleAddNumber(7);
          }}
        >
          7
        </Button>
        <Button
          onClick={() => {
            handleAddNumber(8);
          }}
        >
          8
        </Button>
        <Button
          onClick={() => {
            handleAddNumber(9);
          }}
        >
          9
        </Button>
        <Button
          onClick={() => {
            handleMultiNumbers();
          }}
        >
          &times;
        </Button>

        <Button
          onClick={() => {
            handleAddNumber(4);
          }}
        >
          4
        </Button>
        <Button
          onClick={() => {
            handleAddNumber(5);
          }}
        >
          5
        </Button>
        <Button
          onClick={() => {
            handleAddNumber(6);
          }}
        >
          6
        </Button>
        <Button
          onClick={() => {
            handleMinusNumbers();
          }}
        >
          -
        </Button>

        <Button
          onClick={() => {
            handleAddNumber(1);
          }}
        >
          1
        </Button>
        <Button
          onClick={() => {
            handleAddNumber(2);
          }}
        >
          2
        </Button>
        <Button
          onClick={() => {
            handleAddNumber(3);
          }}
        >
          3
        </Button>
        <Button
          onClick={() => {
            handleSumNumbers();
          }}
          style={{ gridArea: "5 / 4 / 7 / 5" }}
        >
          +
        </Button>

        <Button
          onClick={() => {
            handleAddNumber(0);
          }}
        >
          0
        </Button>
        <Button
          onClick={() => {
            handleAddNumber(".");
          }}
        >
          .
        </Button>
        <Button
          onClick={() => {
            handleEquals();
          }}
        >
          =
        </Button>
      </Container>
    </>
  );
}

export default App;
