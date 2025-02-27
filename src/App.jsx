import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./compounents/Form";
import EnquiryList from "./compounents/EnquiryList";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="grid grid-cols-[30%_auto] gap-10">
        <Form />
        <EnquiryList />
        </div>
      </div>
    </>
  );
}

export default App;
