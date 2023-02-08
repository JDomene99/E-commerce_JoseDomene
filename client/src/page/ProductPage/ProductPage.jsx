import React, { useEffect, useState } from "react";
import NavProducts from "./NavProducts";
import Aside from "./Aside";
import { Outlet  } from "react-router";
import { useLocation } from 'react-router-dom'

function ProductPage() {
  const location = useLocation();
  const product = location.pathname.split('/')[2]
  return (
    <main className="flex flex-row flex-wrap mx-20">
      <NavProducts className="w-full" />
      <Aside className="w-2/12"/>
      <Outlet context={{ data: product }} className="w-10/12"/>
    </main>
  );
}

export default ProductPage;
