import { NavLink } from "react-router-dom"

export default function navigation(props) {
  return (
    <nav className=" rounded-2xl">
      <ul className="rounded-2xl">
        {props.items.map((unit, index) => {
          return <NavLink key={index}
                          to={unit.to}
                          className='mx-6 font-light hover:text-blue-600 transition duration-300 ease-in-out'
          >{unit.unit}</NavLink>
        })}
      </ul>
    </nav>
  )
}
