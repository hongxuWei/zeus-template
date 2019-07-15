import * as React from 'react'

type Props = {
  text: string
}

export default function Test ({ text }: Props) {
  return (
    <section>
      {text}
    </section>
  )
}
