import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import copy from 'copy-to-clipboard';

function App() {
  const [color, setcolor] = useState("#000000");
  const [copied, setcopied] = useState(false);
  let copyButton=document.querySelector("#copy-button");

  const colorChange=(e)=>{
    setcolor(e.target.value)
  }

  const handleCopy=()=>{
    copy(color);
    setcopied(true);
    setTimeout(()=>{
      setcopied(false);
    },2000)
  }
  return (
    <>
      <div id="container" className='flex flex-col sm:p-4 p-3 border-2 rounded-xl shadow-2xl border-gray-200 gap-6 sm:w-auto'>
        <h1 className='sm:text-3xl text-xl font-bold'>Color Picker</h1>
        <div id="panel" className='flex flex-col justify-center items-start gap-6'>
          <div className="sm:h-40 h-20 sm:w-100 w-60 rounded-xl shadow-lg" style={{backgroundColor: color}}></div>
          <p className='flex items-center sm:text-xl text-sm'>Select Your Color: &nbsp;
            <input className='rounded-xl border-0' value={color} type="color" name="color" id="color" onChange={colorChange}/>
          </p>
          <p className='sm:text-xl text-sm flex sm:justify-start justify-center items-center'>Color:&nbsp; {color.toUpperCase()} &nbsp;
            <button id='copy-button' onClick={handleCopy} className='cursor-pointer text-sm bg-sky-400 text-white p-2 rounded-lg shadow-xl active:scale-75'>
              {copied ? (<p>Copied To Clipboard</p>) : (<FontAwesomeIcon icon={faClipboard} />)}
            </button>
          </p>
        </div>
      </div>
    </>
  )
}

export default App
