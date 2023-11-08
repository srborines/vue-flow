import { infiniteExtent } from '@xyflow/system'
import { createHooks } from './hooks'
import type { DefaultEdgeTypes, DefaultNodeTypes, FlowOptions, State } from '~/types'
import { ConnectionLineType, ConnectionMode, PanOnScrollMode, SelectionMode } from '~/types'
import {
  BezierEdge,
  DefaultNode,
  InputNode,
  OutputNode,
  SimpleBezierEdge,
  SmoothStepEdge,
  StepEdge,
  StraightEdge,
} from '~/components'
import { isDef, isMacOs } from '~/utils'

export const defaultNodeTypes: DefaultNodeTypes = {
  input: InputNode,
  default: DefaultNode,
  output: OutputNode,
}

export const defaultEdgeTypes: DefaultEdgeTypes = {
  default: BezierEdge,
  straight: StraightEdge,
  step: StepEdge,
  smoothstep: SmoothStepEdge,
  simplebezier: SimpleBezierEdge,
}

function defaultState(): State {
  return {
    vueFlowRef: null,
    viewportRef: null,
    // todo: change this to a Set
    nodes: [],
    // todo: change this to a Set
    edges: [],
    nodeTypes: {},
    edgeTypes: {},

    initialized: false,

    dimensions: {
      width: 0,
      height: 0,
    },
    viewport: { x: 0, y: 0, zoom: 1 },

    d3Zoom: null,
    d3Selection: null,
    d3ZoomHandler: null,
    minZoom: 0.5,
    maxZoom: 2,

    translateExtent: infiniteExtent,
    nodeExtent: infiniteExtent,

    selectionMode: SelectionMode.Full,
    paneDragging: false,
    preventScrolling: true,
    zoomOnScroll: true,
    zoomOnPinch: true,
    zoomOnDoubleClick: true,
    panOnScroll: false,
    panOnScrollSpeed: 0.5,
    panOnScrollMode: PanOnScrollMode.Free,
    panOnDrag: true,
    edgeUpdaterRadius: 10,
    onlyRenderVisibleElements: false,
    defaultViewport: { x: 0, y: 0, zoom: 1 },

    nodesSelectionActive: false,
    userSelectionActive: false,

    userSelectionRect: null,

    defaultMarkerColor: '#b1b1b7',
    connectionLineStyle: {},
    connectionLineType: null,
    connectionLineOptions: {
      type: ConnectionLineType.Bezier,
      style: {},
    },
    connectionMode: ConnectionMode.Loose,
    connectionStartHandle: null,
    connectionEndHandle: null,
    connectionClickStartHandle: null,
    connectionPosition: { x: NaN, y: NaN },
    connectionRadius: 20,
    connectOnClick: true,
    connectionStatus: null,
    isValidConnection: null,

    snapGrid: [15, 15],
    snapToGrid: false,

    edgesUpdatable: false,
    edgesFocusable: true,
    nodesFocusable: true,
    nodesConnectable: true,
    nodesDraggable: true,
    nodeDragThreshold: 0,
    elementsSelectable: true,
    selectNodesOnDrag: true,
    multiSelectionActive: false,
    selectionKeyCode: 'Shift',
    multiSelectionKeyCode: isMacOs() ? 'Meta' : 'Control',
    zoomActivationKeyCode: isMacOs() ? 'Meta' : 'Control',
    deleteKeyCode: 'Backspace',
    panActivationKeyCode: 'Space',

    hooks: createHooks(),

    applyDefault: true,
    autoConnect: false,

    fitViewOnInit: false,
    noDragClassName: 'nodrag',
    noWheelClassName: 'nowheel',
    noPanClassName: 'nopan',
    defaultEdgeOptions: undefined,
    elevateEdgesOnSelect: false,
    elevateNodesOnSelect: true,

    autoPanOnNodeDrag: true,
    autoPanOnConnect: true,

    disableKeyboardA11y: false,
    ariaLiveMessage: '',

    __experimentalFeatures: {
      nestedFlow: false,
    },
  }
}

export function useState(opts?: FlowOptions): State {
  const state = defaultState()
  if (opts) {
    Object.keys(opts).forEach((o) => {
      const option = opts[o as keyof typeof opts]
      if (isDef(option)) {
        ;(state as any)[o] = option
      }
    })
  }

  return state
}
