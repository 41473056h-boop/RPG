// ============================================
//  GAME DATA — Phase 1: 大學宿營趣
//  All dialogue updated per user spec
// ============================================

// Handbook job descriptions
const HANDBOOK_DATA = [
    {
        id: 'K',
        title: '總籌',
        fullTitle: '總籌（總召集人）',
        avatar: null,
        alwaysShow: false,
        desc: [
            '統籌與進度控管：負責整體營隊規劃、時程進度掌控，並監督引導各股別之工作執行。',
            '對外協商與合約簽署：代表營隊團隊與場地方（農場主人）溝通合作細節、簽署合作契約與確認安全規範。',
            '決策與危機處置：處理跨組別爭議、重大預算異動，以及營期中各項突發狀況之最終裁決。'
        ]
    },
    {
        id: 'A',
        title: '副籌',
        fullTitle: '副籌（副召集人）',
        avatar: 'npc_a.png',
        alwaysShow: false,
        desc: [
            '統籌與進度控管：負責整體營隊規劃、時程進度掌控，並監督引導各股別之工作執行。',
            '對外協商與合約簽署：代表營隊團隊與場地方（農場主人）溝通合作細節、簽署合作契約與確認安全規範。',
            '決策與危機處置：處理跨組別爭議、重大預算異動，以及營期中各項突發狀況之最終裁決。'
        ]
    },
    {
        id: 'G',
        title: '總務股',
        fullTitle: '總務股',
        avatar: 'npc_g.png',
        alwaysShow: false,
        desc: [
            '財務與預算管理：編列營隊整體收支預算，控管各組別經費使用上限與核銷審查。',
            '帳務核銷與留痕：負責所有發票、收據之整理與對帳，並於營期結束後編製資金流動結算表提交系上。',
            '物品採購與文具管理：統一採購營隊公用文具（如簽到表用筆、辦公用品）、物資，並掌管營隊預備金。'
        ]
    },
    {
        id: 'B',
        title: '公關股',
        fullTitle: '公關股',
        avatar: 'npc_b.png',
        alwaysShow: false,
        desc: [
            '品牌宣傳與社群營運：負責營隊官方粉專、社群媒體之宣傳企劃、文案撰寫與日常經營。',
            '對外贊助洽談：奔波聯絡企業與店家籌措營隊贊助資金、物資（食品、周邊），以充實營隊經費。',
            '對外溝通橋樑：負責營前與小隊員家長之訊息對接、通知發放及嘉賓邀請事宜。'
        ]
    },
    {
        id: 'C',
        title: '活動股',
        fullTitle: '活動股',
        avatar: 'npc_c.png',
        alwaysShow: false,
        desc: [
            '闖關組：發想與設計組別對抗闖關遊戲，準備遊戲道具及規則流程。',
            '晚會 & 夜教組：規劃慶功晚會節目流程、主持控場、酒桌遊戲，以及夜間試膽活動之動線安排。',
            '水大地組：規劃大型戶外水大地活動、採買勝出獎品與準備水上活動裝備。',
            '團康 RPG 組：設計團康破冰遊戲、寫作 RPG 劇情腳本，並擔任活動主持與角色扮演。'
        ]
    },
    {
        id: 'F',
        title: '美宣股',
        fullTitle: '美宣股',
        avatar: 'npc_f.png',
        alwaysShow: false,
        desc: [
            '主視覺與文宣設計：設計營隊主視覺標誌、登隊宣傳海報、宣傳手冊封面及宣傳周邊。',
            '實體道具製作：爆肝手工製作各活動所需之大型宣傳板、闖關道具、場地佈置物品。',
            '識別與影像加工：製作小隊員與幹部個人名牌，並負責營隊相關發布照片之美化加工。'
        ]
    },
    {
        id: 'D',
        title: '器攝股',
        fullTitle: '器攝股（器材與攝影後勤股）',
        avatar: 'npc_d.png',
        alwaysShow: false,
        desc: [
            '生活籌備組：負責營期中全體幹部與隊員之膳食訂購、住宿分配及生活物資打理。',
            '器材組：負責發電機、音響、夜間照明燈等重型設備之搬運、架設、測試與維護。',
            '攝影後勤組：於活動全程進行動態錄影與靜態攝影紀錄，並兼顧營隊緊急醫療藥品管理與急救支援。'
        ]
    },
    {
        id: 'SQUAD',
        title: '隊輔股',
        fullTitle: '隊輔股',
        avatar: 'npc_squad.png',
        alwaysShow: true, // Always show - in UK exchange
        note: '目前在英國交換，未參加本次活動',
        desc: [
            '小隊帶領與破冰：直接帶領小隊員參與各項活動、主持小隊破冰遊戲與建立團隊凝聚力。',
            '表演指導：指導與督促小隊員進行晚會隊呼、隊劇及舞蹈之練習與演出。',
            '生活照顧與安全監測：全程跟隨小隊，密切留意隊員之身體狀況、心理情緒及隨時處理突發生活需求。'
        ]
    },
    {
        id: 'I',
        title: '機動股',
        fullTitle: '機動股',
        avatar: 'npc_i.png',
        alwaysShow: false,
        desc: [
            '即時人力支援：擔任營隊靈魂後備，隨時調配人力支援各股別人力缺口與緊急跑腿。',
            '營區安全與夜間巡邏：負責營期夜間安導維護、分時段實施營區與後山周邊之安全巡邏，並填寫巡邏簽到簿。',
            '交通與動線引導：負責指引人員進出動線、維持活動現場秩序及控管人員出入安全。'
        ]
    },
    {
        id: 'E',
        title: '農場主人',
        fullTitle: '農場主人',
        avatar: 'npc_e.png',
        alwaysShow: false,
        desc: [
            '場地提供與維護：提供農場場地供營隊使用，負責場地安全維護與設施管理。'
        ]
    }
];

