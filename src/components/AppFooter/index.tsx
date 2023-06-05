import Link from "next/link";
import Logo from "../AppHeader/Logo";
import Image from "next/image";

/**
 * 公共页面底部
 */
export default function AppFooter() {
  // 商务合作邮箱
  const businessEmail = "bd@deeplang.ai";
  // 公司地址
  const companyAddress = "北京市海淀区 清华科技园 威盛大厦";
  // 简历投递邮箱
  const resumeEmail = "join@deeplang.ai";
  // boss招聘主页
  const bossUrl =
    "https://www.zhipin.com/gongsi/6d1e4b436619f4df1Xd43di-FFM~.html?ka=search_rcmd_company_name_6d1e4b436619f4df1Xd43di-FFM~_custompage";
  // 飞书投递简历
  const feishuUrl = "https://wenjuan.feishu.cn/m/cfm?t=sT0CPNNzNhLi-qegt";

  return (
    <>
      <div className="app_footer">
        <div className="app_footer_inner">
          <div className="app_footer_logo">
            <Logo />
            <div className="company_name">
              <div>本网站由北京算想未来有限责任公司运营</div>
              <div>©️2023 nascentcore.ai 版权所有</div>
            </div>
          </div>
          <div className="join_item_wrap">
            <div className="join_item">
              <div className="join_item_header">加入我们</div>
              <div className="join_item_title">商务合作邮箱</div>
              <div className="join_item_text">{businessEmail}</div>
              <div className="join_item_title">公司地址</div>
              <div className="join_item_text">{companyAddress}</div>
            </div>
            <div className="join_item">
              <div className="join_item_header">加入我们</div>
              <div className="join_item_title">简历投递邮箱</div>
              <div className="join_item_text">{resumeEmail}</div>
              <div className="join_item_icons">
                <Link href={bossUrl} target="__blank">
                  <Image
                    src={"/assets/boss_zhipin.png"}
                    alt={"进入招聘主页"}
                    width={42}
                    height={42}
                  ></Image>
                </Link>

                <Link href={feishuUrl} target="__blank">
                  <Image
                    src={"/assets/feishu.png"}
                    alt={"快速投递简历"}
                    width={42}
                    height={42}
                  ></Image>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
