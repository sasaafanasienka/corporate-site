import React from 'react'

export interface BodyProps {
  children: React.ReactNode
}

export const Body = ({children}: BodyProps) => {
  return (
    <body className='body'>
      {children}
    </body>
  )
}