// NPC data
const NPC_DATA = [
    {
        id: 'A',
        name: '副籌 A',
        hiddenLabel: '幹部 ①',
        role: '副籌',
        avatar: 'npc_a.png',
        intro: '學弟妹們好，我是去年的宿營副籌。你們現在有一些學長姐也參加過我們去年辦的活動呢！這屆我們給了不少建議和幫助，希望你們玩得開心！我主要的工作內容是盯著所有組別的進度，一邊還要負責去跟農場主人談合作、簽合約。我和這座農場的主人也很熟呢！話說 K 和他最熟，兩人站在一起就像爺爺和孫子。',
        questions: [
            {
                q: '你認為營隊哪一個部分對你而言很困難？',
                a: '<span class="stage-direction">（微笑、嘆氣）</span>最難的……大概就是「管帳」跟「調解人心」吧。我們這屆規模辦得大，資金流動非常複雜，雖然大筆款項主要由總務 G 負責管理，但到了籌備後期，帳目上開始出現一些無法解釋的窟窿，各組預算因此大幅拉緊，大家情緒都很繃。\n\n我那時候身為副籌，夾在幹部跟總務中間真的很難做。如果現在回過頭看，我覺得財務透明度真的最重要。如果現在帳目有二、三十萬的出入，你們真的該去好好問問總務 G，到底是他記帳不小心，還是……有人手腳不乾淨，拿了不該拿的錢？'
            },
            {
                q: '你在籌辦營隊後覺得學到最多的是什麼？',
                a: '<span class="stage-direction">（溫和地笑）</span>學到最多的，應該是「抗壓性」跟「承擔責任的勇氣」吧！辦活動難免遇到挫折，但身為領導者，絕對不能遇到壓力就自己先垮掉。\n\n像我們那時候的 K，籌備後期狀況就很不穩定，常常看著文件發呆，叫他好幾次都沒反應。最後那一晚我看他壓力大到一個人躲在辦公室，我好心去問要不要幫忙，他還沉著臉叫我滾……<span class="stage-direction">（苦笑）</span>但沒辦法，他不想管，我身為副籌也只能含淚把所有爛攤子硬扛下來。所以啊，選對心態成熟的夥伴真的太重要了。'
            }
        ]
    },
    {
        id: 'G',
        name: '總務 G',
        hiddenLabel: '幹部 ②',
        role: '總務',
        avatar: 'npc_g.png',
        intro: '學弟妹好……我是去年的總務 G。你們這屆能順利辦起來真的很好啦，辦活動最麻煩的就是錢跟單據了……我當初幾乎每天都泡在系辦對帳，發票收據一大堆，每一筆都要精確到個位數。大家只看到活動風光，根本不知道後面做帳有多痛苦、壓力有多大……<span class="stage-direction">（眼神閃爍，瘋狂捏著手指）</span>',
        questions: [
            {
                q: '當時營隊的資金運作與收支管理還順利嗎？',
                a: '順利啊！怎麼不順利？<span class="stage-direction">（語速變快，神情緊張）</span>發票收據我全部都一張張黏好對過了！預算絕對不可能有問題！你們看，這是我當初留下來的「財務決算總表」——<span class="stage-direction">（遞出一張表格）</span>\n\n<button class="prop-trigger" onclick="event.stopPropagation(); openPropModal(\'expense\')">📊 查看財務決算總表</button>\n\n每一筆都是清清楚楚的！\n不過，籌備後期突然有一些莫名其妙的資金調整，是 K（總籌）要改的！他那時候態度超硬，叫我把美宣組還沒執行的經費全部砍掉來墊補其他缺口。我只是個聽令做事的總務，如果有人覺得預算有問題去問他啊！不要什麼事都算在我頭上！',
                hasProp: 'expense'
            },
            {
                q: '籌備到最後，你覺得最辛苦、最吃力不討好的部分是什麼？',
                a: '<span class="stage-direction">（苦笑一聲，猛地一拍桌）</span>最吃力不討好？就是「收爛攤子」啊！\n\n辦活動最怕遇到突發狀況時所有人都在擺爛！像我們那時候營隊才剛結束，K（總籌）就突然不知去向、直接斷聯，整個幹部團隊亂成一團！副籌 A 那時候更是拍拍屁股什麼都不管！最後還不是我自己一個人不眠不休、連續加班熬夜好幾天，好不容易才把這份總帳全部對齊提交給系上！你們現在能坐在這裡聽我分享，都是我當初拿肝換來的<span class="stage-direction">（喘粗氣）</span>\n\n你們看看這份帳——<span class="stage-direction">（從資料夾裡抽出表格遞出）</span>\n\n<button class="prop-trigger" onclick="event.stopPropagation(); openPropModal(\'expense\')">📊 查看財務決算總表</button>\n\n每一筆我都對得清清楚楚！',
                hasProp: 'expense'
            }
        ]
    },
    {
        id: 'B',
        name: '公關 B',
        hiddenLabel: '幹部 ③',
        role: '公關股',
        avatar: 'npc_b.png',
        intro: '各位小隊員好～我是去年的公關 B！我們公關的工作非常重要，負責整個營隊的活動宣傳、粉專社群經營，還有最辛苦的——到處奔波去拉贊助找經費！要是沒有我們拉到足夠的贊助，營隊根本辦不起來。',
        questions: [
            {
                q: '你當時和各股的關係好嗎？',
                a: '<span class="stage-direction">（冷笑一聲）</span>跟大家都還不錯啊，畢竟做公關的人緣怎麼可能差？但要是說到「太好」的……呵，我的好閨蜜 C 倒是跟各股、甚至跟 K（總籌）關係好得很呢！\n\n籌備後期大家都很累，K 那陣子像中邪一樣，訊息整天不回，連公關進度我都找不到人對。最可笑的是，每次我聯絡不上人，C 總是可以第一時間跳出來幫他緩頰、代為轉達。既然他們那麼有默契、那麼常聯絡，那我這個女友反而顯得多餘囉。'
            },
            {
                q: '有發生什麼讓你很印象深刻的事情嗎？',
                a: '<span class="stage-direction">（眼神一沉，聲音開始有些抖）</span>最印象深刻的……就是宿營最後那一晚吧。\n\n我那時候覺得太委屈了，跑去找 K 做最後的溝通，問他到底把我和這個營隊當什麼？結果他居然一句話都不解釋，就用那種死魚眼冷冰冰地看著我！我當時氣瘋了，直接把我送他的情侶藍色手鍊砸在他身上，告訴他老娘不玩了！\n\n我轉頭就走，把他所有的聯絡方式都封鎖。我起初以為他只是在跟我冷戰，誰知道這一年過去了，他連家裡都沒回……他到底是恨我恨到什麼程度，要搞這種無影無蹤來報復我？'
            }
        ]
    },
    {
        id: 'C',
        name: '活動 C',
        hiddenLabel: '幹部 ④',
        role: '活動股',
        avatar: 'npc_c.png',
        intro: '喲！我是活動股的 C！營隊好不好玩，看我們活動股就對了。我們底下分工很細喔：「闖關組」要負責發想超嗨的組別對抗闖關遊戲；「晚會＆夜教組」要安排晚會流程跟酒桌遊戲；「水大地組」要跑腿採買獎品和準備水大地活動；最後還有「團康 RPG 組」，負責準備團康和主持活動！',
        questions: [
            {
                q: '你有和團隊裡的哪些幹部比較熟嗎？',
                a: '<span class="stage-direction">（揪著衣角，語速不自覺變快）</span>我跟大家都很好啊！特別是公關 B，她是我大學最好的閨蜜！我們天天黏在一起。\n\n所以那陣子她跟我抱怨 K（總籌）對她很冷淡、訊息不回的時候，我也很替她著想啊！我只是因為跟各股對接活動，常常跑去跟 K 確認流程，才幫忙去跟 K 傳話……我真的只是希望他們兩個人好好的！我從來沒有想過要介入，更不可能做出對不起 B 的事！你們不要聽別人亂講！'
            },
            {
                q: '活動最後一晚慶功狂歡的時候，現場氣氛怎麼樣？',
                a: '現場超嗨、超混亂的啊！大排檔音樂開得超級大聲，大家都在喝酒狂歡。我身為活動組，後半段一直在公共區整理晚會剩下的器材跟音響，收拾完累得要死就直接回帳篷睡覺了。\n\n不過……那一晚我人在公共區搬音響的時候，確實隱約聽到後山廢棄小街方向傳來很激烈的爭吵聲。我本來以為是有人喝醉在鬧，就沒多理會了……大家晚上還是待在營區比較安全，別往後山那邊去比較好喔！'
            }
        ]
    },
    {
        id: 'D',
        name: '器攝 D',
        hiddenLabel: '幹部 ⑤',
        role: '器攝股',
        avatar: 'npc_d.png',
        intro: '各位好，我是去年的器攝 D。我們股包辦了非常多元的後勤工作：「生活籌備組」要打點大家的餐點準備跟住宿相關事宜；「器材組」要負責所有沉重器材設備的搬運和操作；「攝影後勤組」則要在活動時到處拍照、錄影紀錄，還要兼顧醫療後勤。',
        questions: [
            {
                q: '器攝股要搬運大量重型器材，當時在工作搭配上還順利嗎？',
                a: '<span class="stage-direction">（眼神冷漠，語氣生硬）</span>還行吧。我這個人不太跟人交際，但我該搬的喇叭、發電機、夜間照明燈，我一樣都沒少搬過。\n\n我知道系上有些人在背後碎嘴，說我常常缺席開會、看起來很累什麼的。但我私人的行程和時間安排，到底跟營隊有什麼關係？我自己的事我自己會處理好，我不需要任何人的同情，更沒拿過營隊或任何人的恩惠！'
            },
            {
                q: '這一段時間跟著營隊跑完全程，你自己個人覺得最需要放鬆或休息的是什麼時候？',
                a: '<span class="stage-direction">（眼神避開，捏捏手掌）</span>最後一晚吧。大家在慶功的時候，我覺得我該做的事都做完了，現場又吵，就想找個安靜的地方讓自己清醒一點。\n\n那時候我一個人在營區外圍非常平靜地散散步、吹吹風而已。我真的只是在散步，沒有去什麼奇怪的地方。'
            }
        ]
    },
    {
        id: 'F',
        name: '美宣 F',
        hiddenLabel: '幹部 ⑥',
        role: '美宣股',
        avatar: 'npc_f.png',
        intro: '哈囉……我是美宣股的 F，每天都在爆肝熬夜。我們股主要負責製作整個營期的所有道具、設計登隊時的主視覺，還有你們手上的宣傳手冊封面、每個人身上的名牌、大部分的照片發出去時也會經過我們這邊加工。',
        questions: [
            {
                q: '對上次的籌辦結果滿意嗎？',
                a: '滿意？怎麼可能滿意！我們美宣組熬夜好幾個月、爆肝做出來的大宣傳板跟周邊道具，成果明明超讚！結果籌備後期，K 突然跑來說預算不夠，直接把我原本預計要發給全營隊的客製化紀念品和文具全部砍掉！\n\n最氣的是他連個合理原因都給不出來，只會一直跟我道歉、說他也很難辦。我花了那麼多心血，最後成果被打折扣，我到現在想到還是滿肚子火！'
            },
            {
                q: '那在宿營現場那幾天壓力那麼大，妳自己主要是怎麼抒發或放鬆情緒的啊？',
                a: '還能怎麼抒發？跟朋友喝兩杯抒壓啊！像最後一晚活動結束大家在慶功時，我就是因為喝了點酒、越想越氣，一時衝動又單獨跑去辦公室找 K 理論。我當時真的氣瘋了，指責他不配當老大，還說活動被砍預算全是他一個人的責任！\n\n我罵完就後悔了，拉不下臉道歉，就自己跑去後山吹風。但在後山吹風的時候，我遠遠地有聽到別人在激烈爭吵的聲音！更怪的是，我回營區的路上，還遠遠看到 D 學長魂不守舍的，衣服看起來髒兮兮、都是泥土，整個人慌慌張張地往水源處跑過去……\n\n超怪的吧？'
            }
        ]
    },
    {
        id: 'I',
        name: '機動 I',
        hiddenLabel: '幹部 ⑦',
        role: '機動股',
        avatar: 'npc_i.png',
        intro: '嘿！我是機動股的 I。我們機動股在活動當天就是最強的「人力支援」，哪裡有狀況、哪裡缺人手，我們就往哪裡衝！除了隨時準備處理各種突發狀況，宿營期間夜間的營區安全與安導巡邏，主要也是由我們機動股來負責安排和執行的！',
        questions: [
            {
                q: '大家那時候工作負擔都很重嗎？你對其他幹部的工作狀況有印象嗎？',
                a: '大家都超爆肝啊！像美宣 F 爆肝做道具，器攝 D 學長更是常常因為家裡狀況要跑去打工、缺席開會，我們機動常常要跑去幫忙補缺。不過我雖然愛跟學弟妹玩，但我該做的巡邏絕對沒少！不信你們看這張巡邏簽到簿——\n\n<button class="prop-trigger" onclick="event.stopPropagation(); openPropModal(\'patrol\')">📋 查看巡邏簽到簿</button>\n\n我都有按時簽名！',
                hasProp: 'patrol'
            },
            {
                q: '夜間巡邏這個工作當時執行起來順利嗎？有留下什麼紀錄嗎？',
                a: '順利啊！我非常盡責，巡視完立刻就去簽到處寫紀錄了！諾！這張是當年的巡邏簽到簿——\n\n<button class="prop-trigger" onclick="event.stopPropagation(); openPropModal(\'patrol\')">📋 查看巡邏簽到簿</button>\n\n我的名字時間寫得清清楚楚！對了，我 22:15 去簽名時看到 A 寫 22:10 且用藍筆，當時黑筆明明好像沒水，不知道他怎麼簽的，反正我是用嘴咬著公用黑筆勉強寫完的。',
                hasProp: 'patrol'
            }
        ]
    },
    {
        id: 'E',
        name: '農場主人 E',
        hiddenLabel: '幹部 ⑧',
        role: '農場主人',
        avatar: 'npc_e.png',
        intro: '唉呀，各位年輕人好啊……我是這座農場的主人 E。這座農場啊，是我跟我那已經過世的老伴，年輕時一磚一瓦慢慢搭起來的。對我來說，這裡不只是一間農場，更滿載了我跟我老伴一輩子的回憶……她走了之後，我就一個人守著這裡。平時有你們這些有活力的學生來租場地辦營隊，農場熱鬧一點，我在天上的老伴看了也會高興啦。',
        questions: [
            {
                q: '一年前這群學生來租場地辦營隊，你對他們的印象怎麼樣？',
                a: '<span class="stage-direction">（眼神微微一變，隨即露出慈祥但有些感傷的笑容）</span>印象很好啊！特別是當年的 K，那孩子真的很有禮貌，每次來確認場地都會主動幫我搬東西、陪我這個老頭子聊幾句，客氣得像我自己的孫子一樣。\n\n他那段時間看起來確實很累，我有勸他多休息，但他總說沒關係。\n\n我當時也沒多管，畢竟這裡是我和我老伴留下來的地方，我平時最希望看到你們這些學生平平安安地辦完活動。誰知道他隔天一早沒出聲就自己離開了……'
            },
            {
                q: '這座農場的後山平時有什麼需要特別注意的地方嗎？',
                a: '後山那邊啊……路很破、又沒有路燈，特別是廢棄小街那一帶，晚上風很大。我那時候就天天警告學生晚上絕對不要靠近那裡，很容易摔傷掉落土坡。\n\n那次營隊結束的隔天清晨，我去後山周邊巡視，整個農場都靜悄悄的，真的什麼人都沒看到。'
            }
        ]
    }
];

// Expense report data
// Financial settlement report data (forged by G)
const INCOME_ITEMS = [
    { cat: '小隊員報名費', desc: '參加學生共 100 人', unit: '$ 6,720 / 人', voucher: '—', amount: '$ 672,000' },
    { cat: '幹部工人自費', desc: '籌備幹部共 32 人', unit: '$ 2,000 / 人', voucher: '—', amount: '$ 64,000' },
    { cat: '企業贊助款', desc: '公關組拉贊（含拉麵店、飲料店、周邊廠商）', unit: '摘要列計', voucher: '贊助合作收據', amount: '$ 54,000' },
    { cat: '系學會行政補助', desc: '系學會年度宿營活動定額補助款', unit: '乙式', voucher: '專戶劃撥證明', amount: '$ 30,000' },
];

const EXPENSE_ITEMS = [
    { cat: '場地租借', desc: '聖心農場全區包場（含後山及場地公共意外險）', voucher: '統一發票', invoiceNo: 'INV-20251012', amount: '$ 250,000' },
    { cat: '美宣道具', desc: '宣傳手冊、名牌、登隊大宣傳板、全營客製紀念品', voucher: '收據/發票', invoiceNo: 'REC-009812', amount: '$ 180,000' },
    { cat: '餐飲生活', desc: '三日全體膳食、烤肉晚會食材、大排檔飲料啤酒', voucher: '統一發票', invoiceNo: 'INV-20251015', amount: '$ 160,000' },
    { cat: '器材設備', desc: '舞台音響設備、大型發電機、夜間高照燈租借', voucher: '統一發票', invoiceNo: 'INV-20251017', amount: '$ 150,000' },
    { cat: '機動雜項', desc: '機動車輛油資、急救醫藥箱補給、營隊公用文具', voucher: '收據/發票', invoiceNo: 'REC-009941', amount: '$ 80,000' },
];

// Patrol log data (two-person patrols)
const PATROL_LOG = [
    { time: '21:00 - 21:30', area: '路線 A：住宿區與營本部', name1: '機動 張××', name2: '機動 廖××', signTime: '21:00', note: '晚會狂歡中，一切正常。', n1Blue: false, n2Blue: false, n1Wobbly: false, n2Wobbly: false },
    { time: '21:30 - 22:00', area: '路線 B：大排檔與外圍步道', name1: '機動 陳××', name2: '機動 林××', signTime: '22:00', note: '學弟妹陸續返回營區。', n1Blue: false, n2Blue: false, n1Wobbly: false, n2Wobbly: false },
    { time: '22:10 - 22:40', area: '標準巡邏路線 (營區全域)', name1: '副籌 A', name2: '機動 I', signTime: '22:10', note: '', n1Blue: true, n2Blue: false, n1Wobbly: true, n2Wobbly: true },
    { time: '22:40 - 23:10', area: '路線 A：住宿區與後方區域', name1: '機動 許××', name2: '機動 趙××', signTime: '22:40', note: '營區陸續熄燈。', n1Blue: false, n2Blue: false, n1Wobbly: false, n2Wobbly: false },
];

// ============================================
//  GAME STATE
// ============================================
const gameState = {
    introduced: {},
    questioned: {},
    collectedProps: {},
    currentNpc: null,
    notes: '',
    log: [],
    phase: 1,
    phase2TimerId: null
};

function loadState() {
    try {
        const saved = localStorage.getItem('campMystery_p1v2_state');
        if (saved) {
            const parsed = JSON.parse(saved);
            Object.assign(gameState, parsed);
            if (!gameState.collectedProps) gameState.collectedProps = {};
            if (!gameState.phase) gameState.phase = 1;
        }
        const notes = localStorage.getItem('campMystery_p1v2_notes');
        if (notes) gameState.notes = notes;
    } catch (e) { console.warn('Load state failed:', e); }
}

function saveState() {
    try {
        localStorage.setItem('campMystery_p1v2_state', JSON.stringify({
            introduced: gameState.introduced,
            questioned: gameState.questioned,
            collectedProps: gameState.collectedProps,
            log: gameState.log,
            phase: gameState.phase
        }));
        localStorage.setItem('campMystery_p1v2_notes', gameState.notes);
    } catch (e) { console.warn('Save state failed:', e); }
}

