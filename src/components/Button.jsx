import React from 'react'

const Button = ({ children, bg, isNew, onClick, className }) => {
  return (
    <button onClick={onClick} className={`flex items-center text-nowrap gap-3 bg-blue-600 px-4 py-2 rounded text-sm justify-center min-w-32 ${bg === 'dark' ? 'bg-blue-900 text-blue-400' : 'bg-blue-500 text-white'} ${isNew && 'relative btn-point'} ${className}`}>{children}</button>
  )
}

export default Button