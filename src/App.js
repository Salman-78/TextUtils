import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode]=useState('light');

  const [alert, setAlert]=useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

const toggleMode = () => {
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled", "success");
    document.title="TextUtils - Dark Mode";
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled", "success");
    document.title="TextUtils - Light Mode";

  }
}
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <Navbar/> */}
      <div className="container" my-3="true">
        <TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode}/>
      </div>
    </>
  );
}
export default App;
