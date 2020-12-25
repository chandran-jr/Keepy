import React from 'react'

function Footer() {

    const years = new Date().getFullYear();

    return (
        <div>

        <p>
         Copyright © {years}
        </p>
            
        </div>
    )
}

export default Footer
