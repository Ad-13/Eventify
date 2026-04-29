import { Link, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen flex items-center justify-center font-[family-name:var(--font-body)]">
            <div className="text-center space-y-4">
              <h1 className="font-[family-name:var(--font-heading)] text-4xl text-vd-accent2">
                Eventify
              </h1>
              <p>
                <Link
                  to="/signup"
                  className="text-vd-accent hover:underline text-lg"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        }
      />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
