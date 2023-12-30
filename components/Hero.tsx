import  Link  from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Mail } from 'lucide-react'



export default function Hero() {
  return (
    <div className='md:max-w-2x1 sm:max-w-xl max-w-sm'>
        <h1 className='p-8 text-3x1 sm:p-10 sm:text-5xl font-bold text-gray-900'>
            Welcome to js Vlogs
        </h1>
        <Button className='sm:mx-16 mx-10'>
            <Mail className='mr-2 h-4 w-4'/>
            <Link href={'../sign-up'}>Signup</Link>

        </Button>

        <Image
      
      
    </div>
  )
}
