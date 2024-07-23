function TabButton({children, onSelect}){
    return <li><button onClick={onSelect}>{children}</button></li> //children prop contains whichever content you
                                                      // have between your component text
}

export default TabButton;