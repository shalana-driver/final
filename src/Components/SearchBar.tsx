interface Props {
    search: string
    setSearch: (search: string) => void
}

function SearchBar({search, setSearch}: Props) {
    const searchHandler = (e:any) => {
        e.preventDefault()
        setSearch(e.target.value)
    }
    
    return (
        <form className="fixed">
            <label>Search: </label>
            <input type="search" placeholder="search..." value={search} onChange={searchHandler}></input>
        </form>
        
    )
}

export default SearchBar