/* ═══════════════════════════════════════════════════
   随机事件数据
   每个选项结构：
   {
     label: '处理方式文案（不提眼镜）',
     normalPerf, normalSanity, normalRep, normalDep,  // 不戴眼镜
     glassPerf,  glassSanity,  glassRep,  glassDep,   // 戴眼镜（dep 在结算时减半）
     normalText: '不戴眼镜时的叙述',
     glassText:  '戴眼镜时的叙述',
   }
═══════════════════════════════════════════════════ */

const EVENTS = [
  {
    id: 'pitch_fail', title: '提案翻车', weekdayOnly: true, week: [1,2],
    desc: '领导突然把你叫进会议室，当着几个大客户的面，要求你现场讲解你上周交的提案。这种场面你见过，但今天你突然发现自己连自己写了什么都没理清楚。领导的眼神越来越冷，你知道这个客户很重要——公司正在缺单子的时候。',
    choices: [
      {
        label: '硬撑，尽量把记得的讲清楚',
        normalPerf: -6, normalSanity: -8, normalRep: -3, normalDep: 0,
        glassPerf:  +5, glassSanity:  +2, glassRep:  +4, glassDep:  +12,
        normalText: '你磕磕绊绊地讲完了，客户没被说服，领导会后低声说："你做了两年了，这个状态不行。"但你没有倒下。你记下来了，下次不能这样。',
        glassText:  '眼镜滑上鼻梁，你忽然口若悬河，把整个方案讲得条理清晰，客户频频点头。领导的表情松动了。散会后mentor把你拉到角落，小声说："……你今天哪来的这个状态？跟平时不一样。"',
      },
      {
        label: '承认准备不足，请求改期再讲',
        normalPerf: -3, normalSanity: -4, normalRep: +2, normalDep: 0,
        glassPerf:  -1, glassSanity:  -2, glassRep:  +4, glassDep:  +4,
        normalText: '你说："这个方案我需要重新梳理，现在讲对客户不公平。"领导皱了眉，但客户反而点了点头："能说出这话，说明你对自己的东西是有要求的。"改期了，压力没消，但你没说谎。',
        glassText:  '眼镜让你的措辞得体而不失礼，领导虽然不高兴，客户却说"我们等"。你清醒地知道：这次用眼镜争来的缓冲，下次要用真实的东西填上。',
      },
    ],
  },

  {
    id: 'colleague_conflict', title: '同事抢功', weekdayOnly: true, week: [1,2,3],
    desc: '你花了三天做的方案被同事在全组会议上当成"我们一起讨论的结果"提交了上去，领导当场表扬了他。你就坐在旁边，没人提你的名字。不是第一次了——但今年大家都在争表现，谁都想留下来。',
    choices: [
      {
        label: '当场说明情况',
        normalPerf: 0,  normalSanity: -5, normalRep: +3, normalDep: 0,
        glassPerf:  +2, glassSanity:  -2, glassRep:  +6, glassDep:  +8,
        normalText: '你开口，声音有点抖，但你说清楚了哪些是你做的。领导抬头看了你一眼，会议室安静了几秒。同事脸色很难看，但你觉得，那几秒钟的沉默是值得的。',
        glassText:  '眼镜让你措辞得体、不卑不亢，你简短说明了设计细节，领导抬头看了你一眼："哦，是你做的？"同事脸色一变。你赢了这一局，但你知道他从此会更用心地挑你的毛病。',
      },
      {
        label: '忍了，私下找mentor聊',
        normalPerf: 0,  normalSanity: -7, normalRep: 0,  normalDep: 0,
        glassPerf:  0,  glassSanity:  -4, glassRep:  +1, glassDep:  +3,
        normalText: 'Mentor听完叹了口气："这种事……在这个时候，忍比闹强。注意留证据。"你心里堵着一口气，但你知道他说的是对的。现在不是正面冲突的时候。',
        glassText:  '眼镜让你在向mentor复述的时候显得更冷静、更清晰，他反而多问了几句，帮你想了个后续跟进的法子。戴眼镜的你处理情绪的效率更高，但你不确定那个"冷静"是不是真的你。',
      },
    ],
  },

  {
    id: 'leader_review', title: '领导突击检查', weekdayOnly: true, week: [2,3,4,5,6],
    desc: '领导拿着你最近几周的提交记录，坐到你工位旁边，沉默了几秒后开口："讲讲你的设计思路。"你知道这不是随便问问——行业不好做，他在评估每个人的价值。',
    choices: [
      {
        label: '据实回答，诚实说有些地方不确定',
        normalPerf: -4, normalSanity: +2, normalRep: +3, normalDep: 0,
        glassPerf:  -1, glassSanity:  +1, glassRep:  +4, glassDep:  +5,
        normalText: '"我觉得配色参考了这个，但效果不太确定……"领导看了你一会儿，说："能说出自己不确定的地方，说明还在想。回去把这部分重做。"扣了业绩，但他没有失望地离开。',
        glassText:  '眼镜让你表达更流畅，但你依然说出了那句"我不确定"。领导沉吟片刻："这个回答比我想的诚实。"你感觉他对你的看法变了一点点——往好的方向。',
      },
      {
        label: '侃侃而谈，展示设计逻辑',
        normalPerf: +1, normalSanity: -1, normalRep: +1, normalDep: 0,
        glassPerf:  +4, glassSanity:  0,  glassRep:  +2, glassDep:  +10,
        normalText: '你尽量流利地讲了，有些地方卡壳，有些地方讲得还可以。领导没有明显表扬，也没批评，只说"继续保持"就走了。你猜不准他满不满意。',
        glassText:  '你流利地拆解每一个设计决策，连用色心理学都信手拈来。领导沉默了更长时间，然后说："说得不错。"但他看你的眼神，比之前更锐利了——像是在确认他刚才听到的是不是真的你。',
      },
    ],
  },

  {
    id: 'crunch_project', title: '紧急项目压下来', weekdayOnly: true, week: [2,3,4,5,6,7,8],
    desc: '大客户临时要求三天内出一套完整VI方案，按理应该两周做的事。领导把任务直接甩给了你和同事。同事当场说："这不合理，这就是在逼人走。"然后被领导叫去单独谈话，出来后就直接收拾东西离职了。你独自坐在工位前，盯着需求文档，知道这件事现在全压在你身上。',
    choices: [
      {
        label: '咬牙硬做，全力冲刺',
        normalPerf: +6,  normalSanity: -12, normalRep: +4, normalDep: 0,
        glassPerf:  +14, glassSanity:  -4,  glassRep:  +7, glassDep:  +15,
        normalText: '三天，几乎没睡，方案粗糙但交上去了。领导说"基本能用"，客户接受了。你感觉右眼皮在跳，但你撑过来了，而且那些东西是你做的，你站得住。',
        glassText:  '眼镜让你进入一种近乎超人的状态，三天出了一套专业水准的VI。领导在全组会议上表扬了你，说"这才是老员工应有的担当"。但你盯着那份稿子，心里有个声音在问：没有眼镜，我还做得出来吗？',
      },
      {
        label: '跟领导谈判，争取更合理的时间',
        normalPerf: 0,  normalSanity: -5, normalRep: +2, normalDep: 0,
        glassPerf:  +3, glassSanity:  -3, glassRep:  +4, glassDep:  +6,
        normalText: '你说："三天出VI不可能保证质量，这对客户也不公平。我需要五天。"领导皱眉，但最终给了你四天半。方案交出去了，不完美，但你没有用透支换来的。',
        glassText:  '眼镜让你的谈判有据可依、不卑不亢，领导盯着你看了一会儿，给了五天。出来后你意识到，平时的你大概直接低头接了——你不知道该为这次"争取"感到高兴，还是有点不安。',
      },
    ],
  },

  {
    id: 'mentor_advice', title: 'Mentor找你谈话', weekdayOnly: true, week: [2,3,4,5,6,7,8],
    desc: 'Mentor叫你去喝咖啡，欲言又止了半天，最后说："我想跟你说一件事，但不知道怎么开口。"他停了停，"你最近有些东西……我说不清楚，但感觉不太对。你还好吗？"',
    choices: [
      {
        label: '说没事，一笑而过',
        normalPerf: 0, normalSanity: 0,  normalRep: 0,  normalDep: 0,
        glassPerf:  0, glassSanity:  +2, glassRep:  -1, glassDep:  +4,
        normalText: '"可能最近大环境压力大，状态有点波动。"你接过咖啡杯，把话题带走了。Mentor点了点头，眼神里有些你没读出来的东西——担心，或者遗憾，你分不清。',
        glassText:  '眼镜让你讲得云淡风轻，表情也很自然。Mentor看着你，沉默了一秒，然后点点头说"好"。但你看到他喝咖啡的时候一直没抬眼。那个沉默让你有点不安。',
      },
      {
        label: '说了一些真实的状态',
        normalPerf: 0, normalSanity: +4, normalRep: +2, normalDep: 0,
        glassPerf:  0, glassSanity:  +2, glassRep:  +1, glassDep:  +6,
        normalText: '你说了一些真的，关于有时候不知道从哪里开始，关于有时候觉得自己在原地。Mentor听得很认真，说："能说出来就好。"你们聊了很久，离开的时候轻了一点点。',
        glassText:  '眼镜让你的表达有条有理，但说着说着你意识到，你在"汇报状态"而不是"说心里话"。Mentor听完点头，你猜不准他信了多少——你自己也不太确定刚才说的哪些是真的。',
      },
    ],
  },

  {
    id: 'industry_talk', title: '行业交流会', week: [3,4,5,6,7],
    desc: '公司难得送你去参加一个行业设计交流会。现场挤满了同样焦虑的设计师，大家都在看谁还活着、活得怎么样。问答环节主持人突然点你的名，问你对行业当前趋势的看法。全场安静，都在等你开口。',
    choices: [
      {
        label: '讲自己真实的感受和判断',
        normalPerf: 0, normalSanity: +3, normalRep: +5, normalDep: 0,
        glassPerf:  0, glassSanity:  +1, glassRep:  +6, glassDep:  +8,
        normalText: '你说了一些不够光鲜的实话——行业在收缩，但真正有沉淀的东西还是有市场的。台下反应平淡，但回来后有个设计师找到你，说"你说的那个点，我做了五年才想到，你才几年？"',
        glassText:  '眼镜让你说得更自信，你的真实判断包裹在一层流畅的表达里，听起来比平时有力多了。有人来要名片，说"你的角度很独到"。你回家后想了很久，不确定那个角度到底是不是平时的你能想到的。',
      },
      {
        label: '给一个符合期待的"标准答案"',
        normalPerf: 0, normalSanity: -2, normalRep: +3, normalDep: 0,
        glassPerf:  0, glassSanity:  -3, glassRep:  +8, glassDep:  +12,
        normalText: '你说了一些行业里常见的论调，引了几个案例，台下礼貌性地点头。没有人来找你，也没有人质疑你。你在回程的地铁上感到一种轻微的空洞。',
        glassText:  '你出口成章，引经据典，台下响起掌声。会后有人来要名片，说"你讲得比很多做了十年的人清晰"。但走出会场，你摘掉眼镜，努力回忆刚才自己说了什么——什么都想不起来了。那些话，不是你的。',
      },
    ],
  },

  {
    id: 'boss_private', title: '领导的私下质疑', weekdayOnly: true, week: [5,6,7,8,9,10,11,12],
    desc: '领导把你叫到走廊上，没有录音，没有证人。他直视着你，声音压低了很多："你在这里做了两年，我记得你刚来的样子。你最近的输出……我有时候觉得很好，有时候又觉得完全是两个人做的。你在做什么？"',
    choices: [
      {
        label: '坦然回应，承认状态不稳定',
        normalPerf: -2, normalSanity: -3, normalRep: +5, normalDep: 0,
        glassPerf:  -1, glassSanity:  -5, glassRep:  +3, glassDep:  +5,
        normalText: '领导沉默了很长时间。"不稳定就是不稳定。现在这个情况，我需要的是能站在成果背后的人，不是偶尔发挥好的人。"他转身离开，但你感觉他是在认真听的——他没有用这个否定你。',
        glassText:  '你说得诚实，但眼镜让你的语气异常平稳，领导看着你，皱起眉："你说的和你的状态不像同一个人。"他走了，你站在走廊里，意识到你刚才的"坦然"反而让他更不信任你了。',
      },
      {
        label: '给出一套解释，把话圆回去',
        normalPerf: 0,  normalSanity: -2, normalRep: +1, normalDep: 0,
        glassPerf:  0,  glassSanity:  -8, glassRep:  0,  glassDep:  +14,
        normalText: '你努力把话说圆，但有几处停顿，逻辑接得不太上。领导听完，说了句"行吧"，表情很难读。你猜不准他信没信，但至少他离开了。',
        glassText:  '眼镜让你的解释天衣无缝，逻辑完整，甚至反过来让领导觉得自己可能想多了。他离开时若有所思。但你站在走廊里发现，你刚才对他撒谎了，而且撒得那么流利，那么自然——你已经说不清楚什么是真的了。',
      },
    ],
  },

  {
    id: 'colleague_breakdown', title: '同事的愤怒', weekdayOnly: true, week: [4,5,6,7,8,9,10],
    desc: '同事因为项目被否，在茶水间摔了马克杯。他骂了很多话，最后转向你大喊："你最近风头那么正——大家都知道你走了捷径，你不觉得亏心吗？！"茶水间静得落针可闻。你知道他这段时间一直活在被裁的恐惧里，但他说的那句话……刺到你了。',
    choices: [
      {
        label: '冷静说明，不激化矛盾',
        normalPerf: 0, normalSanity: -4, normalRep: +3, normalDep: 0,
        glassPerf:  0, glassSanity:  -2, glassRep:  +5, glassDep:  +8,
        normalText: '你说："我不知道你说的捷径是什么。"然后离开了。同事下午主动来道歉，说他最近压力太大。你说没事，但那句"走捷径"还是留在脑子里。',
        glassText:  '眼镜让你口齿清晰、不带情绪，你帮他拆解了被否的真正原因，甚至给了他改进建议。同事愣了很久，说："……你变了好多。你两年前不是这样的。"你没有回答。',
      },
      {
        label: '直接走开，不解释',
        normalPerf: 0,  normalSanity: -6, normalRep: -1, normalDep: 0,
        glassPerf:  0,  glassSanity:  -4, glassRep:  0,  glassDep:  +3,
        normalText: '你什么都没说，把杯子放下，离开了茶水间。那句话一整天都在脑子里转。下班后你在地铁里想，也许你应该说点什么——但你不知道说什么。',
        glassText:  '眼镜让你的背影看起来很稳，旁观的同事可能以为你是在保持风度。但你知道你只是在逃。眼镜帮你维持了表面，帮不了里面那口气。',
      },
    ],
  },

  {
    id: 'project_stolen_credit', title: '作品被人冒用', week: [6,7,8,9,10,11,12],
    desc: '你在一个设计论坛上发现了一套熟悉的配色方案——那是你上个月交的稿，现在以某家公司的名义挂在上面。被人截图放到了更大的平台转发，下面写着"新锐设计风格"。你盯着屏幕，不知道自己该不该愤怒。',
    choices: [
      {
        label: '不管它，关掉页面继续做自己的',
        normalPerf: 0, normalSanity: -5, normalRep: 0,  normalDep: 0,
        glassPerf:  0, glassSanity:  -3, glassRep:  +1, glassDep:  +3,
        normalText: '你看了很久，把页面关掉了。你经历过各种被压低的事，但这次不一样——因为你不确定，那些东西，到底算不算是你的创作。这个问题没有答案，你只能把它压下去。',
        glassText:  '眼镜让你平静地关掉了页面，脑子里甚至开始分析"这种事的处理成本收益"。你觉得自己很理性，但那天夜里你做了个梦，梦里你的手画不出任何东西。',
      },
      {
        label: '撰文声明，公开维权',
        normalPerf: 0, normalSanity: -3, normalRep: +4, normalDep: 0,
        glassPerf:  0, glassSanity:  -2, glassRep:  +6, glassDep:  +10,
        normalText: '你写了一篇声明，词不够华丽但说清楚了事实。转发量不多，但对方道歉了。有人评论说"这个设计师挺有原则的"——你看到这条评论，感觉比转发量更重要。',
        glassText:  '在眼镜辅助下你写了一篇措辞严谨的声明，转发量不少，最后对方致歉。但评论区有人说："这篇声明写得比ta作品集里其他文章都好，感觉不像同一个人写的。"你注意到这句话，然后默默把评论区关掉了。',
      },
    ],
  },

  {
    id: 'final_review', title: '季度考核', weekdayOnly: true, week: [10,11,12],
    desc: '公司进行季度考核。领导要求每人做五分钟汇报，当场问答。HR提前在会议室门口摆了签到表，气氛和以往不一样。这是年末最重要的一环，关系到你还能不能继续待在这里。',
    choices: [
      {
        label: '用真实积累做汇报',
        normalPerf: +5, normalSanity: +5, normalRep: +8,  normalDep: 0,
        glassPerf:  +7, glassSanity:  +2, glassRep:  +6,  glassDep:  +10,
        normalText: '你的汇报不华丽，但诚实。有几个回答不够完美，但每一句话都是你能站在背后负责的。领导最后说："两年的东西，讲清楚了。"评级不最高，但名字没出现在末位名单里。',
        glassText:  '眼镜让你的真实积累呈现得更完整、更清晰，领导点头的次数比你预期的多。但散会后你想了很久：那个"更好的表达"，有多少是你，有多少是它？',
      },
      {
        label: '全力呈现最好状态',
        normalPerf: +3, normalSanity: -3, normalRep: +4,  normalDep: 0,
        glassPerf:  +10,glassSanity:  -5, glassRep:  +3,  glassDep:  +16,
        normalText: '你绷紧了讲，有的地方超常发挥，有的地方明显露怯。总体说得过去，领导没有当场点评，只说"不错"。你猜不准那个"不错"意味着什么。',
        glassText:  '完美的汇报，完美的回答。领导当场点头，几个同事愣了。但下班后mentor把你拉到一边，轻声问："你汇报的时候……那些回答，是你在说，还是……"他没说完，你也没接话。你们都明白他想说什么。',
      },
    ],
  },
];
