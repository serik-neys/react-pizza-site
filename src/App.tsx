import React, { Suspense } from "react";
import "./scss/app.scss";
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFoud";

const Cart = React.lazy(() => import('./pages/Cart'))
const FullPizza = React.lazy(() => import('./pages/FullPizza'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={
          <Suspense fallback={<div>loading...</div>}>
            <Cart />
          </Suspense>} />
        <Route path="/pizza/:id" element={
          <Suspense fallback={<div>Идет загрузка...</div>}>
            <FullPizza />
          </Suspense>
        } />
      </Route>
    </Routes>
  )
}

export default App