// ============================================
//  SCREEN MANAGEMENT
// ============================================
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (screenId === 'game-screen') {
        renderNpcGrid();
        renderInvestigationLog();
        renderLocker();
        updateProgress();
        const notesEl = document.getElementById('player-notes');
        if (notesEl) notesEl.value = gameState.notes;
    }
}

function startGame() { showScreen('briefing-screen'); }

// ============================================
//  TABS
// ============================================
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`tab-${tabName}`).classList.add('active');
    document.querySelector(`.sidebar-btn[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById('sidebar').classList.remove('open');
}

// ============================================
//  NPC GRID
// ============================================
function renderNpcGrid() {
    const grid = document.getElementById('npc-grid');
    grid.innerHTML = '';
    NPC_DATA.forEach((npc, index) => {
        const isQuestioned = gameState.questioned[npc.id] !== undefined;
        const isIntroduced = gameState.introduced[npc.id];
        const card = document.createElement('div');
        card.className = `npc-card${isQuestioned ? ' introduced' : ''}`;
        card.style.setProperty('--delay', `${index * 0.07}s`);
        card.onclick = () => {
            if (gameState.phase >= 2) {
                openPhase2NpcModal(npc.id);
            } else {
                openNpcDialog(npc.id);
            }
        };

        const displayName = isQuestioned ? npc.name : npc.hiddenLabel;
        const nameClass = isQuestioned ? 'npc-card-name' : 'npc-card-name hidden-name';
        const displayRole = isQuestioned ? npc.role : '？？？';

        let statusText;
        if (gameState.phase >= 2) {
            statusText = '🔍 點擊進行偵訊';
        } else if (isQuestioned) {
            statusText = '點擊查看對話紀錄';
        } else if (isIntroduced) {
            statusText = '已自我介紹，點擊繼續對話';
        } else {
            statusText = '點擊開始對話 👋';
        }

        card.innerHTML = `
            <div class="npc-card-header">
                <img class="npc-avatar" src="${npc.avatar}" alt="${displayName}" loading="lazy">
                <div>
                    <div class="${nameClass}">${displayName}</div>
                    <span class="npc-role-badge">${displayRole}</span>
                </div>
            </div>
            <p class="npc-card-trait">${statusText}</p>
        `;
        grid.appendChild(card);
    });
}

// ============================================
//  NPC DIALOG — 3-step flow
// ============================================
function openNpcDialog(npcId) {
    const npc = NPC_DATA.find(n => n.id === npcId);
    if (!npc) return;
    gameState.currentNpc = npc;

    const isQuestioned = gameState.questioned[npcId] !== undefined;
    const displayName = isQuestioned ? npc.name : npc.hiddenLabel;

    document.getElementById('npc-dialog-avatar').innerHTML = `<img src="${npc.avatar}" alt="${displayName}">`;
    document.getElementById('npc-dialog-name').textContent = displayName;
    document.getElementById('npc-dialog-role').textContent = isQuestioned ? npc.role : '？？？';
    document.getElementById('npc-dialog-desc').textContent = '';

    const body = document.getElementById('npc-dialog-body');

    if (isQuestioned) {
        const qIndex = gameState.questioned[npcId];
        const question = npc.questions[qIndex];
        body.innerHTML = `
            <div class="intro-container"><div class="intro-bubble">${formatText(npc.intro)}</div></div>
            <div class="answer-container" style="margin-top:8px;">
                <div class="answer-question">Q：${question.q}</div>
                <div class="answer-text">${formatText(question.a)}</div>
                <button class="answer-done-btn" onclick="closeNpcModal()">關閉</button>
            </div>`;
    } else if (gameState.introduced[npcId]) {
        showQuestionSelection(npc, body);
    } else {
        showIntroduction(npc, body);
    }

    document.getElementById('npc-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function showIntroduction(npc, body) {
    body.innerHTML = `
        <div class="intro-container">
            <div class="intro-bubble" id="intro-text"></div>
            <button class="intro-next-btn" id="intro-next-btn" style="display:none" onclick="onIntroComplete('${npc.id}')">接下來想問他一個問題 ➜</button>
        </div>`;
    typeText(npc.intro, document.getElementById('intro-text'), () => {
        const btn = document.getElementById('intro-next-btn');
        btn.style.display = 'block';
        btn.style.animation = 'fadeInUp 0.4s var(--ease-smooth)';
    });
}

function onIntroComplete(npcId) {
    gameState.introduced[npcId] = true;
    saveState();
    const npc = NPC_DATA.find(n => n.id === npcId);
    showQuestionSelection(npc, document.getElementById('npc-dialog-body'));
}

function showQuestionSelection(npc, body) {
    body.innerHTML = `
        <div class="intro-container"><div class="intro-bubble">${formatText(npc.intro)}</div></div>
        <div style="margin-top:16px; animation: fadeInUp 0.4s var(--ease-smooth);">
            <p class="question-prompt">選擇一個問題詢問：</p>
            ${npc.questions.map((q, i) => `
                <button class="question-btn" data-qnum="Q${i+1}" onclick="askQuestion('${npc.id}', ${i})">${q.q}</button>
            `).join('')}
        </div>`;
}

function askQuestion(npcId, questionIndex) {
    const npc = NPC_DATA.find(n => n.id === npcId);
    if (!npc) return;

    gameState.questioned[npcId] = questionIndex;
    gameState.log.push({
        npcId, npcName: npc.name, npcRole: npc.role,
        questionIndex, question: npc.questions[questionIndex].q,
        answer: npc.questions[questionIndex].a, timestamp: Date.now()
    });
    saveState();

    document.getElementById('npc-dialog-name').textContent = npc.name;
    document.getElementById('npc-dialog-role').textContent = npc.role;

    const body = document.getElementById('npc-dialog-body');
    const question = npc.questions[questionIndex];

    body.innerHTML = `
        <div class="intro-container"><div class="intro-bubble">${formatText(npc.intro)}</div></div>
        <div class="answer-container" style="margin-top:8px; animation: fadeInUp 0.4s var(--ease-smooth);">
            <div class="answer-question">Q：${question.q}</div>
            <div class="answer-text" id="typing-area"></div>
            <button class="answer-done-btn" id="answer-done-btn" style="display:none" onclick="closeNpcModal()">完成對話</button>
        </div>`;

    typeText(question.a, document.getElementById('typing-area'), () => {
        const btn = document.getElementById('answer-done-btn');
        btn.style.display = 'block';
        btn.style.animation = 'fadeInUp 0.3s var(--ease-smooth)';
    });

    updateProgress();
    renderNpcGrid();
    renderInvestigationLog();
    checkPhase2Trigger();
}

function formatText(text) {
    return text.replace(/\n/g, '<br>');
}

// ============================================
//  TYPING EFFECT
// ============================================
function typeText(html, container, onDone) {
    // Handle the HTML content with tags
    html = formatText(html);
    const temp = document.createElement('div');
    temp.innerHTML = html;
    const fullText = temp.textContent;

    let charIndex = 0;
    const speed = 25;
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';

    function revealChar() {
        if (charIndex >= fullText.length) {
            container.innerHTML = html;
            if (onDone) onDone();
            return;
        }
        charIndex += 1;

        let plainCount = 0, htmlPos = 0, inTag = false;
        for (let i = 0; i < html.length; i++) {
            if (html[i] === '<') inTag = true;
            if (!inTag) {
                plainCount++;
                if (plainCount === charIndex) { htmlPos = i + 1; break; }
            }
            if (html[i] === '>') inTag = false;
        }

        container.innerHTML = html.substring(0, htmlPos);
        container.appendChild(cursor);
        setTimeout(revealChar, speed + Math.random() * 20 - 10);
    }
    revealChar();
}

// ============================================
//  MODALS
// ============================================
function closeNpcModal() {
    document.getElementById('npc-modal').classList.remove('open');
    document.body.style.overflow = '';
    renderNpcGrid();
}

// ============================================
//  CLUE MODALS
// ============================================
function openClueModal(type) {
    const body = document.getElementById('clue-modal-body');
    if (type === 'handbook') {
        body.innerHTML = renderHandbook();
    } else if (type === 'photo') {
        body.innerHTML = `
            <img class="clue-modal-img" src="group_photo.png" alt="大合照">
            <h3 class="clue-modal-title">📷 第 12 屆宿營大合照</h3>
            <p class="clue-modal-desc">
                宿營期間拍攝的全體合照。大家比著<strong>第 12 屆</strong>的手勢，看起來都很開心呢！
            </p>`;
    }
    document.getElementById('clue-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeClueModal() {
    document.getElementById('clue-modal').classList.remove('open');
    document.body.style.overflow = '';
}

// ============================================
//  HANDBOOK RENDERER
// ============================================
function renderHandbook() {
    let html = `
        <h3 class="clue-modal-title">📒 第 12 屆宿營幹部手冊</h3>
        <p class="clue-modal-desc">幹部編制表與各股工作職掌。訪問過的幹部頭像會自動顯示。</p>
        <div class="handbook-grid">`;

    HANDBOOK_DATA.forEach(entry => {
        const isRevealed = entry.alwaysShow || gameState.questioned[entry.id] !== undefined;
        const isKPosition = (entry.id === 'K');

        let avatarHtml;
        if (isRevealed && entry.avatar) {
            avatarHtml = `<div class="hb-avatar"><img src="${entry.avatar}" alt="${entry.title}"></div>`;
        } else {
            avatarHtml = '<div class="hb-avatar hb-avatar-locked"><span>🔒</span></div>';
        }

        const noteHtml = entry.note ? `<div class="hb-note">📌 ${entry.note}</div>` : '';
        const nameLabel = (!isKPosition && isRevealed && !entry.alwaysShow)
            ? `<span class="hb-name-revealed">${NPC_DATA.find(n=>n.id===entry.id)?.name || entry.title}</span>`
            : '';

        const kClickAttr = isKPosition ? ` onclick="onHandbookKClick()" style="cursor:pointer;"` : '';
        const allDone = Object.keys(gameState.questioned).length >= NPC_DATA.length;
        const kHintClass = (isKPosition && allDone && gameState.phase === 1) ? ' hb-card-hint' : '';

        html += `
            <div class="hb-card${kHintClass}"${kClickAttr}>
                <div class="hb-card-header">
                    ${avatarHtml}
                    <div class="hb-card-title-area">
                        <h4>${entry.fullTitle}</h4>
                        ${nameLabel}
                        ${noteHtml}
                    </div>
                </div>
                <ul class="hb-duties">
                    ${entry.desc.map(d => `<li>${d}</li>`).join('')}
                </ul>
            </div>`;
    });

    html += '</div>';
    return html;
}

// ============================================
//  PROP DEFINITIONS (for evidence locker)
// ============================================
// Real expense data (found at crime scene - actual costs)
const REAL_EXPENSE_ITEMS = [
    { vendor: '聖心農場', desc: '場地租借實付（折抵後）', amount: '$ 180,000', invoiceNo: 'INV-20251012', status: '已支付' },
    { vendor: '美宣組', desc: '道具材料實付', amount: '$ 60,000', invoiceNo: 'REC-009812', status: '已支付' },
    { vendor: '生活餐飲', desc: '膳食與烤肉食材實付', amount: '$ 120,000', invoiceNo: 'INV-20251015', status: '已支付' },
    { vendor: '器材公司', desc: '音響發電機設備租借實付', amount: '$ 130,000', invoiceNo: 'INV-20251017', status: '已支付' },
    { vendor: '機動文具', desc: '文具採購與醫療物資實付', amount: '$ 50,000', invoiceNo: 'REC-009941', status: '已支付' },
];

const PROP_DEFINITIONS = {
    expense: {
        id: 'expense',
        name: '財務決算總表',
        icon: '📊',
        source: '總務 G',
        desc: '總務 G 提供的 114 學年度宿營活動財務決算總表，包含收入與支出明細。'
    },
    patrol: {
        id: 'patrol',
        name: '夜間巡邏簽到簿',
        icon: '📋',
        source: '機動 I',
        desc: '2025/10/3 夜間巡邏簽到紀錄，採兩兩一組制，記載了各時段的巡邏人員簽名與營區狀況。'
    },
    bracelet: {
        id: 'bracelet',
        name: '藍色手鍊',
        icon: '💎',
        source: '蒐證區',
        desc: '在遺體附近發現的女用藍色手鍊，上面沾有泥土。'
    },
    real_expense: {
        id: 'real_expense',
        name: '廠商實付核對單',
        icon: '📄',
        source: '蒐證區',
        desc: '零散的真實單據明細，沾了泥土，有兩人簽名。記載了廠商實際收到的付款金額。'
    },
    crime_scene_photo: {
        id: 'crime_scene_photo',
        name: '案發現場照片',
        icon: '📷',
        source: '蒐證區',
        desc: '警方拍攝的案發現場全景照片，記錄了遺體被發現時的完整場景。'
    },
    stationery_list: {
        id: 'stationery_list',
        name: '營隊文具採購清單',
        icon: '🧾',
        source: '總務 G',
        desc: '總務 G 提供的營隊公共文具採購明細，上面的發票品名全部都是黑色文具，沒有任何藍色原子筆。'
    },
    c_testimony: {
        id: 'c_testimony',
        name: 'C 的證詞',
        icon: '📝',
        source: '器材 C',
        desc: 'C 供稱 22:33 在廢棄小街發現 K 已倒地不起，逃跑時不慎遺落手鍊。凌晨目睹農場主人 E 也往案發現場方向走去。'
    },
    ig_screenshot: {
        id: 'ig_screenshot',
        name: 'I 的 IG 限動截圖',
        icon: '📱',
        source: '器材 C',
        desc: '22:33 巡邏員 I 在公共區和學弟妹玩酒桌遊戲的 IG 限時動態截圖，與巡邏簽到簿上 22:15 在巡邏的紀錄矛盾。'
    },
    k_phone: {
        id: 'k_phone',
        name: '總籌 K 的手機',
        icon: '📲',
        source: '農場主人 E',
        desc: 'E 從 K 遺體旁撿到的手機，目前處於鎖定狀態。密碼提示：屆數＋日期。解鎖後可查看 K 生前的最後訊息。'
    },
    torn_notebook: {
        id: 'torn_notebook',
        name: '被撕過的筆記本殘頁',
        icon: '📓',
        source: '女友 B',
        desc: 'K 失蹤當天，總務 G 趁 B 不注意時從 K 的營隊筆記中撕走了幾頁。B 保留了剩下的殘頁。'
    },
    k_ledger: {
        id: 'k_ledger',
        name: 'K 親筆對帳筆記',
        icon: '📋',
        source: '總務 G',
        desc: 'K 當晚獨自對帳時寫下的真實數字，記載了 7 萬農場追加款和 12 萬美宣授權的疑點。G 一直不敢銷毀的最後良心。'
    },
    d_photo: {
        id: 'd_photo',
        name: 'D 衣服沾泥土的側拍照',
        icon: '📸',
        source: '美宣 F',
        desc: '活動結束後的側拍照，清楚顯示隊輔 D 的衣服沾滿泥土。F 目擊時間約為 22:40。'
    }
};

// ============================================
//  PROP MODALS (Expense Report, Patrol Log)
// ============================================
function collectProp(propId) {
    if (gameState.collectedProps[propId]) return;
    const def = PROP_DEFINITIONS[propId];
    if (!def) return;
    gameState.collectedProps[propId] = { collectedAt: Date.now() };
    saveState();
    renderLocker();
    updateLockerBadge();

    // Show a brief toast notification
    const toast = document.createElement('div');
    toast.className = 'prop-toast';
    toast.innerHTML = `<span class="prop-toast-icon">${def.icon}</span> 已獲得道具：<strong>${def.name}</strong>`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, 2500);
}

function updateLockerBadge() {
    const badge = document.getElementById('locker-badge');
    const count = Object.keys(gameState.collectedProps).length;
    if (count > 0) {
        badge.textContent = count;
        badge.style.display = 'inline-flex';
    } else {
        badge.style.display = 'none';
    }
}

function openPropModal(type) {
    // Auto-collect the prop when viewed
    collectProp(type);

    const body = document.getElementById('prop-modal-body');

    if (type === 'expense') {
        body.innerHTML = `
            <h3 class="prop-title">📊 114 學年度宿營活動 — 財務決算總表（結案版）</h3>
            <div class="finance-header">
                <p>填表單位：114 學年度迎新宿營籌備委員會</p>
                <p>填表人（總務）：<strong>G</strong> │ 覆核人（總籌）：<strong>K、A</strong> │ 複核日期：2025 年 10 月 19 日</p>
            </div>

            <div class="finance-section">
                <h4 class="finance-section-title">💰 壹、收入項目明細</h4>
                <div class="prop-paper">
                    <table class="expense-table">
                        <thead>
                            <tr><th>項目類別</th><th>說明 / 計算基準</th><th>單價 / 單位</th><th>憑證 / 存摸紀錄</th><th>收入金額 (NTD)</th></tr>
                        </thead>
                        <tbody>
                            ${INCOME_ITEMS.map(r => `
                                <tr><td>${r.cat}</td><td>${r.desc}</td><td>${r.unit}</td><td>${r.voucher}</td><td class="amount-cell">${r.amount}</td></tr>
                            `).join('')}
                            <tr class="total-row"><td colspan="4"><strong>收入總計</strong></td><td class="amount-cell"><strong>$ 820,000</strong></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="finance-section">
                <h4 class="finance-section-title">📝 貳、支出項目明細</h4>
                <div class="prop-paper">
                    <table class="expense-table">
                        <thead>
                            <tr><th>項目類別</th><th>支出明細摘要</th><th>原始憑證類型</th><th>報銷單號</th><th>帳面支出金額 (NTD)</th></tr>
                        </thead>
                        <tbody>
                            ${EXPENSE_ITEMS.map(r => `
                                <tr><td>${r.cat}</td><td>${r.desc}</td><td>${r.voucher}</td><td class="invoice-cell">${r.invoiceNo}</td><td class="amount-cell">${r.amount}</td></tr>
                            `).join('')}
                            <tr class="total-row"><td colspan="4"><strong>支出總計</strong></td><td class="amount-cell"><strong>$ 820,000</strong></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="finance-balance">
                <span>收支差額：</span><strong>$ 0</strong><span class="balance-note">(帳目平衡)</span>
            </div>
        `;
    } else if (type === 'patrol') {
        body.innerHTML = `
            <h3 class="prop-title">📋 夜間巡邏簽到簿</h3>
            <div class="finance-header">
                <p><strong>巡邏日期：</strong>2025 年 10 月 3 日夜間</p>
                <p style="margin-top:8px"><strong>巡邏規則：</strong></p>
                <p>為維護夜間安全，安導巡邏採<strong>兩兩一組</strong>，每次巡邏時間為 30 分鐘。</p>
                <p><strong>簽到規定：</strong>巡邏人員請於巡邏前領表或巡邏結束歸還表單時，至營本部簽到處完成簽名。</p>
                <p>桌上備有公用<strong>黑色簽字筆</strong>，請勿隨意攜離。</p>
            </div>
            <div class="prop-paper patrol-paper">
                <table class="patrol-table">
                    <thead>
                        <tr><th>巡邏時段</th><th>預定巡邏區域 / 路線</th><th>巡邏人員 1 (簽名)</th><th>巡邏人員 2 (簽名)</th><th>簽到時間</th><th>營區狀況備註</th></tr>
                    </thead>
                    <tbody>
                        ${PATROL_LOG.map(r => `
                            <tr class="${r.n1Blue || r.n2Blue ? 'patrol-blue-row' : ''}">
                                <td>${r.time}</td>
                                <td>${r.area}</td>
                                <td class="patrol-signature ${r.n1Blue ? 'blue-ink' : 'black-ink'}${r.n1Wobbly ? ' wobbly-text' : ''}">${r.name1}</td>
                                <td class="patrol-signature ${r.n2Blue ? 'blue-ink' : 'black-ink'}${r.n2Wobbly ? ' wobbly-text' : ''}">${r.name2}</td>
                                <td class="patrol-signature black-ink">${r.signTime}</td>
                                <td class="patrol-note-hand">${r.note}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>`;
    } else if (type === 'bracelet') {
        body.innerHTML = `
            <h3 class="prop-title">💎 藍色手鍊</h3>
            <p class="prop-subtitle">在遺體附近的泥土中發現</p>
            <div class="prop-paper" style="text-align:center; padding:30px;">
                <div style="font-size:4rem; margin-bottom:16px;">💎</div>
                <p style="font-size:0.95rem; color:var(--text-secondary); line-height:1.8;">
                    一條<strong>女用藍色串珠手鍊</strong>，上面沾滿了泥土和鏽漬。<br>
                    手鍊的扣環已經斷裂，像是被猛力扯落的。<br>
                    這種手鍊的樣式……在營隊幹部中似曾相識？
                </p>
            </div>`;
    } else if (type === 'real_expense') {
        body.innerHTML = `
            <h3 class="prop-title">📄 廠商實付核對單（內部留存）</h3>
            <p class="prop-subtitle">零散的真實單據，沾了泥土，有兩人簽名</p>
            <div class="finance-header">
                <p><strong>聖心農場迎宿營 — 廠商實付核對單（內部留存）</strong></p>
                <p>⚠️ 此文件沾有泥土痕跡，邊角破損，似乎被刻意掩埋。</p>
            </div>
            <div class="prop-paper">
                <table class="expense-table">
                    <thead>
                        <tr><th>廠商 / 項目</th><th>實際服務內容</th><th>廠商開立實付金額</th><th>憑證編號</th><th>核對狀態</th></tr>
                    </thead>
                    <tbody>
                        ${REAL_EXPENSE_ITEMS.map(r => `
                            <tr><td>${r.vendor}</td><td>${r.desc}</td><td class="amount-cell">${r.amount}</td><td class="invoice-cell">${r.invoiceNo}</td><td>${r.status}</td></tr>
                        `).join('')}
                        <tr class="total-row"><td colspan="2"><strong>實際支出總計</strong></td><td class="amount-cell"></td><td colspan="2"></td></tr>
                    </tbody>
                </table>
            </div>`;
    } else if (type === 'crime_scene_photo') {
        body.innerHTML = `
            <h3 class="prop-title">📷 案發現場照片</h3>
            <p class="prop-subtitle">警方拍攝的案發現場全景</p>
            <div style="border-radius:12px; overflow:hidden; border:1px solid rgba(168,85,247,0.2); margin-top:16px;">
                <img src="crime_scene.jpg" alt="案發現場" style="width:100%; display:block;">
            </div>
            <p style="margin-top:12px; font-size:0.85rem; color:var(--text-secondary); line-height:1.7;">
                遺體在後山廢棄小街的崩塌土坡中被發現。<br>
                現場散落著收據文件，遺體手腕旁有一條藍色手鍊。<br>
                法醫推估死亡時間為 2025/10/3 晚間 22:20 ~ 22:30。
            </p>`;
    } else if (type === 'stationery_list') {
        body.innerHTML = `
            <h3 class="prop-title">🧾 營隊公共文具採購明細</h3>
            <p class="prop-subtitle">總務 G 提供 — 發票品名全為黑色文具</p>
            <div class="prop-paper">
                <table class="expense-table">
                    <thead>
                        <tr><th>項次</th><th>品名與規格摘要</th><th>顏色 / 規格</th><th>數量</th><th>單價</th><th>小計 (NTD)</th><th>配置用途</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td>百樂 0.5 鋼珠筆（盒裝）</td><td><strong>純黑</strong></td><td>3 盒 (36 支)</td><td>$300</td><td>$900</td><td>營本部行政桌、總務核銷專用</td></tr>
                        <tr><td>2</td><td>雄獅 0.7 油性原子筆（盒裝）</td><td><strong>純黑</strong></td><td>4 盒 (48 支)</td><td>$120</td><td>$480</td><td>簽到處（夾板公用筆）、各組公用</td></tr>
                        <tr><td>3</td><td>雄獅 No.600 奇異筆</td><td><strong>黑色</strong></td><td>20 支</td><td>$15</td><td>$300</td><td>小隊名牌書寫、器材標籤標示</td></tr>
                        <tr><td>4</td><td>A4 霧面強力夾板</td><td><strong>黑色</strong></td><td>8 個</td><td>$45</td><td>$360</td><td>夜間巡邏簽到夾板、隊輔評分夾板</td></tr>
                        <tr><td>5</td><td>Double A 影印紙 (70g/A4)</td><td>白色</td><td>2 包</td><td>$120</td><td>$240</td><td>巡邏簽到簿、活動手冊、闖關計分表</td></tr>
                        <tr><td>6</td><td>3M 狠黏便條紙</td><td>黃色</td><td>6 本</td><td>$35</td><td>$210</td><td>營本部留言板、交接備忘錄</td></tr>
                        <tr><td>7</td><td>3M 隱形膠帶 / 封箱膠帶</td><td>透明/棕色</td><td>10 捲</td><td>$40</td><td>$400</td><td>美宣與場地佈置固定</td></tr>
                        <tr class="total-row"><td colspan="5"><strong>合計：共 7 項物資</strong></td><td><strong>$ 2,890</strong></td><td>已全數點交至營本部物資箱</td></tr>
                    </tbody>
                </table>
            </div>
            <p style="margin-top:12px; font-size:0.85rem; color:var(--text-secondary); text-align:center; font-style:italic;">
                ⚠️ 採購清單中無任何藍色筆類品項
            </p>`;
    } else if (type === 'c_testimony') {
        body.innerHTML = `
            <h3 class="prop-title">📝 C 的證詞紀錄</h3>
            <p class="prop-subtitle">器材 C 的口述證詞</p>
            <div class="prop-paper" style="padding:24px; line-height:2;">
                <p><strong>證人：</strong>器材組 C</p>
                <p><strong>時間點：</strong>2025/10/3 約 22:33</p>
                <hr style="border-color:#e0d8c8; margin:12px 0;">
                <p>「22:33 我本來在公共區，隱約聽到廢棄小街傳來爭吵聲，以為是 B 又回來跟 K 吵架，趕過去查看。」</p>
                <p>「結果到了現場，K 已經倒在地上沒氣了……」</p>
                <p>「我太震驚了，逃跑時不小心把手鍊掉在現場。」</p>
                <p>「我不敢報警也不敢跟大家說，怕被認為是兇手。」</p>
                <hr style="border-color:#e0d8c8; margin:12px 0;">
                <p><strong>關鍵目擊：</strong></p>
                <p style="color:#7c3aed; font-weight:600;">「隔天凌晨想回去撿手鍊時，遠遠看到<strong>農場主人 E 也往廢棄小街方向走去</strong>。」</p>
                <p>「再次回到現場時，手鍊和 K 的屍體都不見了。」</p>
            </div>`;
    } else if (type === 'ig_screenshot') {
        body.innerHTML = `
            <h3 class="prop-title">📱 I 的 IG 限時動態截圖</h3>
            <p class="prop-subtitle">器材 C 提供 — 拍攝時間 22:33</p>
            <div style="max-width:360px; margin:16px auto; border-radius:16px; overflow:hidden; border:1px solid rgba(168,85,247,0.2); background:#000;">
                <div style="padding:12px 16px; display:flex; align-items:center; gap:10px; background:linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045); background-size:200% 200%;">
                    <div style="width:36px; height:36px; border-radius:50%; background:#333; display:flex; align-items:center; justify-content:center; font-size:0.8rem; color:#fff; font-weight:700;">I</div>
                    <div>
                        <div style="font-size:0.85rem; color:#fff; font-weight:600;">機動 I</div>
                        <div style="font-size:0.7rem; color:rgba(255,255,255,0.7);">22:33</div>
                    </div>
                </div>
                <div style="padding:30px 20px; background:#1a1a2e; text-align:center;">
                    <div style="font-size:3rem; margin-bottom:12px;">🍻🎲🃏</div>
                    <p style="color:#fff; font-size:1.1rem; font-weight:600; margin-bottom:8px;">酒桌遊戲之夜 🔥</p>
                    <p style="color:#aaa; font-size:0.85rem; line-height:1.6;">和學弟妹們玩到嗨～<br>今晚誰都別想早睡！！！</p>
                    <div style="margin-top:16px; padding:8px 16px; background:rgba(255,255,255,0.1); border-radius:20px; display:inline-block;">
                        <span style="color:#fff; font-size:0.8rem;">📍 營區公共區</span>
                    </div>
                </div>
            </div>
            <div class="prop-paper" style="padding:16px; text-align:center; margin-top:12px;">
                <p style="color:#dc2626; font-weight:700;">⚠️ 矛盾：巡邏簽到簿記載 I 於 22:10 開始巡邏</p>
                <p style="font-size:0.85rem; margin-top:4px;">但此限動顯示 22:33 時 I 正在公共區喝酒玩遊戲</p>
            </div>`;
    } else if (type === 'k_phone') {
        const isUnlocked = gameState.phoneUnlocked || false;
        if (!isUnlocked) {
            body.innerHTML = `
                <div style="max-width:360px; margin:0 auto;">
                    <div style="background:#111; border-radius:24px; overflow:hidden; border:3px solid #333; padding:20px;">
                        <div style="text-align:center; padding:40px 20px 20px;">
                            <div style="font-size:3rem; margin-bottom:16px;">🔒</div>
                            <p style="color:#888; font-size:0.85rem; margin-bottom:4px;">總籌 K 的手機</p>
                            <p style="color:#fff; font-size:1.2rem; font-weight:700; margin-bottom:24px;">請輸入密碼</p>
                            <input type="text" id="phone-password-input"
                                   placeholder="密碼提示：屆數＋日期"
                                   maxlength="10"
                                   style="width:80%; padding:12px 16px; background:#222; border:1px solid #444; border-radius:12px; color:#fff; font-size:1.1rem; text-align:center; letter-spacing:4px;"
                                   onkeydown="if(event.key==='Enter') tryUnlockPhone()">
                            <div id="phone-error" style="color:#ef4444; font-size:0.85rem; margin-top:12px; min-height:20px;"></div>
                            <button onclick="tryUnlockPhone()"
                                    style="margin-top:12px; padding:10px 32px; background:linear-gradient(135deg,#7c3aed,#6d28d9); color:#fff; border:none; border-radius:12px; font-weight:600; cursor:pointer; font-size:0.95rem;">
                                解鎖 →
                            </button>
                        </div>
                    </div>
                </div>`;
        } else {
            renderPhoneUnlocked(body);
        }
    } else if (type === 'torn_notebook') {
        body.innerHTML = `
            <h3 class="prop-title">📓 被撕過的筆記本殘頁</h3>
            <p class="prop-subtitle">女友 B 提供 — K 的營隊筆記（部分頁面已被 G 撕走）</p>
            <div class="prop-paper" style="padding:24px; line-height:2; font-family:var(--font-handwriting, 'Noto Serif TC', serif);">
                <p style="color:#888; font-size:0.8rem; text-decoration:line-through;">（前面數頁已被撕走）</p>
                <hr style="border-color:#e0d8c8; margin:12px 0;">
                <p>10/3 備忘：</p>
                <p>和 G 談完帳的事了，28 萬的缺口太大……</p>
                <p>我叫 G 先不要聲張，我自己來處理。</p>
                <p>今晚約了 A 在廢棄小街談，</p>
                <p>希望可以好好把事情弄清楚。</p>
                <hr style="border-color:#e0d8c8; margin:12px 0;">
                <p style="color:#888; font-size:0.8rem; text-decoration:line-through;">（後面數頁也被撕走）</p>
            </div>
            <p style="margin-top:12px; font-size:0.85rem; color:var(--text-secondary); text-align:center; font-style:italic;">
                ⚠️ G 撕走的部分可能包含更詳細的對帳記錄
            </p>`;
    } else if (type === 'k_ledger') {
        body.innerHTML = `
            <h3 class="prop-title">📋 K 親筆對帳筆記</h3>
            <p class="prop-subtitle">總務 G 保存 — K 案發當晚獨自對帳的手寫筆記</p>
            <div class="prop-paper" style="padding:24px; line-height:2; font-family:var(--font-handwriting, 'Noto Serif TC', serif);">
                <p style="font-weight:700; text-decoration:underline;">10/3 晚 — 對帳核實記錄</p>
                <p>總表支出：$820,000</p>
                <p>實際廠商付款加總：$540,000</p>
                <p style="color:#dc2626; font-weight:700;">差額：$280,000 ← 錢去哪了？？</p>
                <hr style="border-color:#e0d8c8; margin:12px 0;">
                <p style="font-weight:700;">可疑項目：</p>
                <p>1. 農場追加款 $70,000 → E 說沒有這筆追加？？</p>
                <p style="color:#dc2626;">   → A 批的單，E 不知情，錢去了哪裡？</p>
                <p>2. 美宣器材追加 $120,000 → F 說她的預算被砍到只剩 6 萬</p>
                <p style="color:#dc2626;">   → 又是 A 簽核的！12 萬根本沒有到美宣手上！</p>
                <p>3. 其餘零星項目 $90,000 → 全都是 A 經手</p>
                <hr style="border-color:#e0d8c8; margin:12px 0;">
                <p style="color:#7c3aed; font-weight:700;">結論：28 萬全部指向副籌 A！</p>
                <p>今晚我要當面質問他！</p>
            </div>`;
    } else if (type === 'd_photo') {
        body.innerHTML = `
            <h3 class="prop-title">📸 D 衣服沾泥土的側拍照</h3>
            <p class="prop-subtitle">美宣 F 提供 — 拍攝時間約 22:40</p>
            <div style="max-width:380px; margin:16px auto; border-radius:12px; overflow:hidden; border:1px solid rgba(168,85,247,0.2); background:#111; padding:20px; text-align:center;">
                <div style="font-size:4rem; margin-bottom:16px;">👤</div>
                <p style="color:#fff; font-size:1rem; font-weight:600; margin-bottom:8px;">隊輔 D</p>
                <p style="color:#aaa; font-size:0.85rem; line-height:1.8;">
                    衣服和褲管沾滿泥土<br>
                    神情慌張，正急忙往水源處跑<br>
                    手上似乎有紅紅的痕跡
                </p>
                <div style="margin-top:16px; padding:8px 16px; background:rgba(255,255,255,0.08); border-radius:8px; display:inline-block;">
                    <span style="color:#f59e0b; font-size:0.8rem;">⏰ 22:40 · 營區通往水源的小路</span>
                </div>
            </div>
            <div class="prop-paper" style="padding:16px; text-align:center; margin-top:12px;">
                <p style="color:#7c3aed; font-weight:700;">📌 F 的證詞</p>
                <p style="font-size:0.85rem; margin-top:4px; line-height:1.7;">「22:40 左右在回營區的路上看到 D，衣服都是泥土，手上好像有紅紅的。」</p>
            </div>`;
    }

    document.getElementById('prop-modal').classList.add('open');
}

function closePropModal() {
    document.getElementById('prop-modal').classList.remove('open');
}

// ============================================
//  K's PHONE UNLOCK LOGIC
// ============================================
function tryUnlockPhone() {
    const input = document.getElementById('phone-password-input');
    const error = document.getElementById('phone-error');
    const password = input.value.trim();

    // Password: 12 (12屆) + 1003 (10月3日) = 121003
    if (password === '121003') {
        gameState.phoneUnlocked = true;
        saveState();
        // Re-render as unlocked
        const body = document.getElementById('prop-modal-body');
        renderPhoneUnlocked(body);
    } else {
        error.textContent = '❌ 密碼錯誤，請再試一次';
        input.value = '';
        input.style.borderColor = '#ef4444';
        setTimeout(() => { input.style.borderColor = '#444'; error.textContent = ''; }, 2000);
    }
}

function renderPhoneUnlocked(container) {
    container.innerHTML = `
        <div style="max-width:380px; margin:0 auto;">
            <div style="background:#111; border-radius:24px; overflow:hidden; border:3px solid #333;">
                <!-- Phone header -->
                <div style="padding:12px 16px; background:#1a1a2e; display:flex; justify-content:space-between; align-items:center;">
                    <span style="color:#888; font-size:0.75rem;">22:18</span>
                    <span style="color:#fff; font-size:0.85rem; font-weight:600;">📲 K 的訊息</span>
                    <span style="color:#888; font-size:0.75rem;">🔓 已解鎖</span>
                </div>

                <!-- Messages -->
                <div style="padding:16px; background:#0d0d1a; min-height:300px;">
                    <!-- Message to A -->
                    <div style="margin-bottom:20px; padding:14px; background:#1e1535; border-radius:12px; border-left:3px solid #a855f7;">
                        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                            <span style="color:#a855f7; font-weight:700; font-size:0.85rem;">📨 傳送給：副籌 A</span>
                            <span style="color:#666; font-size:0.75rem;">10/3 下午</span>
                        </div>
                        <p style="color:#e0dced; font-size:0.9rem; line-height:1.7;">「10/20 在廢棄小街見面，有些事情我想當面跟你談。」</p>
                        <span style="color:#22c55e; font-size:0.7rem;">✓ 已送出</span>
                    </div>

                    <!-- Message to D -->
                    <div style="margin-bottom:20px; padding:14px; background:#1e1535; border-radius:12px; border-left:3px solid #f59e0b;">
                        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                            <span style="color:#f59e0b; font-weight:700; font-size:0.85rem;">📨 傳送給：隊輔 D</span>
                            <span style="color:#666; font-size:0.75rem;">10/3 22:18</span>
                        </div>
                        <p style="color:#e0dced; font-size:0.9rem; line-height:1.7;">「22:40 到廢棄小街找我，我有話和你說。」</p>
                        <span style="color:#22c55e; font-size:0.7rem;">✓ 已送出</span>
                    </div>

                    <!-- Unsent draft to B -->
                    <div style="padding:14px; background:#1e1535; border-radius:12px; border-left:3px solid #ef4444;">
                        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                            <span style="color:#ef4444; font-weight:700; font-size:0.85rem;">📝 草稿：給 B（未送出）</span>
                            <span style="color:#666; font-size:0.75rem;">10/3 22:15</span>
                        </div>
                        <p style="color:#e0dced; font-size:0.9rem; line-height:1.7; font-style:italic;">「事情全部結束之後我一定什麼都告訴你，再等我一下。」</p>
                        <span style="color:#ef4444; font-size:0.7rem;">✗ 未送出</span>
                    </div>
                </div>

                <!-- Phone bottom bar -->
                <div style="padding:8px; background:#1a1a2e; text-align:center;">
                    <div style="width:40%; height:4px; background:#444; border-radius:2px; margin:0 auto;"></div>
                </div>
            </div>
        </div>
        <div class="prop-paper" style="padding:16px; text-align:center; margin-top:16px;">
            <p style="color:#7c3aed; font-weight:700;">📌 關鍵發現</p>
            <p style="font-size:0.85rem; margin-top:6px; line-height:1.8;">
                K 約了 <strong>副籌 A</strong> 在廢棄小街見面<br>
                K 於 22:18 傳訊要 <strong>隊輔 D</strong> 在 22:40 過去<br>
                K 想告訴 <strong>B</strong> 一切真相，但訊息未送出
            </p>
        </div>`;
}

// ============================================
//  EVIDENCE LOCKER (道具櫃)
// ============================================
function renderLocker() {
    const grid = document.getElementById('locker-grid');
    const empty = document.getElementById('locker-empty');
    const collected = Object.keys(gameState.collectedProps);

    updateLockerBadge();

    if (collected.length === 0) {
        empty.style.display = 'block';
        // Remove any item cards
        grid.querySelectorAll('.locker-item').forEach(el => el.remove());
        return;
    }

    empty.style.display = 'none';
    // Clear existing items
    grid.querySelectorAll('.locker-item').forEach(el => el.remove());

    collected.forEach((propId, index) => {
        const def = PROP_DEFINITIONS[propId];
        if (!def) return;

        const card = document.createElement('div');
        card.className = 'locker-item';
        card.style.setProperty('--delay', `${index * 0.1}s`);
        card.onclick = () => openPropModal(propId);

        card.innerHTML = `
            <div class="locker-item-icon">${def.icon}</div>
            <div class="locker-item-info">
                <h4>${def.name}</h4>
                <span class="locker-item-source">來源：${def.source}</span>
                <p class="locker-item-desc">${def.desc}</p>
            </div>
            <div class="locker-item-action">查看 →</div>
        `;
        grid.appendChild(card);
    });
}

// ============================================
//  PROGRESS
// ============================================
function updateProgress() {
    const total = NPC_DATA.length;
    const done = Object.keys(gameState.questioned).length;
    document.getElementById('progress-fill').style.width = `${(done/total)*100}%`;
    document.getElementById('progress-text').textContent = `已對話 ${done} / ${total} 人`;
}

// ============================================
//  INVESTIGATION LOG
// ============================================
function renderInvestigationLog() {
    const container = document.getElementById('investigation-log-content');
    if (gameState.log.length === 0) {
        container.innerHTML = '<p class="log-empty">尚未進行任何對話。</p>';
        return;
    }
    container.innerHTML = gameState.log.map(entry => {
        const plainAnswer = entry.answer.replace(/<[^>]*>/g, '').replace(/\n/g, ' ');
        return `<div class="log-entry">
            <div class="log-entry-header">
                <span class="log-entry-name">${entry.npcName}</span>
                <span class="log-entry-role">${entry.npcRole}</span>
            </div>
            <div class="log-entry-q">Q：${entry.question}</div>
            <div class="log-entry-a">A：${plainAnswer}</div>
        </div>`;
    }).join('');
}

// ============================================
//  NOTES
// ============================================
function setupNotes() {
    const el = document.getElementById('player-notes');
    if (!el) return;
    el.value = gameState.notes;
    el.addEventListener('input', () => { gameState.notes = el.value; saveState(); });
}

function toggleSidebar() { document.getElementById('sidebar').classList.toggle('open'); }

// ============================================
//  PARTICLES (sunny)
// ============================================
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    window.addEventListener('resize', resize); resize();

    const colors = ['rgba(245,158,11,0.12)','rgba(16,185,129,0.08)','rgba(59,130,246,0.06)','rgba(236,72,153,0.06)','rgba(245,200,60,0.1)'];

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random()*canvas.width; this.y = Math.random()*canvas.height;
            this.size = Math.random()*4+2; this.speedX = (Math.random()-0.5)*0.2;
            this.speedY = -(Math.random()*0.3+0.05); this.opacity = Math.random()*0.5+0.1;
            this.color = colors[Math.floor(Math.random()*colors.length)];
            this.fadeSpeed = Math.random()*0.003+0.001; this.fadingIn = true;
        }
        update() {
            this.x += this.speedX; this.y += this.speedY;
            if (this.fadingIn) { this.opacity += this.fadeSpeed; if (this.opacity >= 0.5) this.fadingIn = false; }
            else { this.opacity -= this.fadeSpeed; if (this.opacity <= 0 || this.y < -10) this.reset(); }
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < -10) this.y = canvas.height + 10;
        }
        draw() {
            ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
            ctx.fillStyle = this.color.replace(/[\d.]+\)$/, `${this.opacity})`); ctx.fill();
        }
    }

    const count = Math.min(50, Math.floor(canvas.width*canvas.height/25000));
    for (let i = 0; i < count; i++) particles.push(new Particle());
    function animate() { ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach(p => { p.update(); p.draw(); }); requestAnimationFrame(animate); }
    animate();
}

