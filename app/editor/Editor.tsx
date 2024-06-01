'use client'

import { faGear, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import ReactFlow, {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  Background,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  Edge,
  Node,
} from 'reactflow'
import 'reactflow/dist/base.css'
import './reactflow.css'

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Start Node' },
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    type: 'output',
    data: { label: 'End Node' },
    position: { x: 250, y: 0 },
  },
]

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
]

export default function Editor() {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)

  const onNodesChange: OnNodesChange = (changes) =>
    setNodes((nodes) => applyNodeChanges(changes, nodes))
  const onEdgesChange: OnEdgesChange = (changes) =>
    setEdges((edges) => applyEdgeChanges(changes, edges))
  const onConnect: OnConnect = (connection) =>
    setEdges((edges) => addEdge(connection, edges))

  return (
    <div className="absolute inset-0 grid">
      <div className='relative'>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          className='absolute inset-0'
          fitView
        >
          <Background />
        </ReactFlow>
        <div className='absolute top-2 left-2 bg-white shadow-lg h-12 rounded-full'>
          <ul className='flex gap-3 p-2'>
            {[
              faPlus,
              faGear,
              faTrash
            ].map((icon, i) => <li key={`toolbar_${i}`} className='w-8 h-8 flex place-items-center cursor-pointer hover:bg-primary-100 transition-colors rounded-full shadow-md place-content-center bg-slate-100'>
              <FontAwesomeIcon icon={icon} />
            </li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}
