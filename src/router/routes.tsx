import { Routes, Route } from "react-router-dom";
import LoginFormPage from "../pages/LoginFormPage";
import AllEventsPage from "../pages/AllEventsPage";
import MyEventsPage from "../pages/MyEventsPage";
import AccountPage from "../pages/AccountPage";
import EventDetailPage from "../pages/EventDetail";
import AppLayout from "../components/AppLayout";
import { ProtectedUser } from "./protectedUser";
// import { ThemeProvider } from "../context/ThemeContext";

export const AppRoutes = () => {
  return (
    // <ThemeProvider>
      <Routes>
        <Route path="/" element={<LoginFormPage />} />
        <Route
          element={
            <ProtectedUser>
              <AppLayout />
            </ProtectedUser>
          }
        >
          <Route path="/allEvents" element={<AllEventsPage />} />
          <Route path="/allEvents/:type" element={<AllEventsPage />} />
          <Route path="/my" element={<MyEventsPage />} />
          <Route path="/events/:id" element={<EventDetailPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Route>
      </Routes>
    // </ThemeProvider>
  );
};
