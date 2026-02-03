import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Rocket } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className='fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-md'>
      <div className='container mx-auto px-4 h-16 flex items-center justify-between'>
        <Link href='/' className='flex items-center gap-2 font-bold text-xl'>
          <Rocket className='w-6 h-6 text-primary' />
          <span>Next15 Launch</span>
        </Link>
        <div className='hidden md:flex items-center gap-8'>
          <Link
            href='#features'
            className='text-sm font-medium hover:text-primary transition-colors'
          >
            Features
          </Link>
          <Link
            href='#templates'
            className='text-sm font-medium hover:text-primary transition-colors'
          >
            Templates
          </Link>
          <Link
            href='/about'
            className='text-sm font-medium hover:text-primary transition-colors'
          >
            About
          </Link>
        </div>
        <div className='flex items-center gap-4'>
          <Button variant='ghost' size='sm' className='hidden sm:inline-flex'>
            Login
          </Button>
          <Button size='sm'>Get Started</Button>
        </div>
      </div>
    </nav>
  )
}
