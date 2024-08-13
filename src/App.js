import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { StaticRouter } from "react-router-dom/server";
import Frame from './components/navbar/Frame';
import Home from './components/Home/Home';
import Albums from './components/albums/Albums';
import Photos from './components/photos/Photos';
import LoginOutForm from './components/user/LoginOutForm';
import Details from './components/details/Details';
import NotFound from './components/NotFound';
import { SessionUserProvider }from './components/user/SessionUserContext';
import { GlobalProvider } from './components/GlobalState';
function App(props) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Update the `isClient` state to true if `window` is defined (i.e., client-side)
    setIsClient(typeof window !== 'undefined');
  }, []);

  const Router = !isClient ? StaticRouter : BrowserRouter;
  const routerProps = !isClient ? {
    location: props.location,
    context: {}
  } : {};

  return (
    <>
      <GlobalProvider>
        <SessionUserProvider>
          <Router {...routerProps}>
            <Frame>
              <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/albums" element={!isClient ? <NotFound/> : <Albums/>} />
                    <Route path="/photos/:albumId/:albumCaption" render={!isClient ? <NotFound/> : (props) => <Photos {...props} />} />
                    <Route path="/details/:photoId/:albumId/:albumCaption" element={!isClient ? <NotFound/> : <Details/>} />
                    <Route path="/user" element={!isClient ? <NotFound/> : <LoginOutForm/>} />
                    <Route path="*" element={<NotFound/>} />
              </Routes>
            </Frame>
          </Router>
        </SessionUserProvider>
      </GlobalProvider>
    </>
  );
}

export default App;
