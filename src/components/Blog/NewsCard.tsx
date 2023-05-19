import moment from "moment";
import { useRouter } from "next/router";

/**
 * blog卡片组件
 */
const BlogCard = ({ item }: any) => {
  const router = useRouter();
  const { title, description, timesStamp, poster, author } = item;
  return (
    <>
      <div
        className="ai_blog_card_wrap"
        onClick={() => {
          router.push(`/blog/${timesStamp}`);
        }}
      >
        <div className="ai_blog_card_inner">
          <div className="ai_blog_card_img">
            <img src={poster || "/assets/poster.webp"} alt="" />
          </div>
          <div className="ai_blog_card_content">
            <div className="ai_blog_card_title">{title}</div>
            <div className="ai_blog_card_tags">
              <div className="ai_blog_card_tags_1">{author || "管理员"}</div>
              <div className="ai_blog_card_tags_2">
                {moment.unix(timesStamp).format("YYYY-MM-DD HH:mm")}
              </div>
            </div>
            <div className="ai_blog_card_subtitle">{description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