// ============================================
//  PHASE 2 TRANSITION TEXT
// ============================================
const TRANSITION_LINES = [
    { text: '深夜，營區下起了一場毫無預兆的暴雨……', delay: 0, cls: '' },
    { text: '大雨沖刷了一整夜，也沖開了被埋藏了一整年的秘密。', delay: 2500, cls: '' },
    { text: '', delay: 4500, cls: '' },
    { text: '今日清晨，後山廢棄小街的土坡發生嚴重崩塌，', delay: 5000, cls: '' },
    { text: '濕黏的黑土之中，露出了……一具冰冷屍骨與殘破的宿營外套。', delay: 7000, cls: 'dramatic' },
    { text: '', delay: 9000, cls: '' },
    { text: '經過警方現場初步勘驗，證實死者正是——', delay: 10000, cls: '' },
    { text: '一年前突然「無故失蹤」的總籌 K。', delay: 12000, cls: 'highlight' },
    { text: '', delay: 14000, cls: '' },
    { text: '他根本沒有拋下大家跑路，', delay: 15000, cls: '' },
    { text: '他從一年前的那狂歡之夜，就一直安靜地躺在這片漆黑的土坡下……', delay: 17000, cls: 'dramatic' },
    { text: '', delay: 19500, cls: '' },
    { text: '法醫初步推估，死亡時間為 2025 年 10 月 3 日 晚間 22:20 至 22:30。', delay: 20500, cls: '' },
    { text: '他的脖子上有著極深的勒痕與生前打鬥的痕跡……', delay: 23000, cls: '' },
    { text: '這不是意外，這是一場謀殺。', delay: 25500, cls: 'highlight' },
    { text: '', delay: 27500, cls: '' },
    { text: '究竟是誰，在那個雨夜裡痛下殺手？', delay: 28500, cls: '' },
    { text: '又是誰，親手將他掩埋？', delay: 30500, cls: '' },
    { text: '', delay: 32000, cls: '' },
    { text: '當年的兇手，現在……正站在你們之中。', delay: 33000, cls: 'highlight' },
];

