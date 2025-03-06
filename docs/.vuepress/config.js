console.log("[VuePress Config] Base Path:", "/blogs-1.0/");
module.exports = {
    title: 'Carlos的博客',
    description: '每一个日子，都有不进则退的影子',
    theme: 'reco',
    dest: "docs/.vuepress/dist",
    locales: {
        "/": {
            lang: "zh-CN"
        }
    },
    themeConfig: {
        base: '/blogs-1.0/',
        publicPath: "/blogs-1.0/",
        author: "Carlos Xu",
        subSidebar: "auto",
        logo: "avatar.jpg",
        authorAvatar: "avatar.jpg",
        type: "blog",
        nav: [
            { text: "首页", link: "/"},
            {
                text: "我的",
                items: [
                    { text: "掘金",  link: "https://juejin.cn/user/2340232218281054"},
                    { text: "Github",  icon: 'reco-github', link: "https://github.com/CarlosXu-S"},
                    { text: "Gitee", icon: 'reco-gitee', link: "https://gitee.com/CarlosXu-S"}
                ]
            },
            {
                text: "时间轴", link: "/docs/timeLine/", icon: "reco-date"
            }
        ],

        // 博客配置
        blogConfig: {
            category: {
                location: 2, //在导航栏菜单中所占的位置，默认为2
                text: "博客"  // 默认文案“分类”
            },
            tag: {
                location: 4, // 在导航栏菜单中所占的位置，默认为4
                text: "Tag" // 默认文案“标签”
            }

        },

        plugins: [
            [
                "sakura",
                {
                    num: 20, //默认数量
                    show: true, // 是否显示
                    zIndex: -1, // 层级
                    img: {
                        replace: false // false 默认图 true 换图 需要填写httpUrl地址
                    }
                }
            ],
            [
                "cursor-effects",
                {
                  size: 4, // size of the particle, default: 2
                  shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
                  zIndex: 999999999 // z-index property of the canvas, default: 999999999
                },
              ],
           ]
        // sidebar: [
        //     {
        //         title: "欢迎学习",
        //         path: "/",
        //         collapsbale: false, //是否折叠
        //         children: [{ title: "博客简介", path: "/"}],
        //     },
        //     {
        //         title: "基础篇",
        //         path: "/blogs/1",
        //         collapsbale: true,
        //         children: [
        //             { title: "第一篇", path: "/blogs/1" },
        //             { title: "第二篇", path: "/blogs/1" }
        //         ]
        //     }
        // ]
    }
}