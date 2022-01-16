import React, { useState, useEffect } from 'react'
import './App.css'

import github from './github-icon.svg'

function App() {

  // Declare Interface to ensure data being received is correct
  interface Talent {
    name: string,
    location: string,
    date_of_birth: string
  }

  // States for talent list and filters
  const [ talentList, setTalentList ] = useState<Talent[]>([])
  const [ filteredTalentList, setFilteredTalentList ] = useState<Talent[]>([])
  const [ filters, setFilters ] = useState({ searchTerm: '' })


  // Get Talent list
  // useEffect to update page when data is changed
  useEffect(() => {
    const data = [
      {
        "name": "Homer Simpson",
        "location": "Springfield",
        "date_of_birth": "1956-05-12"
      },
      {
        "name": "Frank Reynolds",
        "location": "Philidelphia",
        "date_of_birth": "1944-11-17"
      },
      {
        "name": "Diane Nguyen",
        "location": "Los Angeles",
        "date_of_birth": "1980-03-19"
      },
      {
        "name": "Krusty the Clown",
        "location": "SpringField",
        "date_of_birth": "1957-10-29"
      }
    ]
    setTalentList(data)
    
  }, [])

  // Handle updates to select input
  const handleFilterChange = (event: any) => {
    const newObj = { ...filters, [event.target.name]: event.target.value }
    setFilters(newObj)
  }

  // Listening for updates on talent list and filters and updating filteredTalentList
  useEffect(() => {
    const regexSearch = new RegExp(filters.searchTerm, 'i')
    setFilteredTalentList(talentList.filter((talent: { location: string }) => {
      return regexSearch.test(talent.location)
    }))
  }, [filters, talentList])
  
  return (
    <>
    <header>
      <h1>Talent</h1>
    </header>
    <main>
    
      <nav>
      <p>Search talent by location:</p>
      <input onChange={handleFilterChange} data-testid="search" name="searchTerm" value={filters.searchTerm}/>
      </nav>
      <section>
        <ul>
    { filteredTalentList.length ? 
    (filters.searchTerm !== '' ? filteredTalentList : talentList).map((talent: { name: string }) => {
      return <li data-testid="talent" key={talent.name} >{talent.name}</li>
    })

    : 

    <p>No talent currently at {filters.searchTerm} in our database</p>
    
    }
    </ul>
    </section>
    </main>
    <footer>
    <a  href="https://github.com/joinSamBalboa" target="_blank" rel="noreferrer"><img src={github} alt="github logo" /> Created by Jason Abimbola</a>
    </footer>
    
    </>
    
  )
}

export default App
