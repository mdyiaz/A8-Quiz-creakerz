import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home';
import Main from './layout/Main';
import Topics from './component/Topics/Topics';
import Statics from './component/Statics/Statics';
import Blog from './component/Blog/Blog';
import Quiz from './component/Quiz/Quiz';

function App() {

  const router = createBrowserRouter([

    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/topics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        },
        {
          path:'/statics',
          element: <Statics></Statics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path:'cart/:cartId',
          loader:async({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.cartId}`)
          },
          element:<Quiz></Quiz>
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
