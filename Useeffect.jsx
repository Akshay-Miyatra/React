import React,{useEffect,useState} from 'react'

function Useeffect() {
     const [visible, setVisible] = useState(false);
    useEffect(() => {
    // Trigger the animation after the component mounts
    setVisible(true);
  }, []);
  return (
   <div
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 1s ease-in',
        width: '200px',
        height: '100px',
        backgroundColor: 'skyblue',
        textAlign: 'center',
        lineHeight: '100px',
        margin: '20px auto',
        borderRadius: '10px'
      }}
    >
      Hello!
    </div>
  )
}

export default Useeffect
