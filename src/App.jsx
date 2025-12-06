import { Route, Routes } from 'react-router-dom'
import RootLayOut from './_root/RootLayOut'
import Home from './pages/Home'

function App() {

  return (
    <main>
      <Routes>
        <Route element={<RootLayOut />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
