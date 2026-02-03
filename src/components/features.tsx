import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Zap, Shield, Globe, Cpu, Layout, Sparkles } from 'lucide-react'

const features = [
  {
    title: 'React 19 Ready',
    description:
      'Leverage the latest React features like actions, useOptimistic, and improved transitions.',
    icon: Cpu,
  },
  {
    title: 'Tailwind 4.0',
    description:
      'Built with the newest version of Tailwind CSS for faster builds and better performance.',
    icon: Zap,
  },
  {
    title: 'App Router',
    description:
      'Optimized for the Next.js App Router with server components and streaming support.',
    icon: Layout,
  },
  {
    title: 'Premium UI',
    description:
      'Pre-configured Shadcn UI components with custom themes and animations.',
    icon: Sparkles,
  },
  {
    title: 'Global Edge',
    description:
      'Optimized for deployment on Vercel with edge runtime and localized caching.',
    icon: Globe,
  },
  {
    title: 'Enterprise Security',
    description:
      'Best practices for authentication and data protection implemented by default.',
    icon: Shield,
  },
]

export default function Features() {
  return (
    <section id='features' className='py-24 bg-muted/50'>
      <div className='container mx-auto px-4'>
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-5xl font-bold mb-4'>
            Cutting-edge Stack
          </h2>
          <p className='text-muted-foreground text-lg'>
            Everything you need to build high-performance web applications with
            a modern developer experience.
          </p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((feature, index) => (
            <Card
              key={index}
              className='transition-all hover:shadow-lg hover:-translate-y-1 group'
            >
              <CardHeader>
                <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors'>
                  <feature.icon className='w-6 h-6' />
                </div>
                <CardTitle className='text-xl mb-2'>{feature.title}</CardTitle>
                <CardDescription className='text-base line-clamp-3'>
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
