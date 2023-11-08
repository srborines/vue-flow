export function isMouseEvent(event: MouseEvent | TouchEvent): event is MouseEvent {
  return 'clientX' in event
}

export function getEventPosition(event: MouseEvent | TouchEvent, bounds?: DOMRect) {
  const isMouseTriggered = isMouseEvent(event)
  const evtX = isMouseTriggered ? event.clientX : event.touches?.[0].clientX
  const evtY = isMouseTriggered ? event.clientY : event.touches?.[0].clientY

  return {
    x: evtX - (bounds?.left ?? 0),
    y: evtY - (bounds?.top ?? 0),
  }
}
