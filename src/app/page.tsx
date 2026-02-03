import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Features from '@/components/features'
import SubscribeForm from '@/components/subscribe-form'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-grow'>
        <Hero />
        <Features />

        {/* CTA Section */}
        <section className='py-24'>
          <div className='container mx-auto px-4'>
            <div className='rounded-3xl bg-foreground text-background p-12 md:p-20 flex flex-col items-center text-center'>
              <h2 className='text-3xl md:text-5xl font-bold mb-6'>
                Ready to launch your Next project?
              </h2>
              <p className='text-lg text-background/70 mb-10 max-w-2xl'>
                Join thousands of developers building high-performance web
                applications with our premium Next.js 15 template.
              </p>
              <div className='flex flex-col items-center gap-8 w-full'>
                <SubscribeForm />
                <div className='flex flex-col sm:flex-row gap-4'>
                  <Button
                    size='lg'
                    variant='outline'
                    className='border-background text-background hover:bg-background hover:text-foreground text-base h-12 px-8'
                  >
                    <Github className='mr-2 w-5 h-5' /> Star on GitHub
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className='border-t py-12 bg-background'>
        <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className='flex flex-col gap-2'>
            <div className='font-bold text-xl'>Next15 Launch</div>
            <p className='text-sm text-muted-foreground'>
              © 2026 Next15 Launch. All rights reserved.
            </p>
          </div>
          <div className='flex gap-8 text-sm text-muted-foreground'>
            <a
              href='#'
              className='hover:text-primary underline-offset-4 hover:underline'
            >
              Privacy Policy
            </a>
            <a
              href='#'
              className='hover:text-primary underline-offset-4 hover:underline'
            >
              Terms of Service
            </a>
            <a
              href='#'
              className='hover:text-primary underline-offset-4 hover:underline'
            >
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
