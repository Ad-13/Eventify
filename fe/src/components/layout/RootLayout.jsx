import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'

// Wraps all routes — renders Navbar + the matched child route
export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
