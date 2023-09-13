import { useRouter } from "next/router";
import styles from "./index.module.scss";

/**
 * logo组件
 */
export default function Logo() {
  const router = useRouter();
  return (
    <>
      <div
        className={styles.logoWrap}
        onClick={() => {
          router.push("/");
        }}
      >
        <img src="/favicon.ico" alt="" />
        <span>算想未来</span>
      </div>
    </>
  );
}
