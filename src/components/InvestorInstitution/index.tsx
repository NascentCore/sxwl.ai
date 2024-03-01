import { Col, Image, Row } from "antd";
import styles from "./index.module.scss";
import Translate from "@docusaurus/Translate";
import qjctPng from "./assets/qjct.png";

const Index = () => {
  return (
    <>
      <div className={styles.investorInstitutionWrap}>
        <Row>
          <Col span={12} className={styles.itemTitle}>
            <Translate id="homepageCover.investorInstitutionTitle"></Translate>
          </Col>
          <Col span={12} className={styles.itemIcon}>
            <Image width={100} src={qjctPng} preview={false} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Index;
