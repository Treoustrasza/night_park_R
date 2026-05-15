/* ═══════════════════════════════════════════════════
   narrative.js
   日常叙述文案，供 buildDayNarrative() 使用。
   修改文案直接改这个文件，不需要动 index.html。

   line(cls, text) 由 index.html 全局定义，这里直接调用。
═══════════════════════════════════════════════════ */

/* ── 特殊节点 ─────────────────────────────────── */

function narrativeDay1() {
  let h = '';
  h += line('npc-narrator', '四月的第一天。你在这家公司已经两年了，还坐在一开始的位置上。没有获得过晋升，加薪也只有普调才轮得到你。');
  h += line('npc-narrator', '上个月刚走了几个人。据说两个月之后还有一轮HC盘点。');
  h += line('npc-narrator', '你把那副眼镜放在胸前的口袋里，打开电脑，登上钉钉。');
  h += line('npc-mentor', 'Mentor刚好路过你工位，留意到你心不在焉的样子，把保温杯顺手搁在桌上，压低声音：“一会大老板要过来开会，稍微注意一点哦。”');
  return h;
}

function narrativeDay5() {
  let h = '';
  h += line('npc-narrator', '第一周结束了。可喜可贺，你的位置还在。');
  h += line('npc-narrator', 'HR下午找了一个设计师谈话，谈完那人直接回座位收了桌上的东西。');
  h += line('npc-narrator', '你低着头盯着屏幕，假装在改稿。整个办公室比平时还要安静，但你知道所有人都在默默地关注那边。');
  h += line('npc-colleague', '关系不错的同事似乎想要打破这种僵硬的气氛，凑过来，刻意摆出情绪高昂的样子：“总算快到周末了，晚上去楼下那家精酿店喝两杯？”');
  h += line('npc-self', '你说太累了，下次吧。你们都知道这个约定多半到此为止了。');
  return h;
}

function narrativeDay30() {
  let h = '';
  h += line('npc-narrator', '第一个月过去了。行业新闻和大盘数据都越来越难看，但组里默契地没人提起，大家都在低头做事。');
  h += line('npc-leader', '领导在月会上一目十行地浏览着报告：“最近大环境如何也不用我说。个人来讲，我不想看到任何一个人被淘汰，但我同时也必须考虑公司的利益。因此，我会以身作则，也希望你们能尽快跟上节奏。”');
  h += line('npc-narrator', '他扫视了一圈，你感觉目光似乎在你身上顿了顿，然后移开了。');
  h += line('npc-mentor', '会后，Mentor慢腾腾地收拾文件，似乎在特地拖延时间一般，将抽出来的椅子挨个推回原位。“……淘汰啊……最近整个行业变动还真快。”路过你身边时，他低声念叨着。');
  h += line('npc-narrator', '你轻声附和。Mentor没再说话，对你疲惫地笑了笑，拿起笔记本和保温杯出去了。注视着其他参会同事挨个离开，你不禁开始胡思乱想，下次大部门例会的时候，哪些人会消失呢。');
  return h;
}

function narrativeDay50() {
  let h = '';
  h += line('npc-narrator', '公司官网悄悄撤掉了招聘页面，大家心里都明白是什么意思。');
  h += line('npc-mentor', 'Mentor依然慢腾腾地泡着茶：“最近感觉怎么样？”');
  h += line('npc-self', '“嗯……还可以吧。”你想说你很累，和新协同方的对接总是不顺利，行业整体转型太快了你跟不上，你很焦虑。但最终你没有说，这不是应该对Mentor讲的内容。');
  h += line('npc-narrator', 'Mentor把茶叶拨了拨，没再追问。“咱们小组的业绩不太好啊……你最近也在外面看看吧，我听到了一些不太好的风声，但具体的我不能说。”他发出轻飘飘的叹气声。');
  return h;
}

/* ── 低业绩触发 ──────────────────────────────── */

function narrativeLowPerfWeekend() {
  let h = '';
  h += line('npc-narrator', '周末，但项目、绩效、招聘、薪资之类的词汇还盘绕在大脑里。你知道上次绩效垫底的人已经走了。');
  h += line('npc-narrator', '你翻了翻手机，又放下了。每一个突然弹出的红点和push消息都只会让你感到焦虑，但你不敢关机。那好像是你和世界唯一的切实联系了。');
  return h;
}

