/* ═══════════════════════════════════════════════════
   narrative.js
   日常叙述文案，供 buildDayNarrative() 使用。
   修改文案直接改这个文件，不需要动 index.html。

   line(cls, text) 由 index.html 全局定义，这里直接调用。
═══════════════════════════════════════════════════ */

/* ── 特殊节点 ─────────────────────────────────── */

function narrativeDay1() {
  let h = '';
  h += line('npc-narrator', '三月的第一天。你在这家公司已经两年了，工位还是那个工位，马克杯还是那个马克杯。');
  h += line('npc-narrator', '只是上个月刚走了两个人。据说还有一轮考核。');
  h += line('npc-narrator', '你把那副眼镜压在口袋最深处，打开电脑，登上钉钉，假装什么都没发生过。');
  h += line('npc-mentor', 'Mentor刚好路过你工位，把保温杯顺手搁在桌上，压低声音："一会大老板要过来开会，稍微注意一点哦。"');
  return h;
}

function narrativeDay5() {
  let h = '';
  h += line('npc-narrator', '第一周结束了。你还在。');
  h += line('npc-narrator', 'HR下午找了一个设计师谈话，谈完那人直接回座位收了桌上的东西。');
  h += line('npc-narrator', '你低着头盯着屏幕，假装在改稿。整个下午没人说话。');
  h += line('npc-colleague', '下班路上，顺路的同事在地铁上打了个哈欠："这周熬过来了，周五晚上去楼下那家串串坐坐？"');
  h += line('npc-self', '你说好，但你们都知道多半没去成。');
  return h;
}

function narrativeDay30() {
  let h = '';
  h += line('npc-narrator', '第一个月过去了。行业的新闻越来越难看，但组里没有人提，大家都在低头做事。');
  h += line('npc-leader', '领导在月会上一目十行地浏览着数据："最近数据上整体中规中矩。大环境如何也不用我说。个人来讲，我不想看到任何一个人被淘汰，但我同时也必须考虑公司的利益。因此，我会以身作则，也希望你们能尽快跟上节奏。"');
  h += line('npc-narrator', '他扫视了一圈，你感觉目光似乎在你身上顿了顿，然后移开了。');
  h += line('npc-mentor', 'Mentor在会后慢腾腾地收拾文件，将抽出来的椅子挨个推回原位："……淘汰啊……最近整个行业变动还真快。"');
  h += line('npc-self', '你点点头。Mentor没再说话，拿起保温杯出去了。');
  return h;
}

function narrativeDay60() {
  let h = '';
  h += line('npc-narrator', '两个月了。公司官网悄悄撤掉了招聘页面，大家心里都明白是什么意思。');
  h += line('npc-mentor', 'Mentor依然慢腾腾地泡着茶："最近感觉怎么样？"');
  h += line('npc-self', '你："还行。"');
  h += line('npc-narrator', 'Mentor沉默了一下，把茶叶拨了拨，没再追问。“咱们小组的业绩不太好啊……”你听到了他微弱的叹气声。');
  return h;
}

/* ── 低业绩触发 ──────────────────────────────── */

function narrativeLowPerfWeekend() {
  let h = '';
  h += line('npc-narrator', '周末，但业绩的数字还是在脑子里转。你知道上次垫底的人已经走了。');
  h += line('npc-narrator', '你翻了翻手机，又放下了。没什么好刷的，刷到最后也是焦虑。');
  return h;
}

function narrativeLowPerfWeekday() {
  let h = '';
  h += line('npc-narrator', '业绩不好看。这件事你心里有数，不用别人提醒。');
  h += line('npc-mentor', 'Mentor皱着眉，把你的稿子推过来："这版估计还是过不了，我们一起再看看吧。抱歉，我好像也教不了你什么……"');
  h += line('npc-narrator', '他说这话的语气带着关切和担忧，以及明知自己帮不上忙的羞愧。');
  return h;
}

/* ── 低心态触发 ──────────────────────────────── */

function narrativeLowSanityWeekend() {
  let h = '';
  h += line('npc-narrator', '休息了，但没有真的休息到。脑子里的神经不知道为什么一直紧绷着。');
  h += line('npc-narrator', '你随手翻了翻以前的设计稿，看了一会儿，关掉了。没什么好看的，真是平庸到可悲的作品。说起来，你为什么会想要去看那个呢？');
  return h;
}

function narrativeLowSanityWeekday() {
  let h = '';
  h += line('npc-narrator', '对着稿子发了一段时间的呆，脑子空着，也不知道在想什么。');
  h += line('npc-narrator', '你想不起来上次真心想做一个东西是什么时候了。可能是入职前，可能更早。');
  return h;
}

