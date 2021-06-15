#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
echo 'blog.code-ji.cn' > CNAME
if [ -z "$ACCESS_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:xjw259/blog_xjw.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://xjw259:${ACCESS_TOKEN}@github.com/xjw259/blog_xjw.git
  git config --global user.name "xjw"
  git config --global user.email "1017806562@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl main:gh-pages # 推送到github

# deploy to coding
#echo 'www.xugaoyi.com\nxugaoyi.com' > CNAME  # 自定义域名
#echo 'google.com, pub-7828333725993554, DIRECT, f08c47fec0942fa0' > ads.txt # 谷歌广告相关文件

#if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
#  codingUrl=git@e.coding.net:xgy/xgy.git
#else
#  codingUrl=https://HmuzsGrGQX:${CODING_TOKEN}@e.coding.net/xgy/xgy.git
#fi
#git add -A
#git commit -m "${msg}"
#git push -f $codingUrl main # 推送到coding

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist
