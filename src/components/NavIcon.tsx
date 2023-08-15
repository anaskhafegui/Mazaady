import React from 'react'

export default function NavIcon({ normalIcon, hoverIcon }: any) {
  return (
    <div className="w-12 justify-center flex group">
      <div className="absolute top-0 bottom-0 flex items-center">{normalIcon}</div>
      <div
        className={`absolute top 0 bottom-0 group-hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out`}
      >
        {hoverIcon}
      </div>
    </div>
  )
}