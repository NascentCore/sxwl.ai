/**
 * 语言切换 导航栏
 */
import { useEffect, useState, useTransition } from "react";
import { Button, Popover, Tooltip } from "antd";
import { useTranslation } from "@/locales/useTranslation";
import { TranslationOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const Index = () => {
  const { locale } = useRouter();
  const t = useTranslation();

  return (
    <>
      <Tooltip
        title={"简体中文/English"}
        placement={"bottomRight"}
        trigger={["hover", "focus", "contextMenu"]}
      >
        <Button
          type="link"
          icon={<TranslationOutlined />}
          onClick={() => {
            if (locale === "zh") {
              window.location.href = `/en`;
            } else if (locale === "en") {
              window.location.href = `/`;
            }
          }}
        >
          {t.localeText}
        </Button>
      </Tooltip>
    </>
  );
};

export default Index;
