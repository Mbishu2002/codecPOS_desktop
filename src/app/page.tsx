'use client'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from "./pages/auth/login";
import { Register } from "./pages/auth/register";
import { ForgotPassword } from "./pages/auth/forgot-password";
import { ResetPassword } from "./pages/auth/reset-password";
import { TwoStepVerificationComponent } from "./pages/auth/two-step-verification";
import { Verify } from "./pages/auth/verify-email";

export default function Page() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/two-step-verification" element={<TwoStepVerificationComponent />} />
        <Route path="/verify-email" element={<Verify />} />
      </Routes>
    </Router>
  );
}
