import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-background pt-24 pb-12'>
      <div className='container mx-auto px-4 max-w-3xl'>
        <Link href='/'>
          <Button variant='ghost' className='mb-8 pl-0 hover:bg-transparent'>
            <ArrowLeft className='mr-2 w-4 h-4' /> Back to Home
          </Button>
        </Link>
        <h1 className='text-4xl font-bold mb-6'>About Next15 Launch</h1>
        <div className='prose prose-neutral dark:prose-invert max-w-none'>
          <p className='text-xl text-muted-foreground mb-8'>
            This project is a demonstration of Next.js 15 capabilities,
            combining the power of the App Router with modern UI patterns.
          </p>
          <h2 className='text-2xl font-bold mb-4'>Our Mission</h2>
          <p className='mb-6'>
            We aim to provide developers with the best possible starting point
            for their next big idea. By integrating Shadcn UI, Tailwind 4, and
            the latest React features, we ensure that performance and developer
            experience are always top of mind.
          </p>
          <div className='grid sm:grid-cols-2 gap-8 my-12'>
            <div className='p-6 rounded-xl bg-muted'>
              <h3 className='font-bold mb-2'>Built for Speed</h3>
              <p className='text-sm text-muted-foreground'>
                Optimized images, streaming SSR, and edge components ensure your
                users get the fastest experience.
              </p>
            </div>
            <div className='p-6 rounded-xl bg-muted'>
              <h3 className='font-bold mb-2'>Modern Styling</h3>
              <p className='text-sm text-muted-foreground'>
                Tailwind CSS 4.0 provides a more flexible and powerful way to
                style your applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
