import { useState } from 'react'
import './App.css'
import Menu from './Components/Menu.tsx'
import menuItems from './Data/data.json'
import SearchBar from './Components/SearchBar.tsx'

function App() {
  const [search, setSearch] = useState("")
  return (
    <>
      <SearchBar search={search} setSearch={setSearch}></SearchBar>
      <Menu search={search} menuList={menuItems} ></Menu>
    </>
  )
}

export default App
