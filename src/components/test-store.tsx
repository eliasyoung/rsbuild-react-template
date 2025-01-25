import React from 'react'
import { useBearStore } from '@/store'
import { useShallow } from 'zustand/shallow'

const TestStoreButton = React.memo(() => {
  const { increase } = useBearStore(
    useShallow((state) => ({ increase: state.increase })),
  )

  const onIncreaseClick = () => {
    increase(5)
  }

  return (
    <button type='button' onClick={onIncreaseClick}>
      Click me to add num
    </button>
  )
})

TestStoreButton.displayName = 'TestStoreButton'

const TestStoreNumbers = React.memo(() => {
  const bears = useBearStore((state) => state.bears)

  return <p>{bears}</p>
})

TestStoreNumbers.displayName = 'TestStoreNumbers'

export { TestStoreButton, TestStoreNumbers }
