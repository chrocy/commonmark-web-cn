
export interface TutorialStep {
    id: string; // e.g. "1-1"
    instructionKey: string;
    initialText: string;
    correctMarkdown: string;
}

export const tutorialData: Record<string, TutorialStep> = {
    "1-1": {
        id: "1-1",
        instructionKey: "ex_1_1_instruction",
        initialText: "蕾哈娜 (Rihanna) 的歌曲 American Oxygen 描绘了美国历史上的各种时刻，包括巴拉克·奥巴马 (Barack Obama) 的就职典礼。",
        correctMarkdown: "蕾哈娜 (Rihanna) 的歌曲 **American Oxygen** 描绘了美国历史上的各种时刻，包括巴拉克·奥巴马 (Barack Obama) 的就职典礼。"
    },
    "1-2": {
        id: "1-2",
        instructionKey: "ex_1_2_instruction",
        initialText: "为什么呢，有时候我在早餐前就相信了多达六件不可能的事。",
        correctMarkdown: "为什么呢，有时候我在早餐前就相信了多达 *六件* 不可能的事。"
    },
    "1-3": {
        id: "1-3",
        instructionKey: "ex_1_3_instruction",
        initialText: "所有人今天五点都必须参加会议。",
        correctMarkdown: "**所有人今天五点都 *必须* 参加会议。**"
    },
    "1-4": {
        id: "1-4",
        instructionKey: "ex_1_4_instruction",
        initialText: "我简直太棒了！*\n\n* 对于某些非常小的“棒”的定义而言",
        correctMarkdown: "我简直太棒了！*\n\n\\* 对于某些非常小的“棒”的定义而言"
    },
    "2-1": {
        id: "2-1",
        instructionKey: "ex_2_1_instruction",
        initialText: "港口上方的天空色调就像是调到了一个死频道的电视机。那是四月里一个晴朗而寒冷的日子，时钟正敲响十三点。",
        correctMarkdown: "港口上方的天空色调就像是调到了一个死频道的电视机。\n\n那是四月里一个晴朗而寒冷的日子，时钟正敲响十三点。"
    },
    "2-2": {
        id: "2-2",
        instructionKey: "ex_2_2_instruction",
        initialText: "我吃掉了\n那些李子\n它们就在\n冰箱里",
        correctMarkdown: "我吃掉了\\\n那些李子\\\n它们就在\\\n冰箱里"
    },
    "3-1": {
        id: "3-1",
        instructionKey: "ex_3_1_instruction",
        initialText: "第一章\n房间里的某些东西让他感到不安。\n第二章\n它就在你身后！快，在它……之前。",
        correctMarkdown: "## 第一章\n房间里的某些东西让他感到不安。\n## 第二章\n它就在你身后！快，在它……之前。"
    },
    "3-2": {
        id: "3-2",
        instructionKey: "ex_3_2_instruction",
        initialText: "宇宙大爆炸之后\n时间的简短总结\n地球上的生命\n100 亿年\n正在阅读这段话的你\n137 亿年",
        correctMarkdown: "# 宇宙大爆炸之后\n时间的简短总结\n## 地球上的生命\n100 亿年\n## 正在阅读这段话的你\n137 亿年"
    },
    "4-1": {
        id: "4-1",
        instructionKey: "ex_4_1_instruction",
        initialText: "引用如下：\n\n在某处，某些不可思议的事情正等待被知晓。\n\n这句话通常被认为是卡尔·萨根 (Carl Sagan) 说的。",
        correctMarkdown: "引用如下：\n\n> 在某处，某些不可思议的事情正等待被知晓。\n\n这句话通常被认为是卡尔·萨根 (Carl Sagan) 说的。"
    },
    "4-2": {
        id: "4-2",
        instructionKey: "ex_4_2_instruction",
        initialText: "我最喜欢的《礼仪小姐》语录：\n\n允许一个无关紧要的错误不经评论就过去，是一种极好的社交风度。\n\n思想分歧不能成为粗鲁的借口。",
        correctMarkdown: "我最喜欢的《礼仪小姐》语录：\n\n> 允许一个无关紧要的错误不经评论就过去，是一种极好的社交风度。\n>\n> 思想分歧不能成为粗鲁的借口。"
    },
    "5-1": {
        id: "5-1",
        instructionKey: "ex_5_1_instruction",
        initialText: "面粉\n奶酪\n番茄",
        correctMarkdown: "- 面粉\n- 奶酪\n- 番茄"
    },
    "5-2": {
        id: "5-2",
        instructionKey: "ex_5_2_instruction",
        initialText: "改善睡眠的四个步骤：\n坚持睡眠时间表\n创造睡前仪式\n保持舒适\n管理压力",
        correctMarkdown: "改善睡眠的四个步骤：\n1. 坚持睡眠时间表\n2. 创造睡前仪式\n3. 保持舒适\n4. 管理压力"
    },
    "5-3": {
        id: "5-3",
        instructionKey: "ex_5_3_instruction",
        initialText: "1986. 那是一个伟大的赛季。可以说是该队历史上最精彩的一个赛季。",
        correctMarkdown: "1986\\. 那是一个伟大的赛季。可以说是该队历史上最精彩的一个赛季。"
    },
    "6-1": {
        id: "6-1",
        instructionKey: "ex_6_1_instruction",
        initialText: "你可以在 https://chrocy.cc.cd 学到很多",
        correctMarkdown: "你可以在 <https://chrocy.cc.cd> 学到很多"
    },
    "6-2": {
        id: "6-2",
        instructionKey: "ex_6_2_instruction",
        initialText: "卢旺达大学成立于 2013 年，由卢旺达的七个公共高等教育机构合并而成。",
        correctMarkdown: "[卢旺达大学](http://www.ur.ac.rw) 成立于 2013 年，由卢旺达的七个公共高等教育机构合并而成。"
    },
    "6-3": {
        id: "6-3",
        instructionKey: "ex_6_3_instruction",
        initialText: "飓风埃里卡是 1997 年大西洋飓风季中强度最大、持续时间最长的热带气旋。",
        correctMarkdown: "[飓风][1] 埃里卡是 1997 年大西洋 [飓风][1] 季中强度最大、持续时间最长的热带气旋。\n\n[1]: https://w.wiki/qYn"
    },
    "7-1": {
        id: "7-1",
        instructionKey: "ex_7_1_instruction",
        initialText: "https://chrocy.cc.cd/logo.svg",
        correctMarkdown: "![](https://chrocy.cc.cd/logo.svg)"
    },
    "7-2": {
        id: "7-2",
        instructionKey: "ex_7_2_instruction",
        initialText: "![][1]\n\n[1]: \nhttps://chrocy.cc.cd/logo.svg",
        correctMarkdown: "![Logo][1]\n\n[1]: \nhttps://chrocy.cc.cd/logo.svg \n\"Chrocy Markdown\""
    },
    "8-1": {
        id: "8-1",
        instructionKey: "ex_8_1_instruction",
        initialText: "当 x = 3 时，意味着 x + 2 = 5",
        correctMarkdown: "当 `x = 3` 时，意味着 `x + 2 = 5`"
    },
    "8-2": {
        id: "8-2",
        instructionKey: "ex_8_2_instruction",
        initialText: "本周谁吃的甜甜圈最多？\n\n小杰  15\n小明  11\n小红   6",
        correctMarkdown: "本周谁吃的甜甜圈最多？\n\n    小杰  15\n    小明  11\n    小红   6"
    },
    "8-3": {
        id: "8-3",
        instructionKey: "ex_8_3_instruction",
        initialText: "JavaScript 中的循环：\n\nvar i;\nfor (i=0; i<5; i++) {\n  console.log(i);\n}\n\n这段代码会打印什么数字？",
        correctMarkdown: "JavaScript 中的循环：\n```\nvar i;\nfor (i=0; i<5; i++) {\n  console.log(i);\n}\n```\n这段代码会打印什么数字？"
    },
    "9-1": {
        id: "9-1",
        instructionKey: "ex_9_1_instruction",
        initialText: "水果\n苹果\n橙子\n香蕉\n乳制品\n牛奶\n奶酪",
        correctMarkdown: "* 水果\n  * 苹果\n  * 橙子\n  * 香蕉\n* 乳制品\n  * 牛奶\n  * 奶酪"
    },
    "9-2": {
        id: "9-2",
        instructionKey: "ex_9_2_instruction",
        initialText: "+ 2014 年世界杯\n德国\n阿根廷\n荷兰\n+ 2015 年橄榄球世界杯\n新西兰\n澳大利亚\n南非",
        correctMarkdown: "+ 2014 年世界杯\n  1. 德国\n  2. 阿根廷\n  3. 荷兰\n+ 2015 年橄榄球世界杯\n  1. 新西兰\n  2. 澳大利亚\n  3. 南非"
    },
    "9-3": {
        id: "9-3",
        instructionKey: "ex_9_3_instruction",
        initialText: "1. 食材\n\n- 意大利面\n- 意式番茄酱\n- 盐\n\n2. 烹饪\n\n将水烧开，加入一小撮盐和意大利面。煮至面条**变软**。\n\n3. 享用\n\n将面条沥干平铺在盘子里。加入热好的酱汁。\n\n> 吃意大利面时没有人会感到孤独；它需要非常专注。\n\n祝你好胃口！",
        correctMarkdown: "1. 食材\n\n    - 意大利面\n    - 意式番茄酱\n    - 盐\n\n2. 烹饪\n\n   将水烧开，加入一小撮盐和意大利面。煮至面条**变软**。\n\n3. 享用\n\n   将面条沥干平铺在盘子里。加入热好的酱汁。\n\n   > 吃意大利面时没有人会感到孤独；它需要非常专注。\n\n   祝你好胃口！"
    }
};
