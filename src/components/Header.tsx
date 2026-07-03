import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

interface HamburgerProps {
  isOpen: boolean
  onClick: () => void
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, onClick }) => {
  return (
    <button
      className={`header-toggle${isOpen ? ' open' : ''}`}
      type="button"
      onClick={onClick}
      aria-label="Menu"
      aria-expanded={isOpen}
    >
      <span />
      <span />
      <span />
    </button>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [membershipOpen, setMembershipOpen] = useState(false)

  const logoBase = `${import.meta.env.BASE_URL}ecosa-logo`

  const closeMenus = () => {
    setOpen(false)
    setMembershipOpen(false)
  }

  return (
    <header className="card header-bar" style={{ margin: '12px' }}>
      <div className="container nav">
        <div className="header-top">
          <Link to="/" className="header-brand" onClick={closeMenus}>
            <img
              src={`${logoBase}.png`}
              alt="ECOSA logo"
              className="header-logo"
              onError={(e: any) => {
                try {
                  if (!e.target._triedJpg) {
                    e.target._triedJpg = true
                    e.target.src = `${logoBase}.jpg`
                  } else if (!e.target._triedJpeg) {
                    e.target._triedJpeg = true
                    e.target.src = `${logoBase}.jpeg`
                  } else {
                    e.target.style.display = 'none'
                  }
                } catch {
                  e.target.style.display = 'none'
                }
              }}
            />

            <div className="header-title">
              <strong>ECOSA</strong> — Equatorial College Old Students
              Association
            </div>
          </Link>

          <Hamburger
            isOpen={open}
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>

        <nav className={`header-nav${open ? ' open' : ''}`}>
          <NavLink to="/" end onClick={closeMenus}>
            Home
          </NavLink>

          {/* Membership Dropdown */}
          <div
            className="nav-dropdown"
            onMouseLeave={() => setMembershipOpen(false)}
          >
            <button
              type="button"
              className="nav-dropdown-btn"
              onClick={() => setMembershipOpen((prev) => !prev)}
            >
              Membership ▾
            </button>

            <div
              className={`nav-dropdown-menu${
                membershipOpen ? ' open' : ''
              }`}
            >
              <NavLink to="/register" onClick={closeMenus}>
                Register
              </NavLink>

              <NavLink to="/members" onClick={closeMenus}>
                Members
              </NavLink>

              <NavLink to="/chapters" onClick={closeMenus}>
                Chapters
              </NavLink>
            </div>
          </div>

          <NavLink to="/community" onClick={closeMenus}>
            Community
          </NavLink>

          <NavLink to="/payments" onClick={closeMenus}>
            Payments
          </NavLink>

          <NavLink to="/leaders" onClick={closeMenus}>
            Leaders
          </NavLink>

          <NavLink to="/projects" onClick={closeMenus}>
            Projects
          </NavLink>

          <NavLink to="/resources" onClick={closeMenus}>
            Resources
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
