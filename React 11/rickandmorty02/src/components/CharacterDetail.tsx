import React from 'react'
import {Character} from '../types'

interface CharacterDetailProps {
    character: Character | null
    clicks: number
    onBack: () => void
}


const CharacterDetail: React.FC<CharacterDetailProps> = ({character, clicks, onBack}) => {
    if (!character) {
        return (
            <div
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-2xl border-2 border-gray-700">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Character
                    Details</h2>
                <div className="text-center py-8">
                    <div className="text-6xl mb-4">👆</div>
                    <p className="text-gray-400 text-lg">Select a character to see details</p>
                </div>
            </div>
        )
    }

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
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-2xl border-2 border-green-500/50 sticky top-4">
            <button
                onClick={onBack}
                className="mb-4 px-5 py-2
                bg-gray-800
                border-2 border-green-400
                text-gradient font-bold
                rounded-lg
                hover:scale-105">
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent font-extrabold">
                    ← Back
                </span>
            </button>


            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Character
                Details</h2>
            <div className="text-center">
                <div className="relative inline-block mb-6">
                    <img
                        src={character.image}
                        alt={character.name}
                        className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-green-400 shadow-2xl shadow-green-500/50"
                    />
                    <div
                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-black px-4 py-1 rounded-full font-bold text-sm">
                        {character.status}
                    </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-green-400">{character.name}</h3>
                <div className="space-y-3 text-left bg-gray-900/50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-300">Species:</span>
                        <span className="text-green-400 font-bold">{character.species}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-300">Clicks:</span>
                        <span className="text-green-400 font-bold">{clicks}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className={`font-semibold ${getStatusColor(character.status)}`}>Status:</span>
                        <span
                            className={`px-3 py-1 rounded-full text-sm font-bold ${character.status === 'Alive' ? 'bg-green-500/20 text-green-400' : character.status === 'Dead' ? 'bg-red-500/20 text-red-400' : 'bg-gray-500/20 text-gray-400'}`}>{character.status}</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CharacterDetail
