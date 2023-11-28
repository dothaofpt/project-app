import {StrictMode} from 'react';
import { createRoot} from "react-dom/client";
// import App from './App';
import AxiosExample from './components/AxiosExample';
//import FetchExample from './components/FetchExample';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    {/* <App /> */}
 {/* <FetchExample></FetchExample> */}
 <AxiosExample></AxiosExample>
  </StrictMode>
);