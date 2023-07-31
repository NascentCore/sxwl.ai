import { useEffect, useState } from "react";
import UA from "ua-device";
import AppFooter from "../AppFooter";
import AppHeader from "../AppHeader";

type IProps = {
  children: any;
  className?: string;
};

/**
 * 页面容器组件
 */
const Index = ({ children, className = "" }: IProps) => {
  const [device_type, set_device_type] = useState("desktop");

  useEffect(() => {
    const _ua = new UA(navigator.userAgent);
    set_device_type(_ua.device.type);
  }, []);

  return (
    <>
      <div className={`app ${device_type} ${className}`}>
        <AppHeader />
        <div className="app_container_wrap">{children}</div>
        <AppFooter />
      </div>
    </>
  );
};

export default Index;
