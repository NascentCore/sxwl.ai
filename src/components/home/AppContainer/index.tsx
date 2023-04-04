import { useEffect, useState } from "react";
import UA from "ua-device";

type IProps = {
  children: any;
};

const Index = ({ children }: IProps) => {
  const [device_type, set_device_type] = useState("desktop");

  useEffect(() => {
    const _ua = new UA(navigator.userAgent);
    set_device_type(_ua.device.type);
  }, []);

  return (
    <>
      <div className={`app ${device_type}`}>{children}</div>
    </>
  );
};

export default Index;
