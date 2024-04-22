import React from 'react'

function PublicAccessLayout({ children }) {
    return (
        <div>
            <header>Header</header>

            <section>
                {children}
            </section>
            <footer>
                footer
            </footer>
        </div>
    )
}

export default PublicAccessLayout