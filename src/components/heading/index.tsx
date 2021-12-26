import React from 'react'

type HeadingProps = {
    text: string
}

const Heading = ({ text }: HeadingProps) => {
    return (
        <div className='w-full py-10 text-center'>
            <h1 className='font-bold text-3xl'>{text}</h1>
        </div>
    )
}

export default Heading
