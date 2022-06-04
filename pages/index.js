import React from 'react'
import { Boxes } from '../dummydata/Boxes.js'




const HomePage = () => {
  const [height, setHeight] = React.useState(10)
  const [width, setWidth] = React.useState(12)
  const [depth, setDepth] = React.useState(8)


   const SelectBoxes =  React.useEvent(() => {

    let newBoxes = []

    Boxes.forEach((box) => {
      if (box.height >= height && box.width >= width && box.depth >= depth) {
        newBox.push(box.name)
      }
    })
    
    
    })


    console.log('HomePage', Boxes)

    return <div>Welcome to Next.js!</div>
  }
  
  export default HomePage


