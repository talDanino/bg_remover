import "./Display_img.css";
import img_bg from '../assets/img.png';
import {useState, useRef} from 'react'


function Display_img(props) {
  
    const inputElement = useRef();
    const [choose_color, setchoose_color] = useState('');

    const colorInput = () => { //=focusInput 
        inputElement.current.click();
    };

    function save_color(e){
        //console.log(e.target.value);
        setchoose_color(e.target.value);
        props.setchoose_color_func(e.target.value); // call function in Av-component
    }

    return (
        <div className="disp_img_cont">
            
            <div>
                {props.comp_type!='orig_comp' ? 
                <>
                    <div className="top_text"> אל תשכח להוריד את הקבצים שלך. הם ימחקו אוטומטית כשתצא מהדף </div>
                    <input type="color" ref={inputElement} className="color_input" onChange={save_color}/>

                    <button className="color_button" onClick={colorInput} > <span>צבע רקע </span>
                        <span className='color_span' style={{backgroundColor: choose_color}}> </span>
                    </button>

                </>
                : <></> }
            </div>
            
            {props.img_bg!=''?
                <div>
                    {/* Here we display the image from the server */}
                    <img src={props.img_bg} className="img_bg"/> 
                </div>
                :
                <></>
            }

        </div>
    );

}

export default Display_img;
