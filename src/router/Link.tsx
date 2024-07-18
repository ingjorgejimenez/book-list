import { BUTTONS, EVENTS } from '@/utils/consts'
import { AnchorHTMLAttributes } from 'react'

export const navigate = (href?: string) => {
  window.history.pushState({}, '', href)
  // Create new event
  const navigationEvent = new Event(EVENTS.POP_STATE)
  // dispatch event
  window.dispatchEvent(navigationEvent)
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export function Link({ target, href, ...props }: LinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const isMainEvent = event.button === BUTTONS.primary
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(href) // Navigate with SPA
      window.scrollTo(0, 0)
    }
  }
  return <a onClick={handleClick} href={href} target={target} {...props} />
}
