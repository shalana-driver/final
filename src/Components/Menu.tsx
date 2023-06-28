import MenuItem from "./MenuItem.tsx"
import IMenuItem from "../Data/IMenuItem.tsx"

interface Props {
    menuList: IMenuItem[]
    search: string
}

function Menu({menuList, search}: Props) {
   
    const filteredMenuList = menuList.filter((item) => {
        if(search === '') {
            return item
        }
        else {
            return item.name.toLowerCase().includes(search.toLowerCase())
        }
    })
    
    return (
        <>
            {filteredMenuList.map((menuItem) => <MenuItem key={menuItem.id} name={menuItem.name} description={menuItem.description} search={search}></MenuItem>)}
            
        </>
    )
}

export default Menu