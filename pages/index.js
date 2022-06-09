import React, { useEffect } from 'react';
import MainLayout from '../components/MainLayout.js';
import BoxInput from '../components/BoxInput';
import { Boxes } from '../data/Boxes.js';
import App from '../pages/_app';
import BoxResults from '../components/BoxResults.js';
import BoxEntry from '../components/BoxEntry';


const HomePage = () => {
  const [height, setHeight] = React.useState(12)
  const handleHeight = (event) => setHeight(event.target.value);

  const [width, setWidth] = React.useState(12)
  const handleWidth = (event) => setWidth(event.target.value);

  const [depth, setDepth] = React.useState(12)
  const handleDepth = (event) => setDepth(event.target.value);
  // const [biggerBoxes, setBiggerBoxes] = React.useState([]);



    let biggerBoxes = []

    Boxes.forEach((box) => {
      // if (box.height >= height && box.width >= width && box.depth >= depth) {
      //   newBox.push(box.name)
      // }
      if (box.height >= height && box.width >= width && box.depth >= depth) {
        newBoxes.push(box)
        // newBoxes.push([box.name, box.price, box.width, box.height, box.depth])
      }
    })


   

    let finalBoxes = []


 
    const handleFind = () => {

      let initialState =   {
        "price": "$6.49",
        "name": "14 Cube",
        "depth": 0,
        "width": 0,
        "height": 0
      };  


      Boxes?.filter((box, i) => (
        box.height >= height && box.width >= width && box.depth >= depth)).map((box, j) => {
          biggerBoxes.push(box)
        })
        biggerBoxes.reduce((res, obj) => {
          finalBoxes.push(obj.height < res.height && obj.width < res.width && obj.depth < res.depth) ? obj : res;
      }, 0);
      

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
              <BoxEntry bg='selectionBlue' price={finalBoxes.price} name={finalBoxes.name} height={finalBoxes.height} width={finalBoxes.width} depth={finalBoxes.depth}/>
            {limitResult.flatMap((box, i) => (
              <BoxEntry key={i} bg={ i == 0 ? 'selectionBlue' : 'secondaryBlue'} price={box.price} name={box.name} height={box.height} width={box.width} depth={box.depth}/>
            ))}
          </BoxResults>
      </MainLayout>
  )}
  
  export default HomePage


