import { createLazyFileRoute } from '@tanstack/react-router'
import TestStore from '@/components/test-store'
import { useBearStore } from '@/store'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  const bears = useBearStore((state) => state.bears)

  return (
    <div className='p-2'>
      <h3>Welcome Home!</h3>
      <p>{bears}</p>
      <TestStore />
    </div>
  )
}
