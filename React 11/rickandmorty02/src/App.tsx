import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import CharacterCard from './components/CharacterCard'

import CharacterDetail from "./components/CharacterDetail.tsx";
import {Character} from "./types.ts";
import {fetchCharacters} from "./api.ts";


const App: React.FC = () => {
    const [characters, setCharacters] = useState<Character[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)
    const [clickCounts, setClickCounts] = useState<Record<number, number>>({})

    const loadCharacters = async () => {
        try {
            setLoading(true)
            setError(null)
            const data = await fetchCharacters()
            await new Promise(resolve => setTimeout(resolve, 1500))
            setCharacters(data)
        } catch (error) {
            setError("Something went wrong")
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadCharacters()
    }, [])


    const handleCharacterClick = (character: Character) => {
        setSelectedCharacter(character)

        setClickCounts(prev => ({
            ...prev,
            [character.id]: (prev[character.id] || 0) + 1
        }))
    }


    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <Header title="Rick & Morty Characters"/>

            <main className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                        Explore the Multiverse
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Click on any character to view detailed information
                    </p>
                </div>

                {loading && (
                    <div className="text-center py-20">
                        <div
                            className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500 mb-4"></div>
                        <p className="text-xl text-gray-400">Loading characters from the multiverse...</p>
                    </div>
                )}

                {error && (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">⚠️</div>
                        <p className="text-xl text-red-400 font-semibold">{error}</p>
                        <p className="text-gray-400 mt-2">Please try again later</p>
                        <button onClick={loadCharacters}
                                className="mt-10 mb-4 px-5 py-2
                                bg-gray-800
                                border-2 border-green-400
                                text-gradient font-bold
                                rounded-lg
                                hover:scale-105">
                            Повторить
                        </button>
                    </div>
                )}


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {characters.map((character) => (
                                <CharacterCard
                                    key={character.id}
                                    name={character.name}
                                    species={character.species}
                                    status={character.status}
                                    image={character.image}
                                    onCardClick={() => handleCharacterClick(character)}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <CharacterDetail
                            character={selectedCharacter}
                            clicks={
                                selectedCharacter
                                    ? clickCounts[selectedCharacter.id] || 0
                                    : 0
                            }
                            onBack={() => setSelectedCharacter(null)}
                        />

                    </div>
                </div>

            </main>
        </div>
    )
}

export default App

