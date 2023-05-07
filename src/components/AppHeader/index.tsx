import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useState } from "react";

export default function Index() {
  const [nav_position, set_nav_position] = useState(""); // 0 1 ,
  useEffect(() => {
    const sfn = (e: any) => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop >= 0 && scrollTop <= 80) {
        set_nav_position("");
      } else if (scrollTop > 160 && scrollTop <= 200) {
        set_nav_position(" app_header_hide");
      } else if (scrollTop > 200) {
        set_nav_position(" app_header_active");
      }
    };
    window.addEventListener("scroll", sfn);
    return () => {
      window.removeEventListener("scroll", sfn);
    };
  }, []);
  return (
    <>
      <div className="app_header">
        <div className={`app_header_inner${nav_position}`}>
          <Logo />
          <div className="app_nav">
            <div className="app_nav_item">
              <Link href={"/"}>
                <span>首页</span>
              </Link>
            </div>
            <div className="app_nav_item">
              <Link href={"/blog"}>
                <span>博客</span>
              </Link>
            </div>
          </div>
        </div>
        {nav_position != "" ? (
          <>
            <div style={{ height: "80px" }}></div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
