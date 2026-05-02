import { Routes, Route }  from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import RootLayout from '../components/layout/RootLayout'
import Home from '../pages/Home'
import EventDetail from '../pages/EventDetail'
import CreateEvent from '../pages/CreateEvent'
import NotFound from '../pages/NotFound'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'

export const AppRoutes = () => (
  <Routes>
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="events/:id" element={<EventDetail />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />

      <Route element={<ProtectedRoute />}>
        <Route path="events/new" element={<CreateEvent />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
)