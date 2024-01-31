
import React from 'react'

function IndianStateList(props) {
    const { states} = props;
    return (
        `${states[2].capital} is the Capital of ${states[2].stateName}`
    )
}

export default IndianStateList
