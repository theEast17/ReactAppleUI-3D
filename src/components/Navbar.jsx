import { navLists } from "../constants"
import { appleImg, bagImg, searchImg } from "../utils"

const Navbar = () => {
  return (
    <header className="w-full py-5 px-5 sm:px-10 flex justify-between items-center ">
        <nav className="flex w-full screen-max-width">
            <img src={appleImg} alt="logo" height={18} width={18}/>
            <div className="flex flex-1 items-center justify-center gap-5 max-sm:hidden ">
                {navLists.map((items)=>{
                    return(
                        <div key={items} className="text-sm cursor-pointer text-gray hover:text-white transition-all">
                            {items}
                        </div>
                    )
                })}
            </div>
            <div className="flex items-center gap-7 max-sm:flex-1 max-sm:justify-end">
                <img src={searchImg} alt="searchIcon" height={18} width={18}/>
                <img src={bagImg} alt="bagIcon" height={18} width={18}/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar