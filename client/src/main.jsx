import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // クエリのリトライ回数を指定
      refetchOnWindowFocus: false, // ウィンドウフォーカス時の再取得を無効化
    },
    mutations: {
      onError: (error) => {
        console.error('Mutation error:', error);
      },
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient} >
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider> 
  </StrictMode>,
)
