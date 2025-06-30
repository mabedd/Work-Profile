'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ChevronRightIcon } from 'lucide-react'
import React from 'react'

interface CompanyResumeCardProps {
  logoUrl: string
  altText: string
  title: string
  roles: {
    position: string
    startDate: string
    endDate: string
    description?: string | React.ReactNode
  }[]
}

export const CompanyResumeCard = ({
  logoUrl,
  altText,
  title,
  roles,
}: CompanyResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false)

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsExpanded(!isExpanded)
  }

  const summaryTitle = roles.map((r) => r.position).join(' — ')
  const summaryPeriod =
    roles.length === 1
      ? `${roles[0].startDate} - ${roles[0].endDate}`
      : `${roles[roles.length - 1].startDate} - ${roles[0].endDate}`

  return (
    <div className='block cursor-pointer' onClick={handleToggle}>
      <Card className='flex'>
        <div className='flex-none'>
          <Avatar className='border size-12 m-auto bg-muted-background dark:bg-foreground'>
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className='object-contain'
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className='flex-grow ml-4 items-center flex-col group'>
          <CardHeader>
            <div className='flex items-center justify-between gap-x-2 text-base'>
              <h3 className='inline-flex items-center font-semibold text-xs sm:text-sm'>
                {title}
                <ChevronRightIcon
                  className={cn(
                    'size-4 ml-1 transition-transform duration-300',
                    isExpanded ? 'rotate-90' : 'rotate-0'
                  )}
                />
              </h3>
              <div className='text-xs tabular-nums text-muted-foreground text-right'>
                {summaryPeriod}
              </div>
            </div>
            <div className='font-sans text-xs text-muted-foreground'>
              {summaryTitle}
            </div>
          </CardHeader>
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? 'auto' : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className='overflow-hidden mt-2 text-xs sm:text-sm space-y-3'
          >
            {roles.map((role, i) => (
              <div key={i}>
                <div className='font-semibold'>{role.position}</div>
                <div className='text-muted-foreground text-xs mb-1'>
                  {role.startDate} - {role.endDate}
                </div>
                <div>{role.description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Card>
    </div>
  )
}
