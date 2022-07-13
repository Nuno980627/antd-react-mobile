import { createGlobalStore } from 'hox'
import { useState } from 'react'
export const [useAccountStore, getAccountStore] = createGlobalStore(() => {
  const [count, setCount] = useState(0)
  const addCount = () => setCount((state) => state + 1)
  return {
    count,
    addCount
  }
})
