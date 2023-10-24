import { Route, Routes } from "react-router-dom";
import Dash from "./app/dash/dash";
import ContextProvider from "./app/contexts/context.jsx";

function MyRouter() {
  return (
    <ContextProvider>
      <Routes>
        <Route exact path="*" element={<Dash />} />
      </Routes>
    </ContextProvider>
  );
}

export default MyRouter;
