import { IPriceItem } from "@/locales/types";
import styles from "./index.module.scss";

/**
 * 价格卡片组件
 */

interface IProps {
  priceItem: IPriceItem;
}

const Index = ({ priceItem }: IProps) => {
  return (
    <>
      <div className={styles.cardWrap}>
        <div className={styles.cardInner}>
          <div className={styles.name}>{priceItem.title}</div>
          <div className={styles.price}>
            <div className={styles.num}>{priceItem.price}</div>
            <div className={styles.unit}>{priceItem.unit}</div>
          </div>
          <div className={styles.desc}>{priceItem.description}</div>
          <div className={styles.btn}>{priceItem.btnText}</div>
          {Boolean(priceItem.tip) && (
            <div className={styles.tip}>{priceItem.tip}</div>
          )}
          {priceItem.featureList.map((text) => (
            <>
              <div className={styles.featureItem}>{text}</div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