/* ── 高依赖触发 ──────────────────────────────── */

function narrativeHighDepWeekend() {
  let h = '';
  h += line('npc-narrator', '今天没有拿出那副眼镜。你坐下来想画点什么，又不知道从哪里开始，随便画了两笔，删掉了。');
  h += line('npc-narrator', '你盯着空白的画板，意识到你在等那副眼镜告诉你该画什么。');
  return h;
}

function narrativeHighDepWeekday() {
  let h = '';
  h += line('npc-narrator', '不戴它，对着空白的画板，你发现自己找不到入口了。');
  h += line('npc-narrator', '你试着回想以前是怎么开始的，想不起来。');
  h += line('npc-mentor', 'Mentor路过，停了一下，看了看你的屏幕，随口关心了一句："你最近是视力不太好吗，要注意休息啊。"');
  h += line('npc-narrator', '他没等你回答，端着杯子走了。这个问题一整天都跟着你。');
  return h;
}

/* ── 普通周末 flavor ──────────────────────────── */

const WEEKEND_FLAVORS = [
  () => line('npc-narrator', '今天不用上班。睡到九点多，窗帘没拉严，一条光斜在被子上。你盯着天花板发了一会儿呆，想起还有个需求文档没看完。'),
  () => line('npc-narrator', '周末的街道比平时安静。楼下有人在跑步，你站在阳台上喝了杯水，没出门，但总算透了口气。'),
  () => line('npc-narrator', '打开手机，第一个看的还是工作群。消息不多，你退出来，把手机翻过去扣在桌上，坚持了十分钟，又翻过来看了一眼。'),
  () => line('npc-narrator', '难得的空白，但脑子那根弦还是绷着，一时松不下来。你倒了杯咖啡，坐在那里，什么也没做，就这么坐了一会儿。'),
  () => line('npc-narrator', '翻出一本很久没看的书，看了两页，脑子开始飘。最后把书放回去，去厨房热了包饭，吃的时候看了会儿手机。'),
  () => line('npc-narrator', '外面偶尔有风，天气还不错。你没出门，但拉开了窗户，听了一会儿楼下的声音，不知道在等什么。'),
  () => line('npc-narrator', '周末下午总有一种奇怪的空——不是无聊，是某种说不清楚的、不知道该怎么填的东西。你最后开了个视频随便放着，也没在看。'),
];

/* ── 普通工作日 flavor ──────────────────────────── */

const WEEKDAY_FLAVORS = [
  () => line('npc-narrator', '又是普通的一天。咖啡机还是坏的，空调还是太冷，走廊里新贴了一张"降本增效"的海报，字体换了，意思没变。'),

  () => line('npc-colleague', '同事把一份参考图甩过来："这个风格你看行不行，领导说他要这个感觉，但我觉得他说的感觉他自己也不知道是啥。"')
    + line('npc-self', '你接过来看了看，也没太看懂领导的意思，但还是说了句"我试试"。'),

  () => line('npc-narrator', '楼道里有人压着声音在打电话。你大概猜到是什么事，但没有精力在乎别人的事了，低头继续改稿。'),

  () => line('npc-mentor', 'Mentor（端着保温杯路过）："今天任务不少，时间注意卡一下，下周好像有个客户要突访。"')
    + line('npc-self', '你心想，哪个月不是这样。'),

  () => line('npc-narrator', '路过领导工位的时候，他正盯着一张数据表，眉头锁着。你悄悄加快了步伐，假装没看见，他也没抬头。'),

  () => line('npc-colleague', '同事拿着手机，凑过来小声说："听说这季度数字再差，年终奖真没了，你信不信？"')
    + line('npc-self', '你："……不知道。"')
    + line('npc-colleague', '他："我也不知道，但我感觉是真的。"'),

  () => line('npc-narrator', '今天的工作量比想象的多，截止时间比想象的近。你已经不对这件事感到意外了，但还是觉得烦。'),

  () => line('npc-colleague', '同事站到你工位旁边，盯着你屏幕看了一会儿："这稿我觉得过得了，你别改了，改多了反而容易出事。"')
    + line('npc-self', '你看了看，觉得说得有道理，但还是又改了一遍。'),

  () => line('npc-narrator', '今天领导开了个一对一，和旁边工位的同事说了大概二十分钟。出来之后那个同事面色正常，什么都没说。你也没问。'),

  () => line('npc-mentor', 'Mentor把一个茶包放到你旁边："泡着喝，别老对着屏幕，眼睛会受不了的。"')
    + line('npc-narrator', '你道了谢，茶包泡了半天，等到水凉了才想起来喝。'),
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
  } else if (G.day === 60) {
    html += narrativeDay60();
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
