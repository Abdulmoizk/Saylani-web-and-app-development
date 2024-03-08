import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Profile from "../../pages/profile";
import AppLayout from "../../components/antdesign/NavBar";
import App404 from "../../components/antdesign/PagenotExist";
import { useEffect, useState } from "react";
import Login from "../../pages/Loginpage";
import Signup from "../../pages/SignupPage";
import { auth, onAuthStateChanged } from "../../firebase/firebase";
import { Spin } from "antd";
import Settings from "../../pages/settings";
import Userpage from "../../pages/users";

function AppRouter() {
  const [user, setUser] = useState(false);
  const [loader, setloader] = useState(true);

  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setUser(true);
        } else {
          setUser(false);
        }
        setloader(false);
      },
      []
    );
  });
  return (
    <>
      {loader ? (
        <div className="p-5 m-5">
          <Spin size="large">
            <div className="content" />
          </Spin>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                user ? (
                  <AppLayout>
                    <Home />
                  </AppLayout>
                ) : (
                  <Navigate to={"/login"} />
                )
              }
            />
            <Route
              path="/home"
              element={
                user ? (
                  <AppLayout>
                    <Home />
                  </AppLayout>
                ) : (
                  <Navigate to={"/login"} />
                )
              }
            />
            <Route
              path="/profile"
              element={
                user ? (
                  <AppLayout>
                    <Profile />
                  </AppLayout>
                ) : (
                  <Navigate to={"/login"} />
                )
              }
            >
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route
              path="/login"
              element={
                user ? (
                  <Navigate to={"/profile"} />
                ) : (
                  <AppLayout>
                    <Login />
                  </AppLayout>
                )
              }
            />
            <Route
              path="/signup"
              element={
                user ? (
                  <Navigate to={"/profile"} />
                ) : (
                  <AppLayout>
                    <Signup />
                  </AppLayout>
                )
              }
            />
            <Route
              path="/users"
              element={
                user ? (
                  <AppLayout>
                    <Userpage />
                  </AppLayout>
                ) : (
                  <Navigate to={"/login"} />
                )
              }
            />

            <Route
              path="*"
              element={
                <AppLayout>
                  <App404 />
                </AppLayout>
              }
            />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default AppRouter;
