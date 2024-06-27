import React, { useEffect } from 'react';
import  {useWindowDimensions} from 'react-native'

import { Canvas, useImage, Image } from '@shopify/react-native-skia';
import { useSharedValue, withTiming } from 'react-native-reanimated';


const App = () => {
  const {width, height} = useWindowDimensions();
  const background = useImage(require('../assets/images/background-day.png'))
  const bird = useImage(require('../assets/images/bluebird-upflap.png'))
  const pipeTop = useImage(require('../assets/images/pipe-green-top.png'))
  const pipeBottom = useImage(require('../assets/images/pipe-green.png'))
  const base = useImage(require('../assets/images/base.png'))

  const x = useSharedValue(width - 50);

  useEffect(()=> {
    x.value = withTiming(0) //38:33 tempo da video aula
  },[])

  const pipeOffset = 0;
  return (
      <Canvas style={{width, height }}>
        <Image image={background} width={width} height={height} fit={'cover'}/>
        <Image image={pipeTop} y={pipeOffset - 320} x={x.value} width={52} height={640}/>
        <Image image={pipeBottom} y={height - 320 + pipeOffset} x={x.value} width={52} height={320}/>
        <Image image={bird} y={height / 2 - 24} x={width / 2 - 4} width={64} height={48}/>
        <Image image={base} width={width} height={150} y={height - 75} x={0}  fit={'cover'}/>
      </Canvas>
    );
}

export default App;