function narrativeLowPerfWeekday() {
  let h = '';
  h += line('npc-narrator', '绩效很难看。把自己锁在厕所隔间里自暴自弃一会之后，你还是回到了工位。是领导觉得你不行吗？还是说，只是因为需要一个人背低绩效呢？');
  h += line('npc-mentor', '钉钉图标闪烁，Mentor发来了一个画满红线的文件：“这版估计还是过不了，我们一起再看看吧。抱歉，我好像也教不了你什么……”');
  h += line('npc-narrator', '文字里带着显而易见的忧虑，以及明知自己帮不上忙的羞愧。你打开Mentor的修改意见，确实太过老派，或者说得难听点，已经过时了。这绝不是老板想要的。');
  return h;
}

/* ── 低心态触发 ──────────────────────────────── */

function narrativeLowSanityWeekend() {
  let h = '';
  h += line('npc-narrator', '难得的休息，但神经一直紧绷着。如果人也有关机按钮就好了，你想。');
  h += line('npc-narrator', '你随手翻了翻以前的设计稿，看了一会儿，关掉了。没什么好看的，真是平庸到可悲的作品。说起来，你为什么会想要去看那个呢？');
  return h;
}

function narrativeLowSanityWeekday() {
  let h = '';
  h += line('npc-narrator', '对着稿子发了一段时间的呆，从脑子里挤出一点东西就加上去，又反复撤回。肩膀痛，头也痛，好想喝冰淇淋红茶。你痛斥自己的怠惰，逼着自己打起精神来。');
  h += line('npc-narrator', '你想不起来上次充满热情地连续创作几个小时是什么时候了。可能是入职前吧，或者更早，就读这个专业以前？把兴趣变成工作也许是个错误的选择。');
  return h;
}

/* ── 高依赖触发 ──────────────────────────────── */

function narrativeHighDepWeekend() {
  let h = '';
  h += line('npc-narrator', '你坐下来想随便画点什么，但很快便开始对自己的作品感到不满。可以称之为稚拙的笔触，僵硬的构图，乱糟糟的草稿，全都让你愈发难以忍受。');
  h += line('npc-narrator', '你不禁开始怀念起戴上眼镜后的那种流畅和轻松。大脑里充满了华丽的构想，只要戴上那个就做得出来，你没来由地坚信这一点。');
  return h;
}

function narrativeHighDepWeekday() {
  let h = '';
  h += line('npc-narrator', '你打开半成品的画布，打算进行修改。你明知道它不够好，它还欠缺什么，这种程度绝对没法交差，但却感到无从下手。');
  h += line('npc-narrator', '你试着回想当时的自己是想表达什么，怎么开始的，可是你想不起来。你低下头，不自觉地隔着布料摩挲口袋里的眼镜。');
  h += line('npc-mentor', 'Mentor路过，停了一下，看着你不自然的动作，随口关心了一句：“你最近是视力不太好吗，要注意休息啊。”');
  h += line('npc-narrator', '他没等你回答，端着杯子走了。');
  return h;
}

/* ── 普通周末 flavor ──────────────────────────── */

const WEEKEND_FLAVORS = [
  () => line('npc-narrator', '今天不用上班，难得奢侈地睡到九点多。一道阳光从密集的高楼之间穿过，暖烘烘地打在你的脸上。你醒了。盯着天花板眨了眨眼，思绪清醒的第一件事却是想起还有个需求文档没看完。'),
  () => line('npc-narrator', '周末的街道比平时安静，周围的社畜也许都还没起床。楼下有个人在跑步，你站在窗边喝了杯咖啡，享受难得的休息时间。'),
  () => line('npc-narrator', '打开手机，第一个看的还是工作群。还好消息不多，你退出来，把手机翻过去扣在桌上，叹了口气瘫在椅子上。十分钟后，又在不安感的催促下翻过来看了一眼。'),
  () => line('npc-narrator', '难得的周末，但思绪已经习惯了这么多年的压力，一时放松不下来。你厌恶着又遵从着优绩主义，一面休息一面又为休息而感到没来源的羞愧。'),
  () => line('npc-narrator', '翻出一本很久没看的书，看了两页，但不太读得进去。最后把书放回去，去厨房拿微波炉热了昨天的剩饭，吃的时候看了会儿手机，打开各个app机械性地刷两下再关上。'),
  () => line('npc-narrator', '外面出太阳了，天气还不错。你没出门，但拉开窗户吹了一会风，杨柳絮立刻像发霉一样糊满了你的纱窗。窗台上有只珠颈斑鸠边鞠躬边咕咕地叫。有另外一个活物让你感觉很好。'),
  () => line('npc-narrator', '虽然是难得的休息时间，但周末下午总有一种奇怪的空虚和不安感。楼下有一群小孩在大声吵闹。你最后开了个视频随便放着听声音，并没有真的在看。'),
];

