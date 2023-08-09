import React from 'react'

export default function NavIcon({ normalIcon, hoverIcon }: any) {
  const [isHover, setIsHover] = React.useState(false)

  const onMouseEnter = () => setIsHover(true)
  const onMouseLeave = () => setIsHover(false)

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="w-12 justify-center flex "
    >
      <div className="absolute top-0 bottom-0 flex items-center">{normalIcon}</div>
      <div
        className={`absolute top 0 bottom-0  ${
          isHover ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-500 ease-in-out`}
      >
        {hoverIcon}
      </div>
    </div>
  )
}
