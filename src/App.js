
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import RoutesApp from "./Routes/RoutesApp";
import StoreProvider from "./Context/Store";

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <RoutesApp />
      </div>
    </StoreProvider>
  );
}

export default App;
