import "./Download_popup.css";
import close from '../assets/close1.png' ;
import not_robot from '../assets/not_robot.png' ;
import { useState } from "react";


function Download_popup(props) {


    const [checkbox_state, setcheckbox_state] = useState(false);
    const [show_error, setshow_error] = useState(false);
    
    function close_popup()
    {
        props.show_download_popup_func();
    }

    const image_name=props.img_bg_no_bg;
    const image_name_short = image_name.split("/"); //create array


    function download_img(){

        if(checkbox_state){

            fetch(image_name)
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = image_name_short[3];
                    a.click();
                });
            
            });
        }
        else{
            setshow_error(true);
        }   
        
    }

    function checkbox_checked(){
        debugger;
        setcheckbox_state(!checkbox_state);
        setshow_error(false);
    }


    return (
        <>

        <div className="overlay">

        </div>

        <div className="download_popup_cont">
            <img src={close} className="download_popup_close" onClick={close_popup} />

            <div className="download_popup_top_div"> </div>
            
            <div className="download_popup_title">אישור להורדת התמונה</div>

            <div className="download_popup_subtitle">האם להוריד את התמונה?</div>

            <div className="not_robot_cont">
                <input type="checkbox" className="checkbox_popup" onClick={checkbox_checked}/>

                <div className="not_robot_text" > אני לא רובוט </div>
                
                <img src={not_robot} className="not_robot_img" />
            </div>           

            {show_error? <div className="not_robot_error">יש לסמן אני לא רובוט</div> : <></>}
            
            <div className="aprove_btn_cont">
                <button className="aprove_btn" onClick={download_img}> אישור </button>
                <button className="cancel_btn" onClick={close_popup}> ביטול </button>
            </div>


        </div>
        
        </>
    );
}

export default Download_popup;
