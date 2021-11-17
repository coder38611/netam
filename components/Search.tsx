import { useState, useEffect, SetStateAction, Dispatch } from 'react'
import { FaSearch } from 'react-icons/fa'
import SearchResults from '@/components/SearchResults'
import search from '@/lib/search'
import { searchResult } from '@/lib/types'

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults]: [
        searchResult[],
        Dispatch<SetStateAction<searchResult[]>>
    ] = useState([] as searchResult[])
    const [openResult, setOpenResult] = useState(false)

    const toggleResults = () => {
        return setTimeout(() => {
            setOpenResult(!openResult)
        }, 200)
    }

    useEffect(() => {
        ;(async () => {
            if (!openResult) return
            const keyword = searchTerm.trim()
            if (keyword === '') {
                setSearchResults([])
            } else {
                const results: searchResult[] = search(keyword)
                setSearchResults(results)
            }
        })()
    }, [searchTerm, openResult])

    return (
        <div className='relative mx-auto text-gray-600 w-full'>
            <form className='flex flex-row justify-center items-center'>
                <input
                    type='search'
                    name='search'
                    id='search'
                    className='relative bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onBlur={() => {
                        toggleResults()
                    }}
                    onFocus={() => {
                        toggleResults()
                    }}
                    autoComplete='off'
                />
                <FaSearch className='absolute right-4 text-black' />
            </form>
            {openResult && (
                <SearchResults
                    results={searchResults}
                    setSearchTerm={setSearchTerm}
                />
            )}
        </div>
    )
}
