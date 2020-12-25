import React from 'react'

function Footer() {

    const years = new Date().getFullYear();

    return (
        <div>

        <footer>

        <p>
         Copyright © {years}
        </p>

        </footer>
            
        </div>
    )
}

export default Footer
