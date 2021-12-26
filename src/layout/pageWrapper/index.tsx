import React, { ReactNode } from 'react'

import { Head } from '@/layout'

type pageWrapperProps = {
    title?: string
    children: ReactNode
}

const PageWrapper = ({ title, children }: pageWrapperProps) => {
    return (
        <div>
            <Head title={title} />
            {children}
        </div>
    )
}

export default PageWrapper
