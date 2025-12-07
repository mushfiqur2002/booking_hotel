import { Route, Routes } from 'react-router-dom'
import RootLayOut from './_root/RootLayOut'
import Home from './pages/Home'
import AdminDashBoardLayOut from './_root/AdminDashBoardLayOut'
import AdminHome from './admindash/AdminHome'
import UserLogInSignUpPageV2 from './_auth/AuthFormPage'
import AdminUserLogInSignUpPage from './pages/AdminUserLogInSignUpPage'
import RequireAdmin from './_auth/admin_auth/RequireAdmin'
import AuthFormPage from './_auth/AuthFormPage'

function App() {

  return (
    <main>
      <Routes>
        <Route element={<RootLayOut />}>
          <Route index element={<Home />} />
        </Route>

        <Route path='/user/login&signup' element={<AuthFormPage authType={'customer'} />}>
        </Route>


        <Route path='/admin/auth' element={< AuthFormPage authType={'admin'} />}>
        </Route>


        <Route path="/admin/dashboard" element={
          <RequireAdmin>
            <AdminDashBoardLayOut />
          </RequireAdmin>
        }>
          <Route index element={<AdminHome />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
