import { Popover, QRCode } from "antd";
import { useEffect, useState } from "react";

/**
 * 分享按钮组件
 */
export default function ShareBtn() {
  const content = <Content />;
  return (
    <>
      <Popover content={content} title="" trigger="click">
        <div className="share_btn_wrap">
          <div className="share_btn_icon"></div>
          <div className="share_btn_text">分享</div>
        </div>
      </Popover>
    </>
  );
}

function Content() {
  const [value, setValue] = useState("-");
  useEffect(() => {
    setValue(window.location.href);
  }, []);
  return (
    <>
      <div className="share_popover_wrap">
        <div className="share_popover_item" onClick={() => copyText(value)}>
          复制链接
        </div>
        <div className="share_popover_item">微信扫一扫</div>
        <div className="share_popover_qrcode">
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