// ============================================
//  PHASE 2 TRIGGER LOGIC
// ============================================
let transitionTimeouts = [];

function checkPhase2Trigger() {
    if (gameState.phase !== 1) return;
    const allDone = Object.keys(gameState.questioned).length >= NPC_DATA.length;
    if (!allDone) return;

    // Start 3-minute countdown if not already started
    if (!gameState.phase2TimerId) {
        console.log('All NPCs interviewed. Starting 3-minute Phase 2 countdown...');
        gameState.phase2TimerId = setTimeout(() => {
            if (gameState.phase === 1) {
                closeNpcModal();
                closeClueModal();
                closePropModal();
                startPhase2Transition();
            }
        }, 180000); // 3 minutes
    }
}

function onHandbookKClick() {
    if (gameState.phase !== 1) return;
    const allDone = Object.keys(gameState.questioned).length >= NPC_DATA.length;
    if (!allDone) return;

    // Cancel the timer if running
    if (gameState.phase2TimerId) {
        clearTimeout(gameState.phase2TimerId);
        gameState.phase2TimerId = null;
    }

    // Close the handbook modal first, then start transition after DOM updates
    closeClueModal();
    setTimeout(() => {
        startPhase2Transition();
    }, 400);
}

// ============================================
//  PHASE 2 TRANSITION ANIMATION
// ============================================
function startPhase2Transition() {
    if (gameState.phase !== 1) return;
    gameState.phase = 2;
    saveState();

    // Show report button in sidebar
    document.getElementById('report-btn').style.display = '';

    // Hide all screens and show transition
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('phase2-transition').classList.add('active');
    document.body.style.overflow = 'hidden';

    const container = document.getElementById('transition-text-container');
    container.innerHTML = '';

    // Create all line elements
    TRANSITION_LINES.forEach((line, i) => {
        if (line.text === '') {
            const spacer = document.createElement('div');
            spacer.style.height = '20px';
            container.appendChild(spacer);
            return;
        }
        const el = document.createElement('div');
        el.className = `transition-line ${line.cls}`;
        el.textContent = line.text;
        container.appendChild(el);

        const tid = setTimeout(() => {
            el.classList.add('visible');
            // Auto-scroll to latest line
            container.scrollTop = container.scrollHeight;
        }, line.delay);
        transitionTimeouts.push(tid);
    });

    // Auto-advance after all text shown
    const lastDelay = TRANSITION_LINES[TRANSITION_LINES.length - 1].delay;
    const endTid = setTimeout(() => {
        showEvidenceScene();
    }, lastDelay + 5000);
    transitionTimeouts.push(endTid);

    // Show skip button after 3 seconds
    const skipBtn = document.getElementById('transition-skip');
    skipBtn.style.display = 'none';
    setTimeout(() => { skipBtn.style.display = 'block'; }, 3000);
}

