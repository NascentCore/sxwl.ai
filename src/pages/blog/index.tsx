import AppContainer from "@/components/AppContainer";
import NewsCard from "@/components/Blog/NewsCard";
import axios from "axios";
import { useEffect, useState } from "react";

/**
 * blog 列表页面
 */
export default function Index() {
  const [list, setList] = useState<any>([]);
  useEffect(() => {
    axios.get("/api/getBlogList").then((res) => {
      console.log(res);
      setList(convertTo2DArray(res.data.data, 2));
    });
  }, []);
  return (
    <>
      <AppContainer>
        <div className="app_container blog_container">
          {list.map((arr: any, i: number) => (
            <div className="blog_list_wrap" key={i}>
              {arr.map((item: any, j: number) => (
                <NewsCard item={item} key={j} />
              ))}
            </div>
          ))}
        </div>
      </AppContainer>
    </>
  );
}

function convertTo2DArray(arr: any, m: number) {
  const result = [];
  for (let i = 0; i < arr.length; i += m) {
    result.push(arr.slice(i, i + m));
  }
  return result;
}
