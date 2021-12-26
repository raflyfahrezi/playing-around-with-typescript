import React from 'react'

type HeadingProps = {
    text: string
}

const Heading = ({ text }: HeadingProps) => {
    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
}

export default Heading
