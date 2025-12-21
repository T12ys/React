import React from 'react'

interface CharacterCardProps {
  name: string
  species: string
  status: string
  image: string
  onCardClick: () => void
}

const CharacterCard: React.FC<CharacterCardProps> = ({ 
  name, 
  species, 
  status, 
  image, 
  onCardClick 
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Alive':
        return 'text-green-400'
      case 'Dead':
        return 'text-red-400'
      default:
        return 'text-gray-400'
    }
  }

  return (
    <div
      className="group bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 border-2 border-gray-700 hover:border-green-500"
      onClick={onCardClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-green-400 mb-2 group-hover:text-yellow-400 transition-colors">{name}</h3>
        <p className="text-gray-300 mb-2">Species: <span className="text-gray-400">{species}</span></p>
        <div className="flex items-center gap-2">
          <span className={`text-sm font-semibold ${getStatusColor(status)}`}>Status:</span>
          <span className={`text-sm px-2 py-1 rounded-full ${status === 'Alive' ? 'bg-green-500/20 text-green-400' : status === 'Dead' ? 'bg-red-500/20 text-red-400' : 'bg-gray-500/20 text-gray-400'}`}>
            {status}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard

