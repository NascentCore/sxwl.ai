/**
 * 语言切换 导航栏
 */
import { useEffect, useState, useTransition } from "react";
import { Button, Popover, Tooltip } from "antd";
import { TranslationOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { useAppContext } from "@/hooks/useAppContext";

const Index = () => {
  const { locale } = useRouter();
  const { t } = useAppContext();
  const { language, setLanguage } = useAppContext();

  useEffect(() => {
    window.document.title = t.webTitle;
  }, [t.locale]);

  return (
    <>
      <Tooltip
        title={"简体中文/English"}
        placement={"bottomRight"}
        trigger={["hover", "focus", "contextMenu"]}
      >
        <Button
          type="link"
          style={{
            border: "none",
            outline: "none",
          }}
          icon={<TranslationOutlined />}
          onClick={() => {
            if (language === "zh") {
              setLanguage("en");
            } else if (language === "en") {
              setLanguage("zh");
            }
          }}
        >
          {language === "en" ? "简体中文" : "English"}
        </Button>
      </Tooltip>
    </>
  );
};

export default Index;
