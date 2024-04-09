import Link from 'next/link'

const NavItems = ({item, active, setActive, index}) => {

  return (
    <Link onClick={() => setActive(index)} href={item.path} className={`text-sm font-medium text-gray-400 hover:text-blue-500 ${ active === index && 'cust-underline text-blue-500'}`}>{item.name}</Link>
  )
}

export default NavItems