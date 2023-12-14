import AppContainer from "@/components/AppContainer";
import PriceCard from "@/components/Pricing/PriceCard";
import styles from "./index.module.scss";
import { useAppContext } from "@/hooks/useAppContext";
import { IPriceItem } from "@/locales/types";

/**
 * 价格 列表页面
 */
export default function Index() {
  const { t } = useAppContext();
  const priceCardList = t.price;
  return (
    <>
      <AppContainer>
        <div className="app_container blog_container">
          <div className={styles.priceBoxGroup}>
            {priceCardList.map((item: IPriceItem) => (
              <>
                <PriceCard priceItem={item} />
              </>
            ))}
          </div>
        </div>
      </AppContainer>
    </>
  );
}
