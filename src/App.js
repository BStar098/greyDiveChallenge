import { Route, Routes } from "react-router";
import FormItem from "./components/FormItem";
function App() {
  return (
    <div className="rootContainer">
      <Routes>
        <Route path="/:index" element={<FormItem />} />
      </Routes>
    </div>
  );
}

export default App;
