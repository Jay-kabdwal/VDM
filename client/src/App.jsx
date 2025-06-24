// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import ProtectedRoute from "./components/ProtectedRoute";

// Layout for admin (seller)
import AdminHome from "./components/AdminHome";
import Dashboard from "./components/admin/Dashboard";
import Deals from "./components/admin/Deals";
import ChatScreen from "./pages/ChatScreen";
import Documents from "./components/admin/Documents";
import PaymentsScreen from "./pages/PaymentsScreen";
import Settings from "./components/admin/Settings";
import DealDetails from "./pages/DealDetails";
import CreateDeal from "./pages/CreateDeal"; // ✅ Import CreateDeal
// import UserHome from "./components/UserHome"; // ✅ new
import UserHome from "./components/UserHome";
import UserHomePage from "./pages/user/UserHomePage";
import ProfileSettings from "./pages/user/ProfileSettings";
import UserChat from "./pages/user/UserChat";



// Optional fallback
const NotFound = () => (
  <div className="p-8 text-2xl font-semibold text-center text-red-600">
    404 - Page Not Found
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Auth />} />

        {/* Admin (seller) protected routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="seller">
              <AdminHome />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="deals" element={<Deals />} />
          <Route path="deals/create" element={<CreateDeal />} /> {/* ✅ FIXED route */}
          <Route path="chat" element={<ChatScreen />} />
          <Route path="documents" element={<Documents />} />
          <Route path="payments" element={<PaymentsScreen />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route
          path="/user"
          element={
            <ProtectedRoute role="buyer">
              <UserHome />
            </ProtectedRoute>
          }
        >
          <Route index element={<UserHomePage />} />
          <Route path="profile" element={<ProfileSettings />} />
          <Route path="chat" element={<UserChat />} />
        </Route>


        {/* Deal detail pages for seller and buyer */}
        <Route
          path="/admin/deals/:id"
          element={
            <ProtectedRoute role="seller">
              <DealDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/deals/:id"
          element={
            <ProtectedRoute role="buyer">
              <DealDetails />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
