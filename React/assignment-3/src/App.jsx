import "./App.css";
import AppLayout from "./components/antDesign/layoutnavbar";
import SearchInput from "./components/antDesign/search input";
import SearchDropdown from "./components/antDesign/search slider";
import NavScrollExample from "./components/bootstrap/navbar";

function App() {
  return (
    <>
    <AppLayout/>
      {/* <NavScrollExample /> */}
      <SearchDropdown />
      <SearchInput />
    </>
  );
}

export default App;
