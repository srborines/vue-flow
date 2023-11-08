import type { Dimensions, NodeHandleBounds, XYPosition } from '@xyflow/system'
import type { ElementData } from './flow'
import type { GraphNode, Node } from './node'
import type { GraphEdge } from './edge'

export interface NodeDragItem {
  id: string
  // relative node position (to parent)
  position: XYPosition
  // distance from the mouse cursor to the node when start dragging
  distance: XYPosition
  dimensions: Dimensions
  from: XYPosition
  extent?: Node['extent']
  parentNode?: string
  expandParent?: boolean
}

export interface NodeDimensionChange {
  id: string
  type: 'dimensions'
  dimensions?: Dimensions
  handleBounds?: NodeHandleBounds
  updateStyle?: boolean
  resizing?: boolean
}

export interface NodePositionChange {
  id: string
  type: 'position'
  position: XYPosition
  from: XYPosition
  dragging?: boolean
}

export interface NodeSelectionChange {
  id: string
  type: 'select'
  selected: boolean
}

export interface NodeRemoveChange {
  id: string
  type: 'remove'
}

export interface NodeAddChange<Data = ElementData> {
  item: GraphNode<Data>
  type: 'add'
}

export type NodeChange = NodeDimensionChange | NodePositionChange | NodeSelectionChange | NodeRemoveChange | NodeAddChange

export type EdgeSelectionChange = NodeSelectionChange

export interface EdgeRemoveChange extends NodeRemoveChange {
  source: string
  target: string
}

export interface EdgeAddChange<Data = ElementData> {
  item: GraphEdge<Data>
  type: 'add'
}

export type EdgeChange = EdgeSelectionChange | EdgeRemoveChange | EdgeAddChange

export type ElementChange = NodeChange | EdgeChange
