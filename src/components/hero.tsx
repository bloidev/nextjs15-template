import { Button } from '@/components/ui/button'
import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className='relative pt-32 pb-20 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center text-center max-w-4xl mx-auto'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500'>
            <Zap className='w-4 h-4' />
            <span>Next.js 15 is here</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70'>
            Build the future with Next.js 15 & Tailwind 4
          </h1>
          <p className='text-xl text-muted-foreground mb-10 max-w-2xl'>
            A premium template designed to accelerate your development workflow.
            Experience the power of React 19, App Router, and the next
            generation of styling.
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Button size='lg' className='h-12 px-8 text-base'>
              Get Started Now <ArrowRight className='ml-2 w-4 h-4' />
            </Button>
            <Button size='lg' variant='outline' className='h-12 px-8 text-base'>
              View Documentation
            </Button>
          </div>
        </div>
      </div>

      {/* Abstract background elements */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl' />
      <div className='absolute top-0 right-0 -z-10 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl opacity-50' />
    </section>
  )
}