/* ── 普通工作日 flavor ──────────────────────────── */

const WEEKDAY_FLAVORS = [
  () => line('npc-narrator', '又是普通的一天。领导的办公室里传来咖啡机磨豆子的响声，你知道他也早早地来上班了。打卡闸机旁边贴着喜庆的新年海报，已经有点褪色了但还没揭掉。真不知道行政最近在干什么，你想。'),

  () => line('npc-colleague', '同事甩过来一份参考图：“这个风格你看行不行，领导说他要这个感觉，但我觉得他的需求他自己也不太清楚。”')
    + line('npc-self', '你接过来看了看，也没太看懂领导的意思，但感到不是可以拒绝的氛围，还是说了句“我照着这种做一份试试，不行再改吧。”'),

  () => line('npc-narrator', '楼道里有人压着声音在打电话。你大概猜到是什么事，但没有精力在乎别人的事了，低头继续改稿。'),

  () => line('npc-mentor', 'Mentor显得格外愁眉苦脸：“之前和我们对接的那个产品同学离职了，交接也不太完善，新来的人好像还没上手……辛苦你最近多沟通吧。”')
    + line('npc-self', '你心想，又来，最近两个月协同方已经换个四五个人了。'),

  () => line('npc-narrator', '路过领导工位的时候，他正盯着一份报告，气压很低地皱着眉头。你悄悄加快了步伐，假装没看见，他也没抬头。'),

  () => line('npc-colleague', '同事拿着手机，凑过来小声说：“听说这季度公司营收再差的话，年终奖要发不出来了，不保真，我有点焦虑。”')
    + line('npc-self', '你点点头，表示自己也听说了。怎么可能不知道呢，这种风声最近到处都是。')
    + line('npc-colleague', '“……我打算出去看看机会。实在不行的话，回老家躺平得了。”他试图显得很洒脱，但最终只是勉强地笑起来。'),

  () => line('npc-narrator', '今天的todo比想象的多。同事又走了一个，走的时候怨气很重，没交接清楚的工作就这样落在你的肩膀上。你已经学会习惯这种事了，但还是难免会觉得烦。'),

  () => line('npc-colleague', '同事笑着凑过来，像金毛大狗一样殷勤地递上一罐冰可乐。你本能地从那个过分灿烂的笑容里嗅到了危机。')
    + line('npc-colleague', '“能帮我做一下这个吗？不急。”')
    + line('npc-self', '“不急是什么时候要？”')
    + line('npc-colleague', '“今天下班之前可以吗？领导急着要。”他嘿嘿笑，虽然是疑问句，但并没有真的要和你商量的意思'),

  () => line('npc-narrator', '今天领导临时把旁边工位的同事叫去oneone，大概二十分钟。出来之后那个同事面色如常，什么都没说。你也没问，这是职场不成文的礼仪和默契。'),

  () => line('npc-mentor', 'Mentor把一个茶包放到你旁边：“泡着喝，别老盯着屏幕，眼睛会受不了的。”')
    + line('npc-narrator', '你道了谢，茶包泡了半天，等到水凉了才想起来喝。好苦。'),
];

/* ── 主函数，供 index.html 调用 ──────────────────── */

function buildDayNarrative() {
  const wk = weekNum(G.day);
  let html = `<div class="npc-narrator" style="color:#aaa;font-style:italic;">── ${monthDay(G.day)} ${dayName(G.day)}，第${wk}周 ──</div>`;

  if (G.day === 1) {
    html += narrativeDay1();
  } else if (G.day === 5) {
    html += narrativeDay5();
  } else if (G.day === 30) {
    html += narrativeDay30();
  } else if (G.day === 50) {
    html += narrativeDay50();
  } else if (G.perf <= 25) {
    html += isWeekend(G.day) ? narrativeLowPerfWeekend() : narrativeLowPerfWeekday();
  } else if (G.sanity <= 25) {
    html += isWeekend(G.day) ? narrativeLowSanityWeekend() : narrativeLowSanityWeekday();
  } else if (G.dep >= 70) {
    html += isWeekend(G.day) ? narrativeHighDepWeekend() : narrativeHighDepWeekday();
  } else if (isWeekend(G.day)) {
    html += WEEKEND_FLAVORS[G.day % WEEKEND_FLAVORS.length]();
  } else {
    html += WEEKDAY_FLAVORS[G.day % WEEKDAY_FLAVORS.length]();
  }

  return html;
}
