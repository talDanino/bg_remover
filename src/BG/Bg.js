import "./Bg.css";
import close from "../assets/close.png";

function Bg() {
  return (
    <div>
      <div className="bg_cont">
        <div className="header_title">העלאת תמונה כדי להסיר את הרקע</div>
        <img src={close} className="close_top" />

        <div className="upload_btn">העלאת תמונה</div>

        <div className="content_div"> </div>
      </div>
    </div>
  );
}

export default Bg;