function skipTransition() {
    transitionTimeouts.forEach(t => clearTimeout(t));
    transitionTimeouts = [];
    // Show all text immediately
    document.querySelectorAll('.transition-line').forEach(el => el.classList.add('visible'));
    setTimeout(() => showEvidenceScene(), 1000);
}

// ============================================
//  PHASE 2 EVIDENCE SCENE
// ============================================
function showEvidenceScene() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('phase2-evidence').classList.add('active');
    document.body.classList.add('phase2');
    document.body.style.overflow = '';

    // Auto-collect the crime scene photo into evidence locker
    if (!gameState.collectedProps['crime_scene_photo']) {
        collectProp('crime_scene_photo');
    }
}

function collectEvidenceItem(propId) {
    const hotspot = document.getElementById(`hotspot-${propId}`);
    if (!hotspot || hotspot.classList.contains('collected')) return;

    // Collect into locker
    collectProp(propId);

    // Mark hotspot as collected with visual feedback
    hotspot.classList.add('collected');
    hotspot.classList.remove('evidence-hotspot-hidden');

    // Show hint text
    const hint = document.getElementById('evidence-collected-hint');
    const def = PROP_DEFINITIONS[propId];
    if (hint && def) {
        hint.textContent = `✅ 已收集：${def.icon} ${def.name}`;
        hint.style.animation = 'fadeInUp 0.4s var(--ease-smooth)';
    }

    // Check if all evidence collected
    const allCollected = ['bracelet', 'real_expense'].every(
        id => document.getElementById(`hotspot-${id}`)?.classList.contains('collected')
    );
    if (allCollected) {
        const btn = document.getElementById('evidence-continue-btn');
        btn.style.display = 'inline-flex';
        btn.style.animation = 'fadeInUp 0.5s var(--ease-smooth)';
        if (hint) hint.textContent = '✅ 所有證物已收集完畢！';
    }
}

// ============================================
//  ENTER PHASE 2 GAME
// ============================================
function enterPhase2Game() {
    document.body.classList.add('phase2');
    gameState.phase = 2;
    saveState();

    // Update the game screen UI for Phase 2
    document.querySelector('.sidebar-header h3').textContent = '🔍 偵查進度';
    document.querySelector('.case-file-tag').textContent = '🔍 INVESTIGATION';
    document.querySelector('.briefing-header h2')?.textContent;

    // Show the game screen
    showScreen('game-screen');

    // Update the NPC grid to show Phase 2 mode
    renderNpcGrid();
    renderLocker();
    updateProgress();
}

