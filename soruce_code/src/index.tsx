import { render } from "react-dom";
import React  from 'react';

import App from "./App";
import "normalize.css";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
