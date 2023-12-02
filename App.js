
import { Router, RouterProvider , createBrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      < RouterProvider router={createBrowserRouter(Router)} />
    </div>
  );
}

export default App;
