import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'

import Home from './pages/Home'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import MembersList from './pages/MembersList'
import MemberProfile from './pages/MemberProfile'
import Payments from './pages/Payments'
import Projects from './pages/Projects'
import JobBoard from './pages/JobBoard'
import Community from './pages/Community'
import Leaders from './pages/Leaders'
import Resources from './pages/Resources'
import Chapters from './pages/Chapters'

export default function App() {
  return (
    <>
      <Header />

      <div className="container">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Registration */}
          <Route path="/register" element={<Register />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Members */}
          <Route path="/members" element={<MembersList />} />
          <Route path="/members/:id" element={<MemberProfile />} />

          {/* Chapters */}
          <Route path="/chapters" element={<Chapters />} />

          {/* Community */}
          <Route path="/community" element={<Community />} />

          {/* Payments */}
          <Route path="/payments" element={<Payments />} />

          {/* Leaders */}
          <Route path="/leaders" element={<Leaders />} />

          {/* Projects */}
          <Route path="/projects" element={<Projects />} />

          {/* Jobs */}
          <Route path="/jobs" element={<JobBoard />} />

          {/* Resources */}
          <Route path="/resources" element={<Resources />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h2>404 - Page Not Found</h2>
                <p>The page you are looking for does not exist.</p>
              </div>
            }
          />
        </Routes>
      </div>
    </>
  )
}
