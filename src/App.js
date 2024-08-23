import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./component/layouts/defaultLayout/defaultLayout";
import { mapRoutes } from "./routes";
import { LoadingProvider, useLoading } from './context/LoadingContext';
import Loading from './component/buttons/Loading';
import { NotificationProvider } from './context/NotificationContext';

function App() {
  return (
    <NotificationProvider>
      <LoadingProvider>
        <AppContent />
      </LoadingProvider>
    </NotificationProvider>
  );
}

const AppContent = () => {
  const { loading } = useLoading();

  return (
    <Router basename="/yumhub_homepage">
      <div className="App" style={{ backgroundColor: '#f5f5f5', width: '100vw', height: '100vh' }}>
        {loading && <Loading />}
        <Routes>
          {mapRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
