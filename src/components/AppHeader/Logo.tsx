import { useRouter } from "next/router";

export default function Logo() {
  const router = useRouter();
  return (
    <>
      <div
        className="logo_wrap"
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
