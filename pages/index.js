import React, { useEffect } from 'react';
import MainLayout from '../components/MainLayout.js';
import BoxInput from '../components/BoxInput';
import { Boxes } from '../data/Boxes.js';
import App from '../pages/_app';
import BoxResults from '../components/BoxResults.js';
import BoxEntry from '../components/BoxEntry';


const HomePage = () => {
  const [height, setHeight] = React.useState(200)
  const handleHeight = (event) => setHeight(event.target.value);

  const [width, setWidth] = React.useState(200)
  const handleWidth = (event) => setWidth(event.target.value);

  const [depth, setDepth] = React.useState(200)
  const handleDepth = (event) => setDepth(event.target.value);
  const [biggerBoxes, setBiggerBoxes] = React.useState([]);


   

    let myBoxes = []

    const finalBoxes = []

    let myHeight = 100
    let myWidth = 100
    let myDepth = 100
  
const findLowest = (myArray) => {
  myArray.forEach((el) => {
    if (el.height < myHeight && el.width < myWidth && el.depth < myDepth) {
      myHeight = el.height
      myWidth = el.width
      myDepth = el.depth

      finalBoxes.unshift(el)
    }
  })
  console.log('DKJFAKSHDFKJAHSFKDHAKJ', finalBoxes)
}


findLowest(Boxes)
 
   const handleFind = () => {


    myBoxes = Boxes.filter((box, i) => (
      box.height > height && box.width > width && box.depth > depth))

    if (myBoxes.height < myHeight && myBoxes.width < myWidth && myBoxes.depth < myDepth) {
      myHeight = box.height
      myWidth = box.width
      myDepth = box.depth
    }

    setBiggerBoxes(myBoxes)
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
          <BoxResults >
            <BoxEntry bg='selectionBlue' price="Price" name="Name" height="Height" width="Width" depth="Depth" noBox/>
          {biggerBoxes.map((box, i) => (
            <BoxEntry key={i} bg='selectionBlue' price={box.price} name={box.name} height={box.height} width={box.width} depth={box.depth}/>
            ))}
          </BoxResults>
      </MainLayout>
  )}
  
  export default HomePage


