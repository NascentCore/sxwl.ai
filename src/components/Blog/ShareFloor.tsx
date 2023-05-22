import { QRCode } from "antd";
import { useEffect, useState } from "react";

/**
 * 分享 楼层
 */
export default function ShareBtn() {
  const [value, setValue] = useState("-");
  useEffect(() => {
    setValue(window.location.href);
  }, []);
  return (
    <>
      <div className="post_shall_floor">
        <div className="post_shall_floor_tip">分享到微信</div>
        <div className="post_shall_floor_qrcode">
          <QRCode value={value} size={100} />
        </div>
      </div>
    </>
  );
}

function copyText(text: string) {
  const textareaC = document.createElement("textarea");
  textareaC.setAttribute("readonly", "readonly");
  textareaC.value = text;
  document.body.appendChild(textareaC);
  textareaC.select();
  const res = document.execCommand("copy");
  document.body.removeChild(textareaC);
  alert("复制成功");
  return res;
}
