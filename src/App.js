
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Main from './layout/Main'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      loader:async()=>fetch(' https://openapi.programming-hero.com/api/quiz'),
      errorElement:<ErrorPage></ErrorPage>,     
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div className="App">
   <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
