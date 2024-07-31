import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Listapostagens from "./postagens/listaPostagem";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listapostagens />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
