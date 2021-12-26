import React from 'react'

type ContactCardProps = {
    name: string
    email: string
    username: string
    fullWidth?: boolean
}

const ContactCard = ({
    name,
    email,
    username,
    fullWidth,
}: ContactCardProps) => {
    return (
        <div
            className={`${
                fullWidth ? 'w-full' : ''
            } p-4 flex flex-col justify-between shadow-level-1 rounded`}
        >
            <p>
                <span className='font-bold text-2xl'>{name}</span> - {username}
            </p>
            <p className='text-sm text-gray-600 mt-6'>{email}</p>
        </div>
    )
}

export default ContactCard
