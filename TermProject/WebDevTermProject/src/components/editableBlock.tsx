import { SetStateAction, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import ContentEditable from 'react-contenteditable';
import BlockMenu from './blockMenu';

interface propType{
    type:string,

}

function EditableBlock(props:any) {
    const [popUp, setPopUp] = useState(false)
    const contentEditable:any = useRef();
    const text = useRef('');
    useEffect(() => {



        return () => {
            // Your code here
        }
    }, []);

    const handleChange = (evt: { target: { value: string; }; }) => {
        text.current = evt.target.value;
    };

    const handleBlur = () => {
        console.log(text.current);
        document.removeEventListener("keyup",slashHandle)
    };

    const slashHandle=(e: { key: string; })=>{
        if(e.key == "/"){
            console.log("shit")
        }
        
    }

    const handleFocus = () => {
        document.addEventListener("keyup",slashHandle)
    };



    return (
        <div style={{width:"100vw"}}>
            <ContentEditable
                onFocus={handleFocus}
                innerRef={contentEditable}
                html={text.current} // innerHTML of the editable div
                disabled={false}       // use true to disable editing
                onBlur={handleBlur}
                onChange={handleChange} // handle innerHTML change
                tagName='p' // Use a custom HTML tag (uses a div by default)
            />
            {/* {
                popUp && 
            } */}
            <BlockMenu/>
        </div>
    )
}

export default EditableBlock;