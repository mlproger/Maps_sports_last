import {Layout} from './components/Layout.jsx'
import {Routes, Route} from 'react-router-dom'
import {MainPage} from './pages/MainPage.jsx'
import {MapPlacesPage} from './pages/MapPlacesPage.jsx'
import {ListPlacesPage} from './pages/ListPlacesPage.jsx'
import { CurretnPlacePage } from './pages/CurretnPlacePage.jsx'
import { LoginPage } from './pages/LoginPage.jsx'
import { RegistrationPages } from './pages/RegistrationPages.jsx'
import {TestPage} from './pages/TestPage.jsx'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { checkAuth } from './redux/features/auth/authSlice.js'
import { QueryClient, QueryClientProvider} from 'react-query'
import { ReviewPage } from './pages/ReviewPage.jsx'
const queryClient = new QueryClient()

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuth)
  }, [dispatch])
    return (
      <QueryClientProvider client={queryClient}>
        <Layout>
        <Routes>
          <Route path='/' element = {<MainPage />} />
          <Route path='/MapPlaces' element = {<MapPlacesPage />} />
          <Route path='/listPlaces' element = {<TestPage />} />
          <Route path='/:id' element = {<CurretnPlacePage />} />
          <Route path='/login' element = {<LoginPage />} />
          <Route path='/reg' element = {<RegistrationPages />} />
          <Route path='/review/:id' element = {<ReviewPage />} />
        </Routes>

        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

      </Layout>
      </QueryClientProvider>
    );
}

export default App;
