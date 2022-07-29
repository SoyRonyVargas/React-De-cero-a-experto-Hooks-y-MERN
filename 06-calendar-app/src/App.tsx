import AppRouter from './router/AppRouter';
import React from 'react'
import Loader from './auth/components/Loader';
function App() {
  return (
    <>
    <Loader />
    <AppRouter/>
    </>
  );
}

export default App;
