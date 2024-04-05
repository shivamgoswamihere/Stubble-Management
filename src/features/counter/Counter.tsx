import { useState } from "react"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  increment,
  incrementAsync,
  selectCount,
} from "./counterSlice"

export default const Counter = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)


  return (
    <div>
      <div>
        
      </div>
    </div>
  )
}
