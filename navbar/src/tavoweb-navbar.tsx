import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'

import Root from '@/root.component'
import { ErrorBoundary } from '@/components/error-boundary'

import './globals.css'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props): React.ReactElement {
    return <ErrorBoundary />
  }
})

export const { bootstrap, mount, unmount } = lifecycles
