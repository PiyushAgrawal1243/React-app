import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent/Header";
import MoviesComponent from "./components/MoviesComponet/MoviesComponent";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import AboutComponent from "./components/AboutComponent/AboutComponent";
import { lazy, Suspense } from "react";
import LoaderComponent from "./UtillsComponet/LoaderComponent/LoaderComponent";


function App() {

const  SubscriptionPage = lazy(()=>import('./components/SubscriptionPage/SubscriptionPage'));
const LoginComponent = lazy(()=>import('./components/LoginComponent/LoginComponent'));

  return (
    <>
     <BrowserRouter>
      <HeaderComponent />
        <main className="pt-16 h-screen">
          <Suspense fallback={<LoaderComponent />}>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path='/login' element={<LoginComponent />} />
            <Route path="/movies" element={<MoviesComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/subscription" element={<SubscriptionPage />} />
          </Routes>
          </Suspense>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
