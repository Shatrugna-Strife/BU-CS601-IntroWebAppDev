import { SetStateAction, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import ContentEditable from 'react-contenteditable';

interface propType{
    type:string,

}

function BlockMenu(props:any) {
    const [count, setCount] = useState("")
    const contentEditable:any = useRef();
    const text = useRef('');
    useEffect(() => {



        return () => {
            // Your code here
        }
    }, []);
    return(
        <>
            <ul>
                <li>afsasf</li>
                <li>asf</li>
            </ul>
        </>
    )
}

export default BlockMenu;