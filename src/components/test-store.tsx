import React from 'react'
import { useBearStore } from '@/store'
import { useShallow } from 'zustand/shallow'

const TestStore = React.memo(() => {
  const { increase } = useBearStore(
    useShallow((state) => ({ increase: state.increase })),
  )

  const onIncreaseClick = () => {
    increase(5)
  }

  return (
    <div>
      <button type='button' onClick={onIncreaseClick}>
        Click me to add num
      </button>
    </div>
  )
})

TestStore.displayName = 'TestStore'

export default TestStore
