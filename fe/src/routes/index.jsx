import { Routes, Route } from 'react-router-dom'
import { RootLayout } from '../components/layout/RootLayout'
import { ProtectedRoute } from './ProtectedRoute'
import { Home } from '../pages/Home'
import { EventDetail } from '../pages/EventDetail'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import { CreateEvent } from '../pages/CreateEvent'
import { NotFound } from '../pages/NotFound'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>

        {/* Public routes */}
        <Route index element={<Home />} />
        <Route path="events/:id" element={<EventDetail />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="events/new" element={<CreateEvent />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  )
}
