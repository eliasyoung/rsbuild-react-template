import { createLazyFileRoute } from '@tanstack/react-router'
import { TestStoreButton, TestStoreNumbers } from '@/components/test-store'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className='p-2'>
      <h3>Welcome Home!</h3>
      <TestStoreNumbers />
      <TestStoreButton />
    </div>
  )
}
