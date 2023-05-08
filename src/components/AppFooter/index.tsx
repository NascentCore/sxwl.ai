import Logo from "../AppHeader/Logo";
import Image from "next/image";

/**
 * 公共页面底部（预留组件，方便以后拓展
 */
export default function AppFooter() {
  return (
    <>
      <div className="app_footer">
        <div className="app_footer_inner">
          <div className="app_footer_logo">
            <Logo />
            <div className="company_name">xxx科技有限公司</div>
          </div>
          <div className="join_item_wrap">
            <div className="join_item">
              {/* <div className="join_item_header">加入我们</div> */}
              {/* <div className="join_item_title">商务邮箱</div>
              <div className="join_item_text">商务邮箱</div>
              <div className="join_item_title">公司地址</div>
              <div className="join_item_text">公司地址</div> */}
              <div className="join_item_qrcode">
                <Image
                  width={200}
                  height={278}
                  src="/assets/join_qr.png"
                  alt=""
                />
              </div>
            </div>
            <div className="join_item">
              {/* <div className="join_item_header">加入我们</div> */}
              {/* <div className="join_item_title">商务邮箱</div>
              <div className="join_item_text">商务邮箱</div>
              <div className="join_item_title">公司地址</div>
              <div className="join_item_text">公司地址</div> */}
              <div className="join_item_qrcode">
                <Image
                  width={200}
                  height={278}
                  src="/assets/follow_qr.png"
                  alt=""
                />
              </div>
            </div>
            <div className="join_item">
              {/* <div className="join_item_header">加入我们</div> */}
              {/* <div className="join_item_title">商务邮箱</div>
              <div className="join_item_text">商务邮箱</div>
              <div className="join_item_title">公司地址</div>
              <div className="join_item_text">公司地址</div> */}
              <div className="join_item_qrcode">
                <Image
                  width={200}
                  height={278}
                  src="/assets/wechat_qr.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
