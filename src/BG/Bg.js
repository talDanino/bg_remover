import "./Bg.css";
import close from "../assets/close.png";
import Download from "../Download/Download";

function Bg() {
  return (
    <div>
      <div className="bg_cont">
        <div className="header_title">העלאת תמונה כדי להסיר את הרקע</div>
        <img src={close} className="close_top" />

        <div className="upload_btn">העלאת תמונה</div>

        <div className="content_div">
          <div className="content_left">
            <div className="tabs_cont">
              <div className="tabs_text text_bg_no_bg"> הוסר רקע </div>
              <div className="tabs_text text_bg_original"> מקורי </div>
            </div>

            <div className="content_left_middle"></div>
          </div>

          <div className="content_right">
            <div className="content_right_middle">
              <Download
                title="תמונה חינם"
                desc="תצוגה מקדימה של תמונה"
                btn_text="הורד"
                small_text="איכות טובה עד 0.25 מגה פיקסל"
                comp_side="top"
              ></Download>

              <Download
                title="Pro"
                desc="תמונה מלאה"
                btn_text="הורד HD"
                small_text="האיכות הטובה ביותר עד 25 מגה פיקסל"
                comp_side="bottom"
              ></Download>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bg;
