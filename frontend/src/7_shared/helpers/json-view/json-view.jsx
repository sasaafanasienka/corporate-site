"use client"

import React from 'react'
import { JsonView as DefaultJsonView, allExpanded, darkStyles, defaultStyles } from "react-json-view-lite";
import 'react-json-view-lite/dist/index.css';

export const JsonView = ({data}) => {
  return (
    <DefaultJsonView data={data}
      shouldExpandNode={allExpanded}
      styles={defaultStyles}
      theme={darkStyles}
    />
  )
}
