import React from 'react'
import { default as NextHead } from 'next/head'

type HeadProps = {
    title: string
}

const Head = ({ title }: HeadProps) => {
    return (
        <NextHead>
            <title>{title}</title>
        </NextHead>
    )
}

Head.defaultProps = {
    title: 'Playing Around with TypeScript',
}

export default Head
