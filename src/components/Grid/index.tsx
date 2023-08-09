import React from 'react'
import { HTMLAttributes } from 'react'

export default function Grid({
  children,
  className,
}: React.PropsWithChildren<{
  className?: HTMLAttributes<HTMLDivElement>['className']
}>): JSX.Element {
  return (
    <div className={className}>
      <div
        className={`grid grid-cols-3 px-20 justify-between max-w-screen-2xl m-auto w-full h-full gap-4`}
      >
        {children}
      </div>
    </div>
  )
}

Grid.Left = function GridLeft({ children }: { children: React.ReactNode }) {
  return <div className="col-span-1">{children}</div>
}

Grid.Right = function GridRight({ children }: { children: React.ReactNode }) {
  return <div className="col-span-2">{children}</div>
}
