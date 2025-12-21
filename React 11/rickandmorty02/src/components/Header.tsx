import React from 'react'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-6 shadow-2xl border-b-2 border-green-500">
      <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
        {title}
      </h1>
    </header>
  )
}

export default Header