// ============================================
//  PHASE 2 NPC DIALOG (evidence submit + keyword)
// ============================================
function openPhase2NpcModal(npcId) {
    const npc = NPC_DATA.find(n => n.id === npcId);
    if (!npc) return;
    gameState.currentNpc = npc;

    document.getElementById('npc-dialog-avatar').innerHTML = `<img src="${npc.avatar}" alt="${npc.name}">`;
    document.getElementById('npc-dialog-name').textContent = npc.name;
    document.getElementById('npc-dialog-role').textContent = npc.role;
    document.getElementById('npc-dialog-desc').textContent = '';

    const body = document.getElementById('npc-dialog-body');

    // Build evidence select options from collected props
    const collected = Object.keys(gameState.collectedProps);
    const evidenceOptions = collected.map(propId => {
        const def = PROP_DEFINITIONS[propId];
        return def ? `<option value="${propId}">${def.icon} ${def.name}</option>` : '';
    }).join('');

    body.innerHTML = `
        <div class="p2-submit-section" style="animation: fadeInUp 0.4s var(--ease-smooth);">
            <h4>🔍 證物提交</h4>
            <select class="p2-evidence-select" id="p2-evidence-select">
                <option value="">— 選擇要出示的證物 —</option>
                ${evidenceOptions}
            </select>

            <h4 style="margin-top:16px;">💬 提問</h4>
            <input type="text" class="p2-question-input" id="p2-question-input"
                   placeholder="輸入關鍵字或問題（例如：手鍊、支出、巡邏…）"
                   onkeydown="if(event.key==='Enter') submitPhase2Question('${npc.id}')">

            <button class="p2-submit-btn" id="p2-submit-btn" onclick="submitPhase2Question('${npc.id}')">
                提交詢問 ➜
            </button>

            <div id="p2-response-area"></div>
        </div>
    `;

    document.getElementById('npc-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function submitPhase2Question(npcId) {
    const evidenceSelect = document.getElementById('p2-evidence-select');
    const questionInput = document.getElementById('p2-question-input');
    const responseArea = document.getElementById('p2-response-area');

    const selectedEvidence = evidenceSelect.value;
    const question = questionInput.value.trim();

    // Must select evidence to submit
    if (!selectedEvidence) {
        responseArea.innerHTML = `<div class="p2-response" style="border-left-color:#f59e0b;">
            <p style="color:#f59e0b;">⚠️ 請先選擇要出示的證物。</p>
        </div>`;
        return;
    }

    const npc = NPC_DATA.find(n => n.id === npcId);
    const evidenceName = PROP_DEFINITIONS[selectedEvidence]?.name || '未知';

    // Match dialogue using the new system
    const result = matchPhase2Dialogue(npcId, selectedEvidence, question);

    responseArea.innerHTML = `
        <div class="p2-response" style="animation: fadeInUp 0.4s var(--ease-smooth);">
            <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:8px;">📎 出示證物：${evidenceName}</p>
            ${question ? `<p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:8px;">❓ 提問：${question}</p>` : ''}
            <div class="answer-text" id="p2-typing-area"></div>
        </div>
    `;

    // Typing effect for the response
    typeText(result.response, document.getElementById('p2-typing-area'), () => {
        // If this dialogue gives a new prop, collect it and show notification
        if (result.givesProp && !gameState.collectedProps[result.givesProp]) {
            collectProp(result.givesProp);
            renderLocker();
            const propDef = PROP_DEFINITIONS[result.givesProp];
            if (propDef) {
                const notice = document.createElement('div');
                notice.className = 'p2-prop-notice';
                notice.style.animation = 'fadeInUp 0.5s var(--ease-smooth)';
                notice.innerHTML = `🧾 <strong>獲得新證物：${propDef.icon} ${propDef.name}</strong><br><span style="font-size:0.8rem; opacity:0.7;">已加入道具櫃，可隨時查看</span>`;
                document.getElementById('p2-response-area').appendChild(notice);
            }
        }
    });

    // Log the interaction
    gameState.log.push({
        npcId, npcName: npc.name, npcRole: npc.role,
        question: `[Phase2] 證物:${evidenceName} | 問題:${question || '無'}`,
        answer: result.response, timestamp: Date.now()
    });
    saveState();
    renderInvestigationLog();

    // Clear input
    questionInput.value = '';
}

// ============================================
//  PHASE 2 DIALOGUE DATA
// ============================================
// Each NPC has an array of dialogue entries:
//   evidence: required prop ID (string)
//   keywords: optional array of keywords — if present, question must contain at least one
//   response: the NPC's reply (HTML string)
//
// Matching rules:
//   1. If entry has keywords → evidence must match AND question must contain ≥1 keyword
//   2. If entry has NO keywords → evidence match alone triggers the dialogue
//   3. If no entry matches → fall back to default response

const PHASE2_DIALOGUES = {
    'A': [
        {
            evidence: 'patrol',
            keywords: ['藍筆', '簽名',],
            response: '<span class="stage-direction">（微微皺眉，語氣帶著幹部主管的嚴厲）</span>這張巡邏簽到簿是我 22:10 簽的沒錯。\n營本部桌面上的文具本來就是各股隨便放、隨便用的，公關拉贊助的筆、活動組留下來的筆全堆在那裡，有一兩枝藍筆很正常吧？\n我簽完名後，22:10 到 22:40 整個時段都在營區周邊巡邏維安。你們不去廢棄小街找兇手，反而盯著簽到簿上一點點墨水顏色看，是不是方向搞錯了？'
        },
        {
            evidence: 'k_phone',
            keywords: ['約', '訊息', '見面', '廢棄小街', '10:20','巡邏','K','手機'],
            response: '<span class="stage-direction">（臉色一沉，隨即冷笑一聲）</span>這能證明什麼？他那晚 22:20 是有約我，但他電話中講的莫名其妙，說什麼帳目有問題要找我聊。我那時正準備去巡邏，覺得他在發瘋，根本就沒理他，我也完全沒去什麼廢棄小街！\n<span class="stage-direction">（眼神閃過一絲陰險，主動甩鍋給 D）</span>要我說，你們該去查查 D 吧？他妹妹醫藥費欠了那麼多錢，那一晚在營區就神祕兮兮的。還有，K 那陣子私底下經常找 D，說不定是他發現 D 偷偷動了公款，兩個人在廢棄小街談判撕破臉呢？'
        },
    ],
    'G': [
        {
            evidence: 'real_expense',
            keywords: ['54萬', '82萬', '28萬', '資金缺口', '實際支出', '缺口','差額','不同','不一樣'],
            response: '<span class="stage-direction">（雙膝一軟當場下跪，捂著臉痛哭流涕）</span>「不是我！我真的沒有拿那筆錢！但我真的不知道……不知道那 28 萬為什麼會莫名其妙就不見了！\n那時候 K 發現了這個大缺口，他怕事情鬧大影響營隊，也怕大家慌張，私下跑來跟我說：『G，這件事你先壓下來，帳先別報上去，我會自己想辦法處理……』\n<span class="stage-direction">（泣不成聲，猛捶地）</span>可是……可是 K 那晚突然就不見了！我當初以為是他根本補不上這個窟窿，被這 28 萬的壓力逼到絕路跑路了……我覺得都是我沒把帳管好、是我害了他！我心裡太自責、太害怕了，才熬夜做假的支出表想把這筆缺口蓋過去，我只是不想讓系上跟警察查到這筆帳、毀了 K 的名聲……我真的沒有殺人啊！」'
        },
        {
            evidence: 'expense',
            keywords: ['54萬', '82萬', '28萬', '資金缺口', '實際支出', '缺口','差額','不同','不一樣'],
            response: '<span class="stage-direction">（雙膝一軟當場下跪，捂著臉痛哭流涕）</span>「不是我！我真的沒有拿那筆錢！但我真的不知道……不知道那 28 萬為什麼會莫名其妙就不見了！\n那時候 K 發現了這個大缺口，他怕事情鬧大影響營隊，也怕大家慌張，私下跑來跟我說：『G，這件事你先壓下來，帳先別報上去，我會自己想辦法處理……』\n<span class="stage-direction">（泣不成聲，猛捶地）</span>可是……可是 K 那晚突然就不見了！我當初以為是他根本補不上這個窟窿，被這 28 萬的壓力逼到絕路跑路了……我覺得都是我沒把帳管好、是我害了他！我心裡太自責、太害怕了，才熬夜做假的支出表想把這筆缺口蓋過去，我只是不想讓系上跟警察查到這筆帳、毀了 K 的名聲……我真的沒有殺人啊！」'
        },
        {
            evidence: 'patrol',
            keywords: ['藍色原子筆', '藍筆', '筆跡'],
            givesProp: 'stationery_list',
            response: '<span class="stage-direction">（神經質地狂摳手指，眼珠快速轉動，聲音尖銳慌張）</span>「不可能！絕對不可能！我做總務最注重的就是細節和規矩！\n那時候所有的公共文具都是我一手包辦、一箱一箱去大賣場比價買的！簽到處這種正式文件，我當年初審預算時就規定只許用黑色水性筆跟黑油筆，我根本完全沒有採購過任何一枝藍色原子筆！連這個牌子的藍筆我們營隊都沒有進過！\n<span class="stage-direction">（急忙翻找口袋與夾板，遞出一張折好的發票清單）</span>\n不信你們自己看這張『營隊公共文具採購明細』！上面發票跟品名寫得清清楚楚，全部都是黑色文具！那枝藍筆絕對是簽名的人自己私下帶過去的！你們不要什麼事都算在我頭上！」'
        },
        {
            evidence: 'torn_notebook',
            response: '<span class="stage-direction">（雙手發抖地接過殘頁，盯著 K 的字跡，眼淚狂飆、聲音發顫）</span>「這……這是 K 留下來的？他……他到最後一刻都還相信我沒有拿錢……還想著要保護營隊、幫我把缺口補齊……我居然還以為他是自己跑路了……\n<span class="stage-direction">（崩潰捂臉大哭，極度悔恨與自責）</span>\n我對不起 K……我真的對不起他！這一年來我每天晚上都睡不好，我總覺得是我害死了他……\n那時候案發，我太害怕了，我把電腦裡所有的真支出表、單據全部刪光了……我以為這樣就能當作什麼都沒發生過……\n<span class="stage-direction">（慌忙從衣服最裡層、貼著心口的小口袋，掏出一頁折得極小、已經有些泛黃破損的筆記）</span>\n但我唯一不敢燒掉的……就是這頁……這是 K 當晚在辦公室一個人對帳時寫下的『對帳筆記』。\n我這次回農場，就是想著……如果在後山能遇到他的冤魂，我想親手把它燒給他，跟他說一聲對不起……你們拿去吧！這上面記著 K 當晚核對出來的真實數字，7 萬農場追加款跟 12 萬美宣授權真的有問題！求你們幫 K 找出真正的真相……」'
        },
    ],
    'B': [
        {
            evidence: 'bracelet',
            response: '<span class="stage-direction">（看到手鍊的瞬間，整個人僵住，眼眶瞬間泛紅）</span>這真的是我的手鍊……\n<span class="stage-direction">（聲音顫抖）</span>我那天和她大吵一架，把手鍊丟在了地上，難道他後來有撿起來？\n<span class="stage-direction">（痛哭）</span>我真的不知道……但我記得我下午氣沖沖離開時，有看到 F 也是一臉氣憤地去找總籌！'
        },
        {
            evidence: 'k_phone',
            keywords: ['B', '未送出', '訊息', '告訴', '草稿','K'],
            givesProp: 'torn_notebook',
            response: '<span class="stage-direction">（看到手機上未發送的訊息，整個人崩潰痛哭）</span>原來他最後傳訊息說要告訴我一切，他不是故意不回的……\n這個重情重意的傻瓜，什麼事都自己扛著，什麼都不告訴我，我也可以幫忙分擔一點啊，那麼好的人怎麼就這樣走了呢！他那麼重感情，應該不可能得罪別人啊？而且還被下了殺手，我真的不理解。\n不管怎樣，我一定要幫他找到真兇，讓他在九泉之下安心暝目。讓我回憶一下有什麼奇怪的地方……\n<span class="stage-direction">（突然想起什麼，眼神一亮）</span>對了！K 剛失蹤那天，總務 G 表現得超級慌張，還主動說要幫忙整理 K 的物品，好像還趁我不注意的時候撕了幾頁 K 當時的營隊筆記，但被我發現就神色匆忙的找了個藉口走了，就是這本！感覺有點可疑……'
        },
    ],
    'C': [
        {
            evidence: 'bracelet',
            keywords: ['F看到', 'F說', '撿', '撿起', '手鍊', '美宣','F'],
            givesProp: 'c_testimony',
            response: '<span class="stage-direction">（臉色慘白，雙手不停發抖）</span>對……是我撿走的，我當時因為嫉妒心作祟想佔為己有。但我真的沒殺人！\n22:30 我本來正在公共區，和 I 他們一起玩酒桌遊戲，但去廁所時，隱約聽到廢棄小街有爭吵聲，以為是 B 又回來跟 K 吵，趕過去看，結果 K 已經倒在地上沒氣了！\n應該是那時我太震驚了，逃跑時不小心把手鍊掉在現場。但我真的沒殺人！但我也不敢報警或和大家說，怕被大家認為我是兇手。\n回去之後才發現手鍊不見了，本想著隔天早上起早一點把他撿回來，沒想到卻遠遠的看到 E 也往那邊過去，我怕被發現，就躲回房間了。\n<span class="stage-direction">（聲音越來越小）</span>結果再回到現場時卻發現不只找不到手鍊，連 K 的屍體也都不見了，都讓我懷疑我是不是壓力太大出現幻覺了……'
        },
        {
            evidence: 'patrol',
            keywords: ['公共區', '巡邏表', '巡邏', 'I','22:30'],
            givesProp: 'ig_screenshot',
            response: '<span class="stage-direction">（突然想到什麼，眼睛一亮）</span>對了！你們要問公共區的狀況？我走的時候 I 還在和學弟妹玩酒桌遊戲呢！哪有在巡邏！\n沒記錯的話他還發了限動呢！你看！\n<span class="stage-direction">（翻出手機，秀出截圖）</span>\n他巡邏表上寫 22:10 在巡邏絕對是假的！那個時間他根本在喝酒！'
        },
    ],
    'D': [
        {
            evidence: '*',
            keywords: ['髒衣', '魂不守舍', '泥土', '衣服髒', '髒','血','衣服'],
            response: '<span class="stage-direction">（眼神閃躲，搓著手）</span>喔……那個是……我當時在後山額不是反正就是營區附近走走，結果自己不小心摔倒了，所以衣服才會都是土啦……\n<span class="stage-direction">（乾笑一聲）</span>額你說表情不太好嗎？那是……就……我那時心情不太好啦，哈哈。'
        },
        {
            evidence: '*',
            keywords: ['家庭', '妹妹', '打工', '忙', '醫藥費'],
            response: '去年確實是挺忙的，下課去打工，還接了一個營隊幹部。你問我的家庭狀況？哦……我有一個妹妹。\n<span class="stage-direction">（眼神慌亂地游移，雙手緊抓著衣角，語速突然變快、帶著明顯的防禦心）</span>\n她……她身體不太好，常常要跑醫院，所以我才需要多兼幾份差賺生活費。但這有犯法嗎？我自己的家庭問題，我自己打工賺錢承擔，我有偷過系上或營隊的一毛錢嗎？\n<span class="stage-direction">（下意識後退一步，聲音發抖但極力裝出兇狠的樣子掩飾心虛）</span>\n我……我承認我常缺席開會，但我該搬的器材一樣都沒少搬！你們幹嘛一直盯著我的家境問？這跟命案到底有什麼關係？我根本沒有拿不屬於我的東西，你們少在那邊用同情又懷疑的眼光看我！'
        },
        {
            evidence: 'k_phone',
            response: '<span class="stage-direction">（臉色慘白，雙膝一軟差點站不穩，眼眶泛紅痛哭）</span>「那天他確實有傳訊息叫我去廢棄小街找他……我有去，但我真的沒有殺人！\n我大概 22:25 走到廢棄小街附近，遠遠就聽到 K 和另一個人在激烈爭吵！我太膽小了，根本不敢上前，只能躲在轉角發抖。直到四周完全安靜、那個人離開後，我才敢走過去看……沒想到……K 已經倒在土堆旁沒氣了……\n<span class="stage-direction">（回想起畫面渾身發抖）</span>\n我看到他身邊放著裝有五萬元的牛皮紙袋和信，信裡 K 叫我把錢拿去救妹妹。我拿走錢和信，是不想讓大家知道 K 是為了我才挪用公款、遭遇不測，我想保護他的名聲！\n在跑回營區的路上才被美宣 F 撞見。我真的只是拿了救命錢，求求你們相信我，人真的不是我殺的！」'
        },
    ],
    'F': [
        {
            evidence: 'bracelet',
            keywords: ['B有看到', '看到你', '看到', 'B說', '氣憤', '去找總籌', '去找K','B'],
            response: '喔～好像有這件事。我那天喝了點酒，又想起 K 莫名其妙的砍我預算的破事，一時衝動，想要去叫他給我講清楚到底為什麼，所以表情可能沒有那麼友善。\n話說回來那條藍色項鍊我倒是蠻有印象的，B 好像無時無刻都帶著吧？不過宿營後好像就沒有了，也有可能是我記錯了？\n<span class="stage-direction">（突然壓低聲音，湊近）</span>話說回來那天和 B 擦身而過後，我有遠遠的看到 C 從地上撿起了什麼，還小心翼翼地好像怕人發現一樣，感覺有點可疑……'
        },
        {
            evidence: '*',
            keywords: ['D', '時間', '22:40', '泥土', '髒', '衣服', '撞見', '目擊'],
            givesProp: 'd_photo',
            response: '<span class="stage-direction">（回想了一下，認真地點頭）</span>是我回營區的路上，大約是 22:40 左右。當時他衣服都是泥土，手上好像有紅紅的。\n<span class="stage-direction">（低下頭，聲音變小）</span>我當時氣瘋了又很害怕，以為是我最後講的重話逼死了 K，才在第一階段一直把嫌疑推給 D。\n其實我那天有用手機隨手拍了一張照片……你拿去吧。'
        },
    ],
    'I': [
        {
            evidence: 'ig_screenshot',
            response: '<span class="stage-direction">（狂擦冷汗，整個人癱軟在椅子上）</span>好啦！我承認我當晚 22:00-22:30 都在喝酒，根本沒去巡邏，紀錄是我後來補簽的！\n<span class="stage-direction">（突然壓低聲音，左顧右盼）</span>但我 22:40 補簽完、在營本部後方遇到副籌 A，他的右邊袖口竟然裂開了，整個人喘得很厲害，眼神超恐怖。\n他還威脅我，如果我敢把我曠職的事情說出去，他就要讓我被退學。嚇死我了。'
        },
    ],
    'E': [
        {
            evidence: 'c_testimony',
            keywords: ['C看到', 'C說', '目擊', '凌晨', '廢棄小街', '屍體', '埋','C'],
            givesProp: 'k_phone',
            response: '<span class="stage-direction">（手抖著點了根菸，深深吸一口）</span>唉……其實我那天早上巡邏時便發現他倒在了廢棄小街上，我連忙上前看看還有沒有救，但明顯已經走一段時間了，周邊文件散落一地。\n這可憐孩子啊……為了這個營隊操碎了心，卻換來這個果，真的是……\n<span class="stage-direction">（語氣沉重）</span>我當下也是想要替這孩子討回公道……但一想到這樣我和老伴花了大半輩子辛辛苦苦經營的農場會因此受到影響，一時鬼迷心竅、糊塗了，才決定把他給埋了……\n我真的很對不起他啊……\n<span class="stage-direction">（從抽屜深處小心翼翼地取出一部手機）</span>我最後能為他做的就只有把他的手機收起來好好保管，相信裡面有一些有關真兇的線索，但我一直解不出密碼。但或許聰明的小偵探你們可以，這就是他的手機，解出密碼，幫這可憐的孩子討回公道吧！'
        },
    ],
};

// Default responses when no specific dialogue matches
const PHASE2_DEFAULT_RESPONSES = {
    'A': '……<span class="stage-direction">（沉默了很久，眼神迴避）</span>我不知道你在說什麼。',
    'G': '什、什麼！？<span class="stage-direction">（驚慌失措）</span>這跟我沒有關係！我什麼都不知道！',
    'B': '<span class="stage-direction">（眼眶泛紅）</span>……K 他……真的已經不在了嗎？',
    'C': '<span class="stage-direction">（顫抖著）</span>不……不可能的……',
    'D': '<span class="stage-direction">（面無表情，但雙手微微發抖）</span>……',
    'F': '天啊……<span class="stage-direction">（掩面）</span>怎麼會這樣……',
    'I': '<span class="stage-direction">（神情凝重）</span>……那天晚上的巡邏……我記得一些事情。',
    'E': '<span class="stage-direction">（嘆氣）</span>這片山，埋了太多秘密。',
};

function matchPhase2Dialogue(npcId, evidenceId, question) {
    const dialogues = PHASE2_DIALOGUES[npcId] || [];

    for (const entry of dialogues) {
        // Evidence must match (or use '*' for any evidence)
        if (entry.evidence !== '*' && entry.evidence !== evidenceId) continue;

        // If entry has keywords, question must contain at least one
        if (entry.keywords && entry.keywords.length > 0) {
            const q = question.toLowerCase();
            const matched = entry.keywords.some(kw => q.includes(kw.toLowerCase()));
            if (!matched) continue;
        }

        // Match found!
        return { response: entry.response, matched: true, givesProp: entry.givesProp || null };
    }

    // No match — return default
    const fallback = PHASE2_DEFAULT_RESPONSES[npcId] || '……<span class="stage-direction">（沉默）</span>';
    return { response: fallback, matched: false };
}

// Override openNpcModal for Phase 2
const _originalOpenNpcModal = openNpcModal;
function openNpcModalRouter(npcId) {
    if (gameState.phase >= 2) {
        openPhase2NpcModal(npcId);
    } else {
        _originalOpenNpcModal(npcId);
    }
}

// ============================================
//  KEYBOARD
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeNpcModal(); closeClueModal(); closePropModal(); closeReportModal(); }
});

// ============================================
//  REPORT CRIMINAL (舉報犯人)
// ============================================
let selectedSuspect = null;

function openReportModal() {
    const grid = document.getElementById('report-npc-grid');
    const body = document.getElementById('report-modal-body');
    const result = document.getElementById('report-result');

    // Reset
    body.style.display = 'block';
    result.style.display = 'none';
    selectedSuspect = null;

    // Build NPC cards
    grid.innerHTML = NPC_DATA.map(npc => `
        <div class="report-npc-card" id="report-card-${npc.id}" onclick="selectReportSuspect('${npc.id}')">
            <img src="${npc.avatar}" alt="${npc.name}">
            <span class="npc-name">${npc.name}</span>
            <span class="npc-role">${npc.role}</span>
        </div>
    `).join('');

    // Add confirm button
    grid.insertAdjacentHTML('afterend',
        document.getElementById('report-confirm-area') ? '' :
        `<div class="report-confirm-area" id="report-confirm-area">
            <button class="report-confirm-btn" id="report-confirm-btn" disabled onclick="confirmReport()">
                確認舉報 🚨
            </button>
        </div>`
    );

    document.getElementById('report-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeReportModal() {
    document.getElementById('report-modal').classList.remove('open');
    document.body.style.overflow = '';
}

function selectReportSuspect(npcId) {
    // Deselect all
    document.querySelectorAll('.report-npc-card').forEach(c => c.classList.remove('selected'));
    // Select this one
    document.getElementById(`report-card-${npcId}`).classList.add('selected');
    selectedSuspect = npcId;
    // Enable confirm button
    const btn = document.getElementById('report-confirm-btn');
    if (btn) btn.disabled = false;
}

function confirmReport() {
    if (!selectedSuspect) return;

    const npc = NPC_DATA.find(n => n.id === selectedSuspect);
    const body = document.getElementById('report-modal-body');
    const result = document.getElementById('report-result');

    // Calculate play time
    const elapsed = Date.now() - (gameState.startTime || Date.now());
    const totalSec = Math.floor(elapsed / 1000);
    const hours = Math.floor(totalSec / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = totalSec % 60;
    const timeStr = hours > 0
        ? `${hours} 時 ${String(minutes).padStart(2,'0')} 分 ${String(seconds).padStart(2,'0')} 秒`
        : `${minutes} 分 ${String(seconds).padStart(2,'0')} 秒`;

    // Save report
    gameState.reportedSuspect = selectedSuspect;
    gameState.reportTime = Date.now();
    saveState();

    // Hide selection, show result
    body.style.display = 'none';
    result.style.display = 'block';
    result.innerHTML = `
        <div class="report-result-screen" style="animation: fadeInUp 0.6s var(--ease-smooth);">
            <div class="result-icon">🔍</div>
            <div class="result-title">舉報已提交</div>
            <div class="result-suspect">
                你指認的兇手是：<strong>${npc.name}（${npc.role}）</strong>
            </div>
            <img src="${npc.avatar}" alt="${npc.name}" style="width:80px; height:80px; border-radius:50%; border:3px solid var(--accent-primary); margin-bottom:20px;">
            <div style="margin-top:16px;">
                <div class="timer-display">
                    <span class="timer-label">⏱️ 總遊玩時長</span>
                    <span class="timer-value">${timeStr}</span>
                </div>
            </div>
            <p style="margin-top:24px; font-size:0.85rem; color:var(--text-secondary); line-height:1.8;">
                感謝你的偵查！<br>真相是否如你所想？請等待主持人公布結果。
            </p>
        </div>
    `;
}

// ============================================
//  INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initParticles();
    setupNotes();

    // Start background timer if not already started
    if (!gameState.startTime) {
        gameState.startTime = Date.now();
        saveState();
    }

    // If already in Phase 2 on reload, restore dark theme and show report button
    if (gameState.phase >= 2) {
        document.body.classList.add('phase2');
        document.querySelector('.sidebar-header h3').textContent = '🔍 偵查進度';
        document.querySelector('.case-file-tag').textContent = '🔍 INVESTIGATION';
        document.getElementById('report-btn').style.display = '';
    }
});
