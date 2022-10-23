import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Default_Layout from './layouts/Default_Layout';
import { privateRoutes, publicRoutes } from './routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Upload from "./pages/Upload/Upload";
import Home from "./pages/Home/Home";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { AuthProvider } from "./hooks/useAuth";


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
      <AuthProvider>
        <Routes>
          {privateRoutes.map((route, index) => {
            const Page = route.component
            let Layout = Default_Layout
            return <Route key={index} path={route.path} element={
              <PrivateRoute>
                <Layout>
                  <Page />
                </Layout>
              </PrivateRoute>}
            />
          })}

          {
            publicRoutes.map((route, index) => {
              const Page = route.component
              let Layout = Default_Layout
              return <Route key={index} path={route.path} element={
                <PublicRoute>
                  <Layout>
                    <Page />
                  </Layout>
                </PublicRoute>
              } />
            })
          }
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AuthProvider>
    </Router>
  );
}
