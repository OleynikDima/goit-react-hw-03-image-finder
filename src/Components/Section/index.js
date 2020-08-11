import React from 'react'
import PropTypes from 'prop-types'


 function Section ({children}){
    return (
        <section>
            {children}
        </section>
    )
}
Section.defaultProps = {
    title:'',
    children:PropTypes.node.isRequired,
}


export default Section;
