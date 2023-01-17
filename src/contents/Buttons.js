import { useState} from 'react'
import Functional from './Functional';
import ClassComponent from './ClassComponent';
import './contents.css'

function Buttons(props){
    let [name1, setName1] = useState(false)
    let [name2, setName2] = useState(false)
    return(
        <div className='btns'>
            <div>
                <button id='btn1' className='button' onClick={() => { setName1(!name1)  }}>To See Styling in Functional Component</button>
                {name1 && <Functional/>} 
            
            </div>

            <div>
                <button id='btn2' className='button' onClick={() => { setName2(!name2) }}>To See Styling in Class Component</button>
                {name2 &&  <ClassComponent/>}
            </div>
        </div>
    );
}

export default Buttons;