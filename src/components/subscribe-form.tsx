'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2, CheckCircle2 } from 'lucide-react'

export default function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setStatus('success')
    setEmail('')

    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col sm:flex-row gap-2 w-full max-w-md'
    >
      <div className='relative flex-grow'>
        <Input
          type='email'
          placeholder='Enter your email'
          required
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          disabled={status !== 'idle'}
          className='bg-background/10 border-background/20 text-background placeholder:text-background/50 focus-visible:ring-background/30'
        />
        {status === 'success' && (
          <div className='absolute right-3 top-1/2 -translate-y-1/2 text-green-400'>
            <CheckCircle2 className='w-5 h-5' />
          </div>
        )}
      </div>
      <Button
        type='submit'
        disabled={status !== 'idle'}
        className='bg-background text-foreground hover:bg-background/90'
      >
        {status === 'loading' ? (
          <Loader2 className='w-4 h-4 animate-spin' />
        ) : (
          'Subscribe'
        )}
      </Button>
    </form>
  )
}
