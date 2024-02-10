import React from 'react'
import { SectionProps } from './types'

export const Section = ({children}: SectionProps) => {
  return (
    <section>
      <div>{ children }</div>
    </section>
  )
}
