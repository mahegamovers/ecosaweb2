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
  const logoBase = `${import.meta.env.BASE_URL}ecosa-logo`

  return (
    <header className="card header-bar" style={{ margin: '12px' }}>
      <div className="container nav">
        <div className="header-top">
          <Link to="/" className="header-brand">
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
                } catch (err) {
                  e.target.style.display = 'none'
                }
              }}
            />

            <div className="header-title">
              <strong>ECOSA</strong> — Equatorial College Old Students Association
            </div>
          </Link>

          <Hamburger
            isOpen={open}
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>

        <nav className={`header-nav${open ? ' open' : ''}`}>
          <NavLink
            to="/"
            end
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/members"
            onClick={() => setOpen(false)}
          >
            Members
          </NavLink>

          <NavLink
            to="/community"
            onClick={() => setOpen(false)}
          >
            Community
          </NavLink>

          <NavLink
            to="/chapters"
            onClick={() => setOpen(false)}
          >
            Chapters
          </NavLink>

          <NavLink
            to="/payments"
            onClick={() => setOpen(false)}
          >
            Payments
          </NavLink>

          <NavLink
            to="/leaders"
            onClick={() => setOpen(false)}
          >
            Leaders
          </NavLink>

          <NavLink
            to="/projects"
            onClick={() => setOpen(false)}
          >
            Projects
          </NavLink>

          <NavLink
            to="/resources"
            onClick={() => setOpen(false)}
          >
            Resources
          </NavLink>

          <NavLink
            to="/register"
            onClick={() => setOpen(false)}
          >
            Register
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
