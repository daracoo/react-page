function TabButton({children, onSelect, isSelected}){
    return <li><button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button></li> //children prop contains whichever content you
                                                      // have between your component text
}

export default TabButton;