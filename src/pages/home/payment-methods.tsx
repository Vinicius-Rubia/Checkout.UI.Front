import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import React from 'react'

export const PaymentMethods: React.FC = () => {
  return (
    <div className="space-y-2 [&>button]:justify-between">
      <Button
        variant="ghost"
        className="border-2 h-fit border-input hover:bg-muted hover:dark:bg-muted/20 w-full p-6 rounded-md"
      >
        <span className='text-base'>1x R$ 100,00</span>
        <Badge className='bg-green-200 text-green-600 hover:text-primary-foreground'>Sem acréscimos</Badge>
      </Button>
      <Button
        variant="ghost"
        className="border-2 h-fit border-input hover:bg-muted hover:dark:bg-muted/20 w-full p-6 rounded-md"
      >
        <span className='text-base'>2x R$ 53,82</span>
        <span>R$ 107,64</span>
      </Button>
      <Button
        variant="ghost"
        className="border-2 h-fit border-input hover:bg-muted hover:dark:bg-muted/20 w-full p-6 rounded-md"
      >
        <span className='text-base'>3x R$ 36,41</span>
        <span>R$ 109,23</span>
      </Button>
      <Button
        variant="ghost"
        className="border-2 h-fit border-input hover:bg-muted hover:dark:bg-muted/20 w-full p-6 rounded-md"
      >
        <span className='text-base'>4x R$ 27,72</span>
        <span>R$ 110,86</span>
      </Button>
      <Button
        variant="ghost"
        className="border-2 h-fit border-input hover:bg-muted hover:dark:bg-muted/20 w-full p-6 rounded-md"
      >
        <span className='text-base'>5x R$ 22,46</span>
        <span>R$ 112,31</span>
      </Button>
    </div>
  )
}
