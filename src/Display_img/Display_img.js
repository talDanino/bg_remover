import "./Display_img.css";
import img_bg from '../assets/img.png';
import {useRef} from 'react'


function Display_img(props) {
  
    const inputElement = useRef();

    const colorInput = () => {
        inputElement.current.click();
    };

    return (
        <div className="disp_img_cont">
            
            <div>
                {props.comp_type!='orig_comp' ? 
                <>
                    <div className="top_text"> אל תשכח להוריד את הקבצים שלך. הם ימחקו אוטומטית כשתצא מהדף </div>
                    <input type="color" ref={inputElement} className="color_input"/>

                    <button className="color_button" onClick={colorInput}>צבע רקע</button>

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
