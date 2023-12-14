import { Col, Image, Row } from "antd";
import styles from "./index.module.scss";
import { useAppContext } from "@/hooks/useAppContext";

const Index = () => {
  const { t } = useAppContext();
  return (
    <>
      <div className={styles.investorInstitutionWrap}>
        <Row>
          <Col span={12} className={styles.itemTitle}>
            {t.homepageCover.investorInstitutionTitle}
          </Col>
          <Col span={12} className={styles.itemIcon}>
            <Image width={100} src={"/assets/qjct.png"} preview={false} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Index;
