(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{447:function(e,o,l){"use strict";l.r(o);var t=l(15),c=Object(t.a)({},(function(){var e=this,o=e.$createElement,l=e._self._c||o;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"docker-学习笔记"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#docker-学习笔记"}},[e._v("#")]),e._v(" Docker 学习笔记")]),e._v(" "),l("h3",{attrs:{id:"命令"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[e._v("#")]),e._v(" 命令")]),e._v(" "),l("h4",{attrs:{id:"镜像"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#镜像"}},[e._v("#")]),e._v(" 镜像")]),e._v(" "),l("ul",[l("li",[l("code",[e._v("docker images")])])]),e._v(" "),l("blockquote",[l("p",[e._v("查看docker中所有的镜像")])]),e._v(" "),l("ul",[l("li",[l("code",[e._v("docker pull [镜像]")])])]),e._v(" "),l("blockquote",[l("p",[e._v("拉取镜像")])]),e._v(" "),l("ul",[l("li",[l("code",[e._v("docker rmi [镜像名]")])])]),e._v(" "),l("blockquote",[l("p",[e._v("删除镜像")])]),e._v(" "),l("h4",{attrs:{id:"容器"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#容器"}},[e._v("#")]),e._v(" 容器")]),e._v(" "),l("ul",[l("li",[l("code",[e._v("docker ps -a")])])]),e._v(" "),l("blockquote",[l("p",[e._v("查看docker中正在运行的容器")])]),e._v(" "),l("ul",[l("li",[l("code",[e._v("docker run <镜像>")])])]),e._v(" "),l("div",{staticClass:"language-shell line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-shell"}},[l("code",[e._v("$ docker run hello-world\n")])]),e._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[e._v("1")]),l("br")])]),l("ul",[l("li",[l("code",[e._v("docker -it <镜像>")])])]),e._v(" "),l("blockquote",[l("p",[e._v("运行一个容器,进入终端交互 ctrl+p q快速回到宿主机")])]),e._v(" "),l("ul",[l("li",[l("code",[e._v("docker exec -it <容器> /bin/bash")])])]),e._v(" "),l("blockquote",[l("p",[e._v("重新开启交互终端进入容器")])]),e._v(" "),l("ul",[l("li",[l("code",[e._v("docker run -it -d <镜像>")])])]),e._v(" "),l("blockquote",[l("p",[e._v("让容器在后台运行")])]),e._v(" "),l("ul",[l("li",[l("code",[e._v("docker run --name <name> <容器>")])])]),e._v(" "),l("blockquote",[l("p",[e._v("为容器命名")])]),e._v(" "),l("ul",[l("li",[l("code",[e._v("docker stop [容器]")])])]),e._v(" "),l("blockquote",[l("p",[e._v("停止容器")])]),e._v(" "),l("ul",[l("li",[l("code",[e._v("docker kill [容器]")])])]),e._v(" "),l("blockquote",[l("p",[e._v("强制停止容器")])]),e._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),l("p",[l("code",[e._v("docker")]),e._v(" 在运行容器后检测到没有任何操作会自动停止容器，可以使用"),l("code",[e._v("docker run -it hello-world")])])]),e._v(" "),l("ul",[l("li",[l("code",[e._v("docker rm [容器名/id/tag]")])])]),e._v(" "),l("blockquote",[l("p",[e._v("删除容器")])]),e._v(" "),l("ul",[l("li",[l("code",[e._v("docker rm $(docker ps -qa)")])])]),e._v(" "),l("blockquote",[l("p",[e._v("批量删除容器")])])])}),[],!1,null,null,null);o.default=c.exports}}]);