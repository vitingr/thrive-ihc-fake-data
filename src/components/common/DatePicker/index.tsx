'use client'

import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { cn } from '@/libs/cn'

export const DatePicker: React.FC = () => {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
          variant={'outline'}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-slate-500" />
          {date ? (
            format(date, 'PPP')
          ) : (
            <span className="text-sm text-slate-400">Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          onSelect={setDate}
          selected={date}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
