
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Categories from './Components/Categories/Categories.jsx'
import Brands from './Components/Brands/Brands.jsx'
import Products from './Components/Products/Products.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import NotFound from './Components/NotFound/NotFound.jsx'
import UserContextProvider from './Components/Context/UserContext.jsx'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx'
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx'
import CartContextProvider from './Components/Context/CartContext.jsx'
import { Toaster } from 'react-hot-toast'
import WishList from './Components/Wish List/WishList.jsx'
import WishListContextProvider from './Components/Context/WishListContext.jsx'
import CheackOut from './Components/CheackOut/CheackOut.jsx'
import AllOrders from './Components/AllOrders/AllOrders.jsx'





let routers = createBrowserRouter([{
  path:'' , element : <Layout/>,children:[
    {index: true , element: <Register/>},
    {path:'login' , element: <Login/>},
    {path:'home' , element: <ProtectedRoute><Home/></ProtectedRoute>},
    {path:'cart' , element:  <ProtectedRoute><Cart/></ProtectedRoute>},
    {path:'wishlist' , element:  <ProtectedRoute><WishList/></ProtectedRoute>},
    {path:'brands' , element:  <ProtectedRoute><Brands/></ProtectedRoute>},
    {path:'categories' , element:  <ProtectedRoute><Categories/></ProtectedRoute>},
    {path:'cheackout' , element:  <ProtectedRoute><CheackOut/></ProtectedRoute>},
    {path:'products' , element:  <ProtectedRoute><Products/></ProtectedRoute>},
    {path:'/allorders' , element:  <ProtectedRoute><AllOrders/></ProtectedRoute>},

    {path:'productdetails/:id', element:<ProtectedRoute> <ProductDetails/> </ProtectedRoute>},
    {path:'*' , element: <NotFound/>},
  ]
}])
function App() {

  return <>

        
  <CartContextProvider>
 <WishListContextProvider>
 <UserContextProvider>

<RouterProvider router={routers}></RouterProvider>
<Toaster/>

</UserContextProvider>
 </WishListContextProvider>

  </CartContextProvider>
    

  </>
}

export default App
