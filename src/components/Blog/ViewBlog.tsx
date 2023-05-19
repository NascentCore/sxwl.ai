import ShareBtn from "./ShareBtn";

/**
 * blog 预览容器
 */
export default function ViewBlog({ blogItem }: any) {
  const { title, content, date } = blogItem;
  return (
    <>
      <div id="post">
        <div className="post_title">
          <div>
            {title} <ShareBtn />
          </div>
        </div>

        <div className="post_meta">{date}</div>
        <article
          className="post_content markdown-body"
          id="post_content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></article>
      </div>
    </>
  );
}
