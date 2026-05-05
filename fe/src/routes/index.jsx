import { Routes, Route, Navigate } from 'react-router-dom'
import { RootLayout } from '../components/layout/RootLayout'
import { ProtectedRoute } from './ProtectedRoute'
import { Home } from '../pages/Home'
import { EventDetail } from '../pages/EventDetail'
import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'
import { CreateEvent } from '../pages/CreateEvent'
import { NotFound } from '../pages/NotFound'
import { Events } from '../pages/Events'
import { UpcomingEvents } from '../pages/UpcomingEvents'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>

        {/* Public routes */}
        <Route index element={<Navigate to="/events" replace />} />
        <Route path="events" element={<Events />} />
        <Route path="events/upcoming" element={<UpcomingEvents />} />
        <Route path="events/:id" element={<EventDetail />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="events/create" element={<CreateEvent />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  )
}
