import { QRCode } from "antd";
import { useEffect, useState } from "react";

/**
 * blog 详情页 分享 二维码组件
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
