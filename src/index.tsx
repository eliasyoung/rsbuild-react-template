import { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

import '@fontsource-variable/inter'
import '@fontsource-variable/source-serif-4'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

import { TanStackRouterDevtools } from '@/components/tanstack-router-devtool'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootEl = document.getElementById('root')
if (rootEl && !rootEl.innerHTML) {
  const root = ReactDOM.createRoot(rootEl)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
      <Suspense>
        <TanStackRouterDevtools router={router} />
      </Suspense>
    </StrictMode>,
  )
}
