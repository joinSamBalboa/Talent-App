import React, { useState, useEffect } from 'react'
import './App.css'

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
  const [ filters, setFilters ] = useState({ location: '' })


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
    setFilteredTalentList(talentList.filter((talent: { location: string }) => {
      return (filters.location === talent.location.toLowerCase() || filters.location === 'All')
    }))
  }, [filters, talentList])
  
  return (
    <>
    <header>
      <h1>Talent</h1>
    </header>
    <main>
    
      <nav>
      <p>Filter talent by location:</p>
    <select onChange={handleFilterChange} name="location" data-testid="filter" value={filters.location}>
        <option value="All">All</option>
        <option value="springfield">Springfield</option>
        <option value="los angeles">Los Angeles</option>
        <option value="philidelphia">Philidelphia</option>
        <option value="south park">South Park</option>
        <option value="bikini bottom">Bikini Bottom</option>
      </select>
      </nav>
      <section>
        <ul>
    { filteredTalentList ? 
    (filters.location !== '' ? filteredTalentList : talentList).map((talent: { name: string }) => {
      return <li data-testid="talent" key={talent.name} >{talent.name}</li>
    })

    : 

    <p>No talent currently at {filters.location} in our database</p>
    
    }
    </ul>
    </section>
    </main>
    <footer>
    <a className="gitHubLink fa" href="https://github.com/joinSamBalboa" target="_blank" rel="noreferrer" >Created by Jason Abimbola</a>
    </footer>
    
    </>
    
  )
}

export default App
