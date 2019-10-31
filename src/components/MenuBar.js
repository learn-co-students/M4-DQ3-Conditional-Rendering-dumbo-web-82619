import React from 'react'

const MenuBar = ({changeSelected, selected}) => {

  const handleClick = (event) => {
    changeSelected(event.target.id)
  }

  const classType = (arg) => {
    return "item " + (selected === arg ? "active" : null)
  }
 
  return (
    <div className="ui four item menu">
      <a 
        className={classType("profile")}
        onClick={handleClick}
      >
        <i className="user large icon" id="profile"/>
      </a>

      <a 
        className={classType("photo")} 
        id="photo"
        onClick={handleClick}
      >
        <i className="photo large icon" id="photo"/>
      </a>

      <a 
        className={classType("cocktail")} 
        id="cocktail"
        onClick={handleClick}
      >
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a 
        className={classType("pokemon")} 
        id="pokemon"
        onClick={handleClick}
      > 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
