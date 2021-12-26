import React, { ReactNode } from 'react'

type pageWrapperProps = {
    children: ReactNode
}

const PageWrapper = ({ children }: pageWrapperProps) => {
    return <div>{children}</div>
}

export default PageWrapper
