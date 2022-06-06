import React from 'react';
import MainLayout from '../components/MainLayout.js';
import BoxInput from '../components/BoxInput';
import { Boxes } from '../dummydata/Boxes.js';
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

  //   let newBoxes = []

  //   Boxes.forEach((box) => {
  //     if (box.height >= height && box.width >= width && box.depth >= depth) {
  //       newBox.push(box.name)
  //     }
  //   })
    
    
  //   })


    // console.log('HomePage', Boxes)

    return (
      <MainLayout>
          <BoxInput
            height={height}
            width={width}
            depth={depth}
            handleHeight={handleHeight}
            handleWidth={handleWidth}
            handleDepth={handleDepth}
            handleFind={() => console.log('find this')}
            handleReset={() => console.log('reset fields')}
          />
          <BoxResults>
            {/* map function here that uses BoxEntry component */}
            {/* two examples below */}
            <BoxEntry bg='selectionBlue' price='$5.99' name='Box 1' height='12"' width='15"' depth='11"'/>
            <BoxEntry bg='secondaryBlue' price='$6.99' name='Box 2' height='12"' width='15"' depth='11"'/>
          </BoxResults>
      </MainLayout>
  )}
  
  export default HomePage


