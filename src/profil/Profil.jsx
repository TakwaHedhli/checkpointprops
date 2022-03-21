import React from 'react'
import {PropTypes} from 'prop-types'
const Profil = ({FullName, bio, profession, handleClick, children })=> {

  return (
    <div >
        <h1 style={{color:"purple" , textAlign:"center"}}>Profil</h1>
        {children}
<h1 >{FullName} {bio} {profession} </h1>

<button onClick = {handleClick}>Click Me</button>

    </div>
  )
}
Profil.defaultProps = {
adresse:"beja"
}
Profil.propTypes = {
    name : PropTypes.string
}

export default Profil