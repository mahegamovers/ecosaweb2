import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Membership
import Register from "./pages/Register";
import MembersList from "./pages/MembersList";
import MemberProfile from "./pages/MemberProfile";
import Chapters from "./pages/Chapters";

// Dashboard
import Dashboard from "./pages/Dashboard";

// Community
import Community from "./pages/Community";

// Payments
import Payments from "./pages/Payments";

// About Pages
import Leaders from "./pages/Leaders";
import Projects from "./pages/Projects";
import Resources from "./pages/Resources";

// Extras
import JobBoard from "./pages/JobBoard";

export default function App() {
  return (
    <>
      <Header />

      <main className="container">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about" element={<About />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resources" element={<Resources />} />

          {/* Membership */}
          <Route path="/register" element={<Register />} />
          <Route path="/members" element={<MembersList />} />
          <Route path="/members/:id" element={<MemberProfile />} />
          <Route path="/chapters" element={<Chapters />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Payments */}
          <Route path="/payments" element={<Payments />} />

          {/* Community */}
          <Route path="/community" element={<Community />} />

          {/* Jobs */}
          <Route path="/jobs" element={<JobBoard />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div
                style={{
                  padding: "4rem 1rem",
                  textAlign: "center",
                }}
              >
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>
                  Sorry, the page you're looking for doesn't exist.
                </p>
              </div>
            }
          />
        </Routes>
      </main>
    </>
  );
}
