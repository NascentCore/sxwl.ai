const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { marked } = require("marked");
const moment = require("moment");

/**
 * 解析 md 文档目录 转换成 html
 * @param {string} fileDirPath
 */
function filteFileMdList(fileDirPath) {
  const listArr = [];

  const fileDisplay = (filePath) => {
    try {
      const files = fs.readdirSync(filePath);
      for (let i = 0; i < files.length; i++) {
        const filename = files[i];
        const filedir = path.join(filePath, filename);
        try {
          const stats = fs.statSync(filedir);
          const isFile = stats.isFile();
          const isDir = stats.isDirectory();

          if (isFile) {
            const extname = path.extname(filedir);

            if (extname === ".md") {
              listArr.push(filedir);
            }
          }

          if (isDir) {
            fileDisplay(filedir);
          }
        } catch (error) {
          console.warn("获取文件stats失败", error);
        }
      }
    } catch (error) {
      console.warn(error);
    }
  };

  fileDisplay(fileDirPath);
  return listArr;
}

function convertMdToHtml(filePath) {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContents);
  const content = marked(matterResult.content);
  const { title, date, author, tags, categories, poster } = matterResult.data;
  return {
    content,
    title,
    author,
    poster,
    timesStamp: moment(date).unix(),
    description: content.replace(/<[^>]*>/g, "").substring(0, 100),
  };
}

function getBlogList() {
  const publicDir = path.join(process.cwd(), "_posts");
  let mdListPath = filteFileMdList(publicDir);
  const _add = [];

  for (let i = 0; i < mdListPath.length; i++) {
    const mdPath = mdListPath[i];
    let matterResult = convertMdToHtml(mdPath);
    _add.push(matterResult);
  }
  _add.sort((a, b) => {
    return b.timesStamp - a.timesStamp;
  });

  return _add;
}

module.exports = { getBlogList };
