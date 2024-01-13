import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/context";
import RouterFile from "./components/RouterFile";



function App() {
  return (
    <div>

      <UserProvider>
        <BrowserRouter>
          <RouterFile />
        </BrowserRouter>
      </UserProvider>

    </div>
  )
}

export default App