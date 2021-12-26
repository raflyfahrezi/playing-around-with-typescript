import React from 'react'

type ContactCardProps = {
    name: string
    email: string
    username: string
}

const ContactCard = ({ name, email, username }: ContactCardProps) => {
    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{username}</p>
        </div>
    )
}

export default ContactCard
