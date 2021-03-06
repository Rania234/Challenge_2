import React from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import "./Menu.css"
function Menu() {
    // const task = useSelector((state) => state.tasks && state.tasks.selectedTask)

  return (
    <>
      
      <ul>
        <li>
          <NavLink
            to="/hello"
            activeClassName="active"
            isActive={(_, { pathname }) =>
              pathname.match("/hello") || pathname === "/"
            }
          >
            HOME
          </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/tasks" activeClassName="active">
            THEMES
          </NavLink>
          {/* <Link to="/tasks"> My tasks</Link> */}
        </li>
      </ul>
      
    </>
  )
}

export default Menu
