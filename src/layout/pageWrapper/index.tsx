import React, { ReactNode } from 'react'

import { Head, Footer } from '@/layout'

type pageWrapperProps = {
    title?: string
    children: ReactNode
}

const PageWrapper = ({ title, children }: pageWrapperProps) => {
    return (
        <div>
            <Head title={title} />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default PageWrapper
