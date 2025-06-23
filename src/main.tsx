import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from "./components/context/AuthContext.tsx";
import App from './App.tsx';
import ProductCheckout from './components/ProductCheckout/ProductCheckout.tsx';
import ProductView from './components/ProductView/ProductView.tsx';
import ProductCart from './components/ProductCart/ProductCart.tsx';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.tsx';
import Account from './components/Account/Account.tsx';
import Address from './components/Account/Address.tsx';
import SearchPageCenter from './components/SearchPage/SearchPageCenter.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CartProvider } from "./components/context/CartContext.tsx";

const router = createBrowserRouter(
  [
    { path: "/", element: <App />, errorElement: <NotFoundPage /> },
    { path: "/productcheckout", element: <ProductCheckout />, errorElement: <NotFoundPage /> },
    { path: "/productview", element: <ProductView />, errorElement: <NotFoundPage /> },
    { path: "/productcart", element: <ProductCart />, errorElement: <NotFoundPage /> },
    { path: "/account", element: <Account />, errorElement: <NotFoundPage /> },
    { path: "/address", element: <Address />, errorElement: <NotFoundPage /> },
    { path: "/searchpage", element: <SearchPageCenter isMenuOpen={false} />, errorElement: <NotFoundPage /> },
    { path: "/product/:id", element: <ProductView /> },
    { path: "*", element: <NotFoundPage /> },
  ],
  {
    basename: "/online-store"
  }
);


createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <StrictMode>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </StrictMode>
  </AuthProvider>
);
