import { useState, useEffect } from 'react';
import Lottie from 'react-lottie-player';
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

// import lottieJson from './my-lottie.json'

const names = ['delivery', 'mobile', 'rocket'];

export function LoadAnimation({ name }) {
  const [animationData, setAnimationData] = useState();

  useEffect(() => {
    if (name) {
      import(`./lottieFiles/${name}.json`)
        .then(setAnimationData)
        .catch(err => console.log(err));
    }
  }, [name]);

  return <Lottie animationData={animationData} play className="lottie" />;
}

export function LottieAnimation() {
  return (
    <div className="container">
      {names.map(name => (
        <LoadAnimation name={name} />
      ))}
    </div>
  );
}
