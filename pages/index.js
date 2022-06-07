import React, { useEffect } from 'react';
import MainLayout from '../components/MainLayout.js';
import BoxInput from '../components/BoxInput';
import { Boxes } from '../data/Boxes.js';
import App from '../pages/_app';
import BoxResults from '../components/BoxResults.js';
import BoxEntry from '../components/BoxEntry';


const HomePage = () => {
  const [height, setHeight] = React.useState('')
  const handleHeight = (event) => setHeight(event.target.value);

  const [width, setWidth] = React.useState('')
  const handleWidth = (event) => setWidth(event.target.value);

  const [depth, setDepth] = React.useState('')
  const handleDepth = (event) => setDepth(event.target.value);


  //  const SelectBoxes =  React.useEvent(() => {

    let newBoxes = []

    Boxes.forEach((box) => {
      // if (box.height >= height && box.width >= width && box.depth >= depth) {
      //   newBox.push(box.name)
      // }
      if (box.height >= height && box.width >= width && box.depth >= depth) {
        newBoxes.push(box)
        // newBoxes.push([box.name, box.price, box.width, box.height, box.depth])
      }
    })

    let limitResult = newBoxes.slice(0,3)
    
    console.log('limitResult', limitResult)
    // })

    const handleFind = () => {

    }
    const handleReset = () => {
      setHeight('')
      setWidth('')
      setDepth('')
    }

    return (
      <MainLayout>
          <BoxInput
            height={height}
            width={width}
            depth={depth}
            handleHeight={handleHeight}
            handleWidth={handleWidth}
            handleDepth={handleDepth}
            handleFind={handleFind}
            handleReset={handleReset}
          />
          <BoxResults>
            {limitResult.flatMap((box, i) => (
              <BoxEntry key={i} bg={ i == 0 ? 'selectionBlue' : 'secondaryBlue'} price={box.price} name={box.name} height={box.height} width={box.width} depth={box.depth}/>
            ))}
          </BoxResults>
      </MainLayout>
  )}
  
  export default HomePage


