import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <> {/* React-Fragment */} 
    
      <BrowserRouter>
        <Routes>
          <Route index element={<InitialPage />} />
          <Route path='/endPoint' element={<EndPoint />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
