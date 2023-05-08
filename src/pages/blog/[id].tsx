import AppContainer from "@/components/AppContainer";
import ViewBlog from "@/components/Blog/ViewBlog";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/**
 * blog 预览页
 */
export default function Blog() {
  const router = useRouter();
  const { id } = router.query;
  const [blogItem, setBlogItem] = useState<any>({});
  useEffect(() => {
    if (!id) return;
    axios
      .get("/api/getBlogDetail", {
        params: { id: Number(id) },
      })
      .then((res) => {
        setBlogItem(res.data.data);
      });
  }, [id]);
  return (
    <>
      {id && (
        <AppContainer>
          <div className="app_container blog_container">
            <ViewBlog blogItem={blogItem} />
          </div>
        </AppContainer>
      )}
    </>
  );
}
