import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Default_Layout from './layouts/Default_Layout';
import { privateRoutes, publicRoutes } from './routes';

import Header from "./components/Header/Header";
import SearchBar from "./components/Search/Search";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Upload from "./pages/Upload/Upload";
import Home from "./pages/Home/Home";


export default function App() {
  return (
    // <Router>
    //   <div>
    //     <Header />
    //     <Routes>
    //       <Route exact path="/sign-in" element={<SignIn />} />
    //       <Route exact path="/sign-up" element={<SignUp />} />
    //       <Route exact path="/home" element={<Home />} />
    //       <Route exact path="/upload" element={<Upload />} />

    //     </Routes>
    //   </div>
    // </Router>

    <Router>
        <Routes>
        {
          privateRoutes.map((route, index)=> {
            const Page = route.component
            let Layout = Default_Layout
            return <Route key={index} path={route.path} element={
              <Layout>
                  <Page />
              </Layout>} /> 
          })
        }
        </Routes>
    </Router>
  );
}
