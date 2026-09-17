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
        name: '副籌 牛萊',
        hiddenLabel: '幹部 ①',
        role: '副籌',
        avatar: 'npc_a.png',
        intro: '哈囉學弟妹大家好！我是牛萊，也是迎新宿營的副籌！大家都叫我牛萊啦，因為我這人做事一向踏實又配合，家裡跟系上老師都誇我是最讓人放心的乖孩子。 辦營隊真的很辛苦，身為副籌，我主要就是幫總籌分擔各種雜事，一邊要盯籌備進度。大家在前面玩得開心，其實很多對外溝通都是我一肩扛下來的！你們如果有遇到不懂的，隨時問我這個可靠的副籌就對了',
        questions: [
            {
                q: '在營隊籌備過程中有遇到困難嗎？',
                a: '<span class="stage-direction">（微笑、嘆氣）</span>有啊！怎麼可能沒有？\n 營隊都快舉辦了，總務突然說要砍美宣的預算，美宣當場爆氣，導致兩邊快打起來了，我那時勸架勸的可辛苦了，一邊安撫美宣、一邊勸總務冷靜，花了好大力氣才把場面壓下來。\n所以說...營隊能辦成功也是不容易啊..'
            },
            {
                q: '大家在營隊籌備期間都順利嗎？',
                a: '<span class="stage-direction">（溫和地笑）</span>還算順利吧!有時大家也會一起聚餐\n\n不過...器攝組長倒是常常沒出現，好像是家裡有一些狀況吧?後來才知道他家裡好像蠻缺錢的？那時候K人很好，還特地找我商量要怎麼私下幫幫他呢！'
            }
        ]
    },
    {
        id: 'G',
        name: '總務 統神',
        hiddenLabel: '幹部 ②',
        role: '總務',
        avatar: 'npc_g.png',
        intro: '欸大家好，我是之前的總務！大家都叫我統神，因為整個營隊幾十萬的現金、發票、收據，全都是我一個人在算的！身為總務，我就是要把關所有人的預算，誰超支我就砍誰，絕對沒有通融的空間！你們這屆如果有人敢亂花公款或發票亂丟，我保證你們會被總務追殺到死。懂嗎？帳本就是真理！</span>',
        questions: [
            {
                q: '辦完去年的營隊你認為學到最多的是什麼呢？',
                a: '應該是要練習承擔吧……那時很多筆帳單進進出出的，我一時忙，沒有馬上登記起來，導致後來金流很亂，我都不知道要從何下手了，最後費了好大一番功夫才把帳單對完！你看！這就是我熬了無數個日夜的心血。</span>\n\n<button class="prop-trigger" onclick="event.stopPropagation(); openPropModal(\'expense\')">📊 查看財務決算總表</button>',
                hasProp: 'expense'
            },
            {
                q: '你有後悔過擔任營隊幕後嗎？',
                a: '那當然，每個夜深人靜的晚上我都在懷疑自己，我還記得籌備後期突然有一些莫名其妙的資金調整，是總籌要改的！他那時候態度超硬，叫我把美宣組還沒執行的經費全部砍掉來墊補其他缺口，給你們看這個支出表，絕對是ㄅ級分的啦！<span class="stage-direction"></span>\n\n<button class="prop-trigger" onclick="event.stopPropagation(); openPropModal(\'expense\')">📊 查看財務決算總表</button>',
                hasProp: 'expense'
            }
        ]
    },
    {
        id: 'B',
        name: '公關 洪姊',
        hiddenLabel: '幹部 ③',
        role: '公關股',
        avatar: 'npc_b.png',
        intro: '大家好，我是洪姊，之前的公關組長。身為公關，我當時最主要的工作就是奔波去拉廠商贊助、幫營隊到處找錢。 所以你們之後如果在拉贊助或是對外社交上有什麼困難，隨時可以來請教我喔~',
        questions: [
            {
                q: '你你和各股的幹部感情好嗎？',
                a: '<span class="stage-direction">（冷笑一聲）</span> 身為公關股當然跟誰感情都不錯啊！\n去年越接近營期時，我男友K開始跟活動長走的莫名的近(哼)！我營期前一天真的受不了，去找他談分手\n你們知道嗎！就連我把我們的情侶手鏈摔到地上那個人也視若無睹誒！他心裡是不是已經沒有我了……'
            },
            {
                q: '宿營結束後你們大家還有再約出去玩嗎？',
                a: '那是自然，除了那個一直不跟我聯絡的男友總籌之外，我們其他人有時也會約去吃飯之類的，但感覺總務長跟我們在一起時總是放不太開、很拘謹，好像做了什麼違心事的樣子。'
            }
        ]
    },
    {
        id: 'C',
        name: '活動 佳寧',
        hiddenLabel: '幹部 ④',
        role: '活動股',
        avatar: 'npc_c.png',
        intro: '大家好，我是佳寧，之前的活動長！身為活動長，整個營隊的晚會流程、破冰遊戲，還有氣氛帶動，基本上全都是我和我們組員一手策劃的喔！最喜歡看到大家聚在一起開開心心、笑著互動的樣子了！',
        questions: [
            {
                q: '你有和團隊裡的哪些幹部比較熟嗎？',
                a: '我跟大家都很好啊！特別是公關，她是我大學很好的朋友！我們天天黏在一起。那陣子她跟我抱怨總籌對她很冷淡時，我是真的很替她著想，我只是因為工作需求所以需要跟各股對接活動才常找總籌確認流程，……我真的只希望他們兩個人好好的！從來沒有想過要介入，更不可能做出對不起她的事！你們不要聽別人亂講！'
            },
            {
                q: '你們活動組辦那麼多活動去年哪個最受好評啊？',
                a: '那當然是酒桌遊戲了啊！還記得當時大家玩得可嗨了！尤其是機動組的組長，一整個喝到忘我，一見到人就『嘿！six seven~~~』堂堂一個巡邏長這樣是要怎麼去巡邏啦！'
            }
        ]
    },
    {
        id: 'D',
        name: '器攝 九面',
        hiddenLabel: '幹部 ⑤',
        role: '器攝股',
        avatar: 'npc_d.png',
        intro: '嗨、學弟妹好……我是九面，也是上一屆的器攝長啦。我的工作基本上就是全場跑腿，搬大型發電機、架燈光音響，還有拿著相機拍下大家活動的身影，幫大家把回憶儲存起來。',
        questions: [
            {
                q: '你們籌備期間有發生什麼印象深刻的事件嗎？',
                a: '有啊！就是美宣和總籌那件事鬧得挺兇的……好像是因為預算吧？美宣的預算莫名被砍，所以吵了起來，當時鬧得氣氛挺僵的。但總務在一旁好像欲言又止的樣子讓我蠻意外的。'
            },
            {
                q: '你們宿營幹部常常聚會嗎？',
                a: '常啊……但我有時不會去就是啦……因為還有打工，然後也可以少一筆花費（越講越小聲）。但我該做的工作都有做！重要的會我也都有去！只是缺席聚餐應該還好吧……'
            }
        ]
    },
    {
        id: 'F',
        name: '美宣 Aden王',
        hiddenLabel: '幹部 ⑥',
        role: '美宣股',
        avatar: 'npc_f.png',
        intro: '嗨學弟妹好，我是美宣長 Aden王。大家看到的貼文主視覺、手繪地圖、活動背板等，每一件都是我們美宣組熬夜爆肝、畫圖做出來的！我這個人對視覺細節要求很高，最討厭隨便敷衍了事。雖然當初籌備時有些人的做事方式真的讓我超級火大……但該做好的排版設計我絕對沒偷懶。之後如果有美工或文宣排版的問題可以問我，但先說好，別拿太醜的東西來污辱我的眼睛！',
        questions: [
            {
                q: '營隊那天有發生什麼印象深刻的事嗎？',
                a: '這倒有！那天晚上我又想起被總籌無故大砍的預算，生氣到喝不下酒，跑去外面透透風時，看到了器攝神色很慌忙地從遠處跑走，衣服好像還髒髒的，像從土堆裡跑出來一樣。'
            },
            {
                q: '你對去年美宣的成果滿意嗎？',
                a: '怎麼可能滿意啊！那總籌腦子不知道哪裡有問題，他知道我們花了多少心血在上面嗎？那是我們多少個日夜啊！說變就變！想到就來氣！我營期當天下午想到又來氣，跑去找總籌準備再吵一架時看到公關組長淚眼汪汪地跑走，看起來也是跟總籌吵架了吧？遠遠的好像還看到活動長從地板上撿起了什麼，但……是什麼我就沒看到了，也許是垃圾吧。'
            }
        ]
    },
    {
        id: 'I',
        name: '機動 七七',
        hiddenLabel: '幹部 ⑦',
        role: '機動股',
        avatar: 'npc_i.png',
        intro: '哈囉各位帥哥美女！我是機動組長七七！大家都知道機動組就是營隊的守護神嘛！哪裡有狀況、哪邊要夜間巡邏，只要一聲令下，我絕對跑透透！不過我這個人最講求的就是鬆弛感啦～遇到麻煩就一句話：six,seven~~~辦營隊大家開心最重要，不要那麼緊繃，差不多過得去就好！你們晚上要是巡邏無聊、想找人放鬆聊天，隨時來找我七七，大家一起 67 起來！',
        questions: [
            {
                q: '你主要在營隊的工作是做什麼啊？',
                a: '誒～這你就不懂了，我們機動股在宿營中可是十分重要的存在！大至活動組 NPC 的外援，小至打掃清潔環境都是我們工作的一環，而我，主要負責……玩啊不是，巡邏啦～你看這張巡邏表\n\n<button class="prop-trigger" onclick="event.stopPropagation(); openPropModal(\'patrol\')">📋 查看巡邏簽到簿</button>\n\n我可都有按時簽名的好嗎~',
                hasProp: 'patrol'
            },
            {
                q: '你最喜歡宿營中的哪個活動？',
                a: '那當然是……酒桌遊戲啦！最喜歡喝酒聊天了～但不要以為我只會玩，我也是有好好做我該做的工作好嗎？來～看這張巡邏簽到表\n\n<button class="prop-trigger" onclick="event.stopPropagation(); openPropModal(\'patrol\')">📋 查看巡邏簽到簿</button>\n\n本人可是每次巡邏時間到都乖乖去巡邏的優質巡邏員好嗎？絕對是大拇指的啦！',
                hasProp: 'patrol'
            }
        ]
    },
    {
        id: 'E',
        name: '農場主人 杰哥',
        hiddenLabel: '幹部 ⑧',
        role: '農場主人',
        avatar: 'npc_e.png',
        intro: '大家好，我是農場主人杰哥，這座農場啊，是我跟我那已經過世的老伴，一起搭建起來的。對我來說，這裡不只是一間農場，更滿載了我跟我老伴一輩子的回憶。',
        questions: [
            {
                q: '對當時來辦營隊的學長姐們印象如何呢？',
                a: '都是一群很好的孩子啦！充滿活力，看著他們就像看到我年輕的時候一樣。特別是那個常常跑來找我談場地細節的孩子，是叫總籌吧？我到現在都還記得他。非常有禮貌、做事很負責任，臉上總是掛著陽光的笑容，對每件事都很上心。'
            },
            {
                q: '對於這個場地您有什麼要特別叮嚀的嗎？',
                a: '這個我一定要特別叮嚀你們！我們後山廢棄澡堂那邊啊……路況真的很差，地基不穩又沒有路燈，特別是連接著小街的那一帶，到了晚上風又大又陰森。我從以前就天天跟學生警告，天黑之後絕對不要私自靠近那裡，山路又陡又滑，很容易摔傷的！聽阿伯一句勸，晚上千萬別往那邊跑，安全最重要！'
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
    { time: '21:00 - 21:30', area: '路線 牛萊：住宿區與營本部', name1: '機動 張××', name2: '機動 廖××', signTime: '21:00', note: '晚會狂歡中，一切正常。', n1Blue: false, n2Blue: false, n1Wobbly: false, n2Wobbly: false },
    { time: '21:30 - 22:00', area: '路線 洪姊：大排檔與外圍步道', name1: '機動 陳××', name2: '機動 林××', signTime: '22:00', note: '學弟妹陸續返回營區。', n1Blue: false, n2Blue: false, n1Wobbly: false, n2Wobbly: false },
    { time: '22:10 - 22:40', area: '標準巡邏路線 (營區全域)', name1: '副籌 牛萊', name2: '機動 七七', signTime: '22:10', note: '', n1Blue: true, n2Blue: false, n1Wobbly: true, n2Wobbly: true },
    { time: '22:40 - 23:10', area: '路線 牛萊：住宿區與後方區域', name1: '機動 許××', name2: '機動 趙××', signTime: '22:40', note: '營區陸續熄燈。', n1Blue: false, n2Blue: false, n1Wobbly: false, n2Wobbly: false },
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
            phase: gameState.phase,
            startTime: gameState.startTime,
            phoneUnlocked: gameState.phoneUnlocked,
            reportedSuspect: gameState.reportedSuspect,
            reportTime: gameState.reportTime
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
        // Start timer on first entry to game screen (Phase 1 start)
        if (!gameState.startTime) {
            gameState.startTime = Date.now();
            saveState();
        }
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
        source: '總務 統神',
        desc: '總務 統神 提供的 114 學年度宿營活動財務決算總表，包含收入與支出明細。'
    },
    patrol: {
        id: 'patrol',
        name: '夜間巡邏簽到簿',
        icon: '📋',
        source: '機動 七七',
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
        source: '總務 統神',
        desc: '總務 統神 提供的營隊公共文具採購明細，上面的發票品名全部都是黑色文具，沒有任何藍色原子筆。'
    },
    c_testimony: {
        id: 'c_testimony',
        name: 'C 的證詞',
        icon: '📝',
        source: '器材 C',
        desc: '佳寧供稱 22:33 在廢棄小街發現 K 已倒地不起，逃跑時不慎遺落手鍊。凌晨目睹農場主人 杰哥 也往案發現場方向走去。'
    },
    ig_screenshot: {
        id: 'ig_screenshot',
        name: 'I 的 IG 限動截圖',
        icon: '📱',
        source: '器材 C',
        desc: '22:33 巡邏員 七七 在公共區和學弟妹玩酒桌遊戲的 IG 限時動態截圖，與巡邏簽到簿上 22:15 在巡邏的紀錄矛盾。'
    },
    k_phone: {
        id: 'k_phone',
        name: '總籌 K 的手機',
        icon: '📲',
        source: '農場主人 杰哥',
        desc: 'E 從 K 遺體旁撿到的手機，目前處於鎖定狀態。密碼提示：屆數＋日期。解鎖後可查看 K 生前的最後訊息。'
    },
    torn_notebook: {
        id: 'torn_notebook',
        name: '被撕過的筆記本殘頁',
        icon: '📓',
        source: '女友 B',
        desc: 'K 失蹤當天，總務 統神 趁 洪姊 不注意時從 K 的營隊筆記中撕走了幾頁。B 保留了剩下的殘頁。'
    },
    k_ledger: {
        id: 'k_ledger',
        name: 'K 親筆對帳筆記',
        icon: '📋',
        source: '總務 統神',
        desc: 'K 當晚獨自對帳時寫下的真實數字，記載了 7 萬農場追加款和 12 萬美宣授權的疑點。G 一直不敢銷毀的最後良心。'
    },
    d_photo: {
        id: 'd_photo',
        name: '九面衣服沾泥土的側拍照',
        icon: '📸',
        source: '美宣 Aden王',
        desc: '活動結束後的側拍照，清楚顯示隊輔 九面 的衣服沾滿泥土。F 目擊時間約為 22:40。'
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
            <p class="prop-subtitle">總務 統神 提供 — 發票品名全為黑色文具</p>
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
            <p class="prop-subtitle">器材 佳寧 的口述證詞</p>
            <div class="prop-paper" style="padding:24px; line-height:2;">
                <p><strong>證人：</strong>器材組 C</p>
                <p><strong>時間點：</strong>2025/10/3 約 22:33</p>
                <hr style="border-color:#e0d8c8; margin:12px 0;">
                <p>「22:33 我本來在公共區，隱約聽到廢棄小街傳來爭吵聲，以為是 洪姊 又回來跟 K 吵架，趕過去查看。」</p>
                <p>「結果到了現場，K 已經倒在地上沒氣了……」</p>
                <p>「我太震驚了，逃跑時不小心把手鍊掉在現場。」</p>
                <p>「我不敢報警也不敢跟大家說，怕被認為是兇手。」</p>
                <hr style="border-color:#e0d8c8; margin:12px 0;">
                <p><strong>關鍵目擊：</strong></p>
                <p style="color:#7c3aed; font-weight:600;">「隔天凌晨想回去撿手鍊時，遠遠看到<strong>農場主人 杰哥 也往廢棄小街方向走去</strong>。」</p>
                <p>「再次回到現場時，手鍊和 K 的屍體都不見了。」</p>
            </div>`;
    } else if (type === 'ig_screenshot') {
        body.innerHTML = `
            <h3 class="prop-title">📱 I 的 IG 限時動態截圖</h3>
            <p class="prop-subtitle">器材 佳寧 提供 — 拍攝時間 22:33</p>
            <div style="max-width:360px; margin:16px auto; border-radius:16px; overflow:hidden; border:1px solid rgba(168,85,247,0.2); background:#000;">
                <div style="padding:12px 16px; display:flex; align-items:center; gap:10px; background:linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045); background-size:200% 200%;">
                    <div style="width:36px; height:36px; border-radius:50%; background:#333; display:flex; align-items:center; justify-content:center; font-size:0.8rem; color:#fff; font-weight:700;">I</div>
                    <div>
                        <div style="font-size:0.85rem; color:#fff; font-weight:600;">機動 七七</div>
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
                <p style="color:#dc2626; font-weight:700;">⚠️ 矛盾：巡邏簽到簿記載 七七 於 22:10 開始巡邏</p>
                <p style="font-size:0.85rem; margin-top:4px;">但此限動顯示 22:33 時 七七 正在公共區喝酒玩遊戲</p>
            </div>`;
    } else if (type === 'k_phone') {
        const isUnlocked = gameState.phoneUnlocked || false;
                        if (!isUnlocked) {
            body.innerHTML = `
                <div style="max-width:360px; margin:0 auto;">
                    <div style="background:#111; border-radius:24px; overflow:hidden; border:3px solid #333; padding:20px;">
                        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:40px 20px 20px;">
                            <div style="font-size:3rem; margin-bottom:16px;">🔒</div>
                            <p style="color:#888; font-size:0.85rem; margin-bottom:4px;">總籌 K 的手機</p>
                            <p style="color:#fff; font-size:1.2rem; font-weight:700; margin-bottom:24px;">請輸入密碼</p>
                            <input type="text" id="phone-password-input"
                                   maxlength="10"
                                   style="width:100%; max-width:280px; box-sizing:border-box; padding:12px 16px; background:#222; border:1px solid #444; border-radius:12px; color:#fff; font-size:1.1rem; text-align:center; letter-spacing:4px;"
                                   onkeydown="if(event.key==='Enter') tryUnlockPhone()">
                            <p style="color:#a855f7; font-size:0.8rem; margin-top:10px; margin-bottom:4px;">💡 提示：密碼 ＝ 屆數 ＋ 日期</p>
                            <div id="phone-error" style="color:#ef4444; font-size:0.85rem; margin-top:8px; min-height:20px;"></div>
                            <button onclick="tryUnlockPhone()"
                                    style="width:100%; max-width:280px; margin-top:12px; padding:10px 32px; background:linear-gradient(135deg,#7c3aed,#6d28d9); color:#fff; border:none; border-radius:12px; font-weight:600; cursor:pointer; font-size:0.95rem;">
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
            <p class="prop-subtitle">女友 洪姊 提供 — K 的營隊筆記（部分頁面已被 統神 撕走）</p>
            <div class="prop-paper" style="padding:24px; line-height:2; font-family:var(--font-handwriting, 'Noto Serif TC', serif);">
                <p style="color:#888; font-size:0.8rem; text-decoration:line-through;">（前面數頁已被撕走）</p>
                <hr style="border-color:#e0d8c8; margin:12px 0;">
                <p>10/3 備忘：</p>
                <p>和 統神 談完帳的事了，28 萬的缺口太大……</p>
                <p>我叫 統神 先不要聲張，我自己來處理。</p>
                <p>今晚約了 牛萊 在廢棄小街談，</p>
                <p>希望可以好好把事情弄清楚。</p>
                <hr style="border-color:#e0d8c8; margin:12px 0;">
                <p style="color:#888; font-size:0.8rem; text-decoration:line-through;">（後面數頁也被撕走）</p>
            </div>
            <p style="margin-top:12px; font-size:0.85rem; color:var(--text-secondary); text-align:center; font-style:italic;">
                ⚠️ 統神撕走的部分可能包含更詳細的對帳記錄
            </p>`;
    } else if (type === 'k_ledger') {
        body.innerHTML = `
            <h3 class="prop-title">📋 K 親筆對帳筆記</h3>
            <p class="prop-subtitle">總務 統神 保存 — K 案發當晚獨自對帳的手寫筆記</p>
            <div class="prop-paper" style="padding:24px; line-height:2; font-family:var(--font-handwriting, 'Noto Serif TC', serif);">
                <p style="font-weight:700; text-decoration:underline;">10/3 晚 — 對帳核實記錄</p>
                <p>總表支出：$820,000</p>
                <p>實際廠商付款加總：$540,000</p>
                <p style="color:#dc2626; font-weight:700;">差額：$280,000 ← 錢去哪了？？</p>
                <hr style="border-color:#e0d8c8; margin:12px 0;">
                <p style="font-weight:700;">可疑項目：</p>
                <p>1. 農場追加款 $70,000 → 杰哥說沒有這筆追加？？</p>
                <p style="color:#dc2626;">   → 牛萊批的單，杰哥不知情，錢去了哪裡？</p>
                <p>2. 美宣器材追加 $120,000 → Aden王說她的預算被砍到只剩 6 萬</p>
                <p style="color:#dc2626;">   → 又是 牛萊 簽核的！12 萬根本沒有到美宣手上！</p>
                <p>3. 其餘零星項目 $90,000 → 全都是 牛萊 經手</p>
                <hr style="border-color:#e0d8c8; margin:12px 0;">
                <p style="color:#7c3aed; font-weight:700;">結論：28 萬全部指向副籌 牛萊！</p>
                <p>今晚我要當面質問他！</p>
            </div>`;
    } else if (type === 'd_photo') {
        body.innerHTML = `
            <h3 class="prop-title">📸 九面衣服沾泥土的側拍照</h3>
            <p class="prop-subtitle">美宣 Aden王 提供 — 拍攝時間約 22:40</p>
            <div style="max-width:380px; margin:16px auto; border-radius:12px; overflow:hidden; border:1px solid rgba(168,85,247,0.2); background:#111; padding:20px; text-align:center;">
                <div style="font-size:4rem; margin-bottom:16px;">👤</div>
                <p style="color:#fff; font-size:1rem; font-weight:600; margin-bottom:8px;">隊輔 九面</p>
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
                <p style="color:#7c3aed; font-weight:700;">📌 Aden王的證詞</p>
                <p style="font-size:0.85rem; margin-top:4px; line-height:1.7;">「22:40 左右在回營區的路上看到 九面，衣服都是泥土，手上好像有紅紅的。」</p>
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
                            <span style="color:#a855f7; font-weight:700; font-size:0.85rem;">📨 傳送給：副籌 牛萊</span>
                            <span style="color:#666; font-size:0.75rem;">10/3 下午</span>
                        </div>
                        <p style="color:#e0dced; font-size:0.9rem; line-height:1.7;">「10:20 在廢棄小街見面，有些事情我想當面跟你談。」</p>
                        <span style="color:#22c55e; font-size:0.7rem;">✓ 已送出</span>
                    </div>

                    <!-- Message to D -->
                    <div style="margin-bottom:20px; padding:14px; background:#1e1535; border-radius:12px; border-left:3px solid #f59e0b;">
                        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                            <span style="color:#f59e0b; font-weight:700; font-size:0.85rem;">📨 傳送給：機動 D</span>
                            <span style="color:#666; font-size:0.75rem;">10/3 22:18</span>
                        </div>
                        <p style="color:#e0dced; font-size:0.9rem; line-height:1.7;">「22:30 到廢棄小街找我，我有話和你說。」</p>
                        <span style="color:#22c55e; font-size:0.7rem;">✓ 已送出</span>
                    </div>

                    <!-- Unsent draft to B -->
                    <div style="padding:14px; background:#1e1535; border-radius:12px; border-left:3px solid #ef4444;">
                        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                            <span style="color:#ef4444; font-weight:700; font-size:0.85rem;">📝 草稿：給 洪姊（未送出）</span>
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
`;
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

    // Show report button
    document.getElementById('report-btn').style.display = '';

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
            keywords: ['藍筆', '簽名'],
            response: '<span class="stage-direction">（微微皺眉，語氣帶著幹部主管的嚴厲）</span>這張巡邏簽到簿是我 22:10 簽的沒錯。\n營本部桌面上的文具本來就是各股隨便放、隨便用的，公關拉贊助的筆、活動組留下來的筆全堆在那裡，有一兩枝藍筆很正常吧？\n我簽完名後，22:10 到 22:40 整個時段都在營區周邊巡邏維安。你們不去廢棄小街找兇手，反而盯著簽到簿上一點點墨水顏色看，是不是方向搞錯了？'
        },
        {
            evidence: 'k_phone',
            keywords: ['約', '訊息', '見面', '廢棄小街', '10:20','巡邏','總籌','手機'],
            response: '（臉色一沉，隨即冷笑一聲）</span>這能證明什麼？他那晚 22:20 是有約我，但他電話中講的莫名其妙，說什麼帳目有問題要找我聊。我那時正準備去巡邏，覺得他在發瘋，根本就沒理他，我也完全沒去什麼廢棄小街！\n<span class="stage-direction">（眼神閃過一絲陰險，主動甩鍋給 九面）</span>要我說，你們該去查查 九面 吧？他妹妹醫藥費欠了那麼多錢，那一晚在營區就神祕兮兮的。還有，K 那陣子私底下經常找 九面，說不定是他發現 九面 偷偷動了公款，兩個人在廢棄小街談判撕破臉呢？'
        },
        
        {
            evidence: 'stationery_list',
            response: '喔我想起來了，我確實是用我自己的筆簽名，因為我那時候找黑筆時沒有找到，而且巡邏長七七也不在現場，我根本找不到她。'
        },
        {
            evidence: 'ig_screenshot',
            keywords: ['18萬','13萬','藍筆','七七沒','機動沒','殺總籌','殺K','偷'],
            response: '媽媽，媽媽，我沒有做錯事喔！我平時那麼乖，大家怎麼都在欺負我啦！'
        },
        {
            evidence: 'real_expense',
            keywords: ['藍筆','七七沒','機動沒','殺總籌','殺K','偷'],
            response: '媽媽，媽媽，我沒有做錯事喔！我平時那麼乖，大家怎麼都在欺負我啦！'
        },
        {
            evidence: 'expense',
            keywords: ['藍筆','七七沒','機動沒','殺總籌','殺K','偷'],
            response: '媽媽，媽媽，我沒有做錯事喔！我平時那麼乖，大家怎麼都在欺負我啦！'
        },
        {
            evidence: 'stationery_list',
            keywords: ['18萬','13萬','七七沒','機動沒','殺總籌','殺K','偷'],
            response: '媽媽，媽媽，我沒有做錯事喔！我平時那麼乖，大家怎麼都在欺負我啦！'
        },
        {
            evidence: 'rtorn_notebook',
            keywords: ['藍筆','七七沒','機動沒','殺總籌','殺K','偷'],
            response: '媽媽，媽媽，我沒有做錯事喔！我平時那麼乖，大家怎麼都在欺負我啦！'
        },
    ],
    'G': [
        {
            evidence: 'real_expense',
            keywords: ['82萬', '18萬', '資金缺口', '實際支出', '缺口','差額','不同','不一樣'],
            response: '（雙膝一軟當場下跪，捂著臉痛哭流涕）「不是我！我真的沒有拿那筆錢！但我真的不知道……不知道那 18 萬為什麼會莫名其妙就不見了！那時候我發現了這個大缺口，馬上找總籌討論，總籌怕事情鬧大影響營隊，也怕大家慌張，所以才打算把這件事先壓下來……（泣不成聲，猛捶地）可是……可是總籌那晚突然就不見了！我當初以為是他根本補不上這個窟窿，被這 18 萬的壓力逼到絕路跑路了……我覺得都是我沒把帳管好、是我害了他！我心裡太自責、太害怕了，才熬夜做假的支出表想把這筆缺口蓋過去，我只是不想讓系上查到這筆帳、毀了總籌的名聲……我真的沒有殺人啊！」'
        },
        {
            evidence: 'expense',
            keywords: ['54萬', '82萬', '28萬', '資金缺口', '實際支出', '缺口','差額','不同','不一樣'],
            response: '（雙膝一軟當場下跪，捂著臉痛哭流涕）「不是我！我真的沒有拿那筆錢！但我真的不知道……不知道那 28 萬為什麼會莫名其妙就不見了！那時候我發現了這個大缺口，馬上找總籌討論，總籌怕事情鬧大影響營隊，也怕大家慌張，所以才打算把這件事先壓下來……（泣不成聲，猛捶地）可是……可是總籌那晚突然就不見了！我當初以為是他根本補不上這個窟窿，被這 28 萬的壓力逼到絕路跑路了……我覺得都是我沒把帳管好、是我害了他！我心裡太自責、太害怕了，才熬夜做假的支出表想把這筆缺口蓋過去，我只是不想讓系上查到這筆帳、毀了總籌的名聲……我真的沒有殺人啊！」'
        },
        {
            evidence: '*',
            keywords: ['藍色原子筆', '藍筆', '筆跡'],
            givesProp: 'stationery_list',
            response: '（不可能！絕對不可能！我做總務最注重的就是細節和規矩，那時候所有的公共文具都是我一手包辦！簽到處這種正式文件，我當年初審預算時就規定只許用黑色水性筆，我完全沒有採購過任何一枝藍色原子筆！（急忙翻找口袋與夾板，遞出一張折好的發票清單）不信你們自己看這張『營隊公共文具採購明細』！上面發票跟品名寫得清清楚楚，全部都是黑色文具！'
        },
        {
            evidence: 'torn_notebook',
            response: '雙手發抖地接過殘頁，盯著總籌的字跡，眼淚狂飆、聲音發顫）「這……這是總籌留下來的？他……他到最後一刻都還相信我沒有拿錢……幫我把缺口補齊……我居然還以為他是自己跑路了……（崩潰捂臉大哭，極度悔恨與自責）我對不起總籌……我真的對不起他！我到最後還把責任嫁禍給他，是不是他的死是因為這個缺口他真的負荷不來才自殺的，都怪我，我太害怕了，你們要是有任何財務類型的問題都可以來問我，請務必幫我找到總籌的死因！」'
        },
        {
            evidence: '*',
            keywords: ['砍預算'],
            response: '我在後期確實砍了美宣 Aden王的預算，但那是總籌指使我這麼做的。'
        },
        {
            evidence: '*',
            keywords: ['虧心事'],
            response: '虧心事？我？我堂堂總務做什麼虧心事！'
        },
    ],
    'B': [
        {
            evidence: 'bracelet',
            response: '（捂著嘴崩潰）這真的是我的手鍊……我當時下午跟他生氣時甩在地上難道他後來有撿起來？（痛哭）我真的不知道……他那天下午眼神很空洞，看著我的時候好像透過我在看別人，嘴裡一直重複說『我沒有做錯』……我當時在氣頭上沒有細想，現在想起來他應該是真的很累吧？對了！我記得我下午氣沖沖離開時，有看到美宣 Aden王也是一臉氣憤地去找總籌！他們倆因經費的事鬧得可兇了！說不定就是他一時氣憤而衝動行兇！'
        },      
        {
            evidence: 'k_phone',
            keywords: ['洪姊', '未送出', '訊息', '告訴', '草稿','總籌'],
            givesProp: 'torn_notebook',
            response: '（看到未發送訊息痛哭）原來他原本想要告訴我一切，他……這個重情重義的傻瓜，什麼事都自己扛著，什麼都不告訴我，我也可以幫忙分擔一點啊，那麼好的人怎麼就這樣走了呢！而且還被下了殺手，我真的不理解。不管怎樣，我一定要幫他找到真兇。讓我回憶一下有什麼奇怪的地方……對了！總籌剛失蹤那天我在他書房整理東西時，看到有一個便條紙在地板上，我看不太懂他在寫什麼，但好像跟營隊有關，給你們看！'
        },
        {
            evidence: '*',
            keywords: ['吵架'],
            response: '我當時下午跟他吵架是因為活動佳寧的原因，她一直介入在我和我男友總籌之間我真的很不爽。'
        },
    ],
    'C': [
        {
            keywords: ['看到', '說', '撿', '撿起', '手鍊', '美宣','Aden王'],
            givesProp: 'c_testimony',
            response: '（臉色慘白）對……是我撿走的，但我就是嫉妒他們，明明我也是喜歡總籌的啊……但我真的沒有想殺死他，當晚總籌死的時候我還在公共區和七七酒桌遊戲，我那時聽到廢棄澡堂那邊傳來爭吵聲，本以為是總籌和洪姊又吵架了，想趁機去安慰他，沒想到……他已經倒在地上沒氣了！我那時被嚇哭了，逃跑時不小心把手鍊掉在現場。但我真的沒殺人！我也不敢報警或和大家說，怕被大家認為我是兇手。回去之後才發現手鍊不見了，本想著隔天早上起早一點把手鍊撿回來，沒想到卻遠遠看到農場主人杰哥也往那邊過去，我怕被發現就躲回房間了，結果再回到現場時卻發現不只找不到手鍊，連總籌的屍體也都不見了，讓我懷疑自己是不是壓力太大才出現幻覺了。'
        },
        {
            evidence: '*',
            keywords: ['公共區', '巡邏表', '巡邏', '七七','22:30','機動長','酒桌'],
            givesProp: 'ig_screenshot',
            response: '她不是也跟我在酒桌遊戲喝酒嗎？沒記錯的話她還和我一起發了限動呢！你看！（給予 IG 限動截圖）她巡邏表上寫 22:30 在巡邏絕對是假的！'
        },
        {
            evidence: '*',
            keywords: ['介入','感情'],
            response: '我也沒有想介入，但是，明明是我先喜歡的……'
        },
        {
            evidence: '*',
            keywords: ['美宣','撿','Aden王'],
            response: '就只是某人不要的東西而已，沒什麼特別的。'
        },
    ],
    'D': [
        {
            evidence: '*',
            keywords: ['髒衣', '魂不守舍', '泥土', '衣服髒', '髒','血','衣服'],
            response: '喔……那個是……我當時在後山……額不是，反正就是營區附近走走，結果自己不小心摔倒了，所以衣服才會都是土啦……'
        },
        {
            evidence: '*',
            keywords: ['家庭', '妹妹', '打工', '忙', '醫藥費'],
            response: '去年確實是挺忙的，下課去打工，還接了一個營隊幹部。我的家庭狀況比較貧困一點，就是對……我有一個妹妹。（眼神慌亂地游移，雙手緊抓著衣角，語速突然變快）她……她身體不太好，常常要跑醫院，所以我才需要多兼幾份差賺生活費，但我的家庭問題，我自己打工賺錢承擔，這有問題嗎？（下意識後退一步，聲音發抖但極力裝出樣子掩飾心虛）我……我承認我常缺席開會，但我該做的事我都沒少做！你們幹嘛一直盯著我的家境問？這跟命案到底有什麼關係？'
        },
        {
            evidence: 'k_phone',
            response: '（臉色慘白，雙膝一軟差點站不穩，眼眶泛紅痛哭）那天他確實有傳訊息叫我去廢棄小街找他……我有去，但我真的沒有殺人！我大概 22:25 走到廢棄小街附近，遠遠就聽到總籌和另一個人因為挪用公款的問題發生激烈爭吵！我太膽小了，根本不敢上前，只能躲在轉角發抖。直到四周完全安靜後，我才敢走過去看……沒想到……總籌已經倒在土堆旁沒氣了……（回想起畫面渾身發抖）我看到他身邊放著裝有五萬元的牛皮紙袋和信，信裡總籌叫我把錢拿去救妹妹。回想起他們剛才的爭吵內容，我想應該是總籌為了我挪用了公款才被人記恨，所以我拿走錢和信，是不想讓大家知道總籌是為了我才挪用公款、遭遇不測，我想保護他的名聲！在跑回營區的路上才意外被美宣 Aden王撞見。我真的只是拿了救命錢，求求你們相信我，人真的不是我殺的！'
        },
        {
            evidence: '*',
            keywords: ['缺席','沒去'],
            response: '我家裡本來就不富裕，我也理解他們會在背後講些閒話，但這跟命案應該沒關聯吧，還是……你們也對我家事有意見？'
        },
        {
            evidence: '*',
            keywords: ['嫌疑','懷疑'],
            response: '說我有嫌疑？！他有問題吧！喂！你們要指定兇手前應該要有實際上的證據吧！'
        },
    ],
    'F': [
        {
            evidence: '*',
            keywords: ['B有看到', '看到你', '看到', 'B說', '氣憤', '去找總籌', '去找K','公關','洪姊'],
            response: '喔～好像有這件事。我那天下午喝了點酒，又想起總籌莫名其妙砍我預算的破事，一時衝動，想要去叫他給我講清楚到底為什麼，所以表情可能沒有那麼友善。話說回來，那條藍色手鍊我倒是蠻有印象的，公關洪姊好像無時無刻都戴著吧？不過宿營後好像就沒有了，也有可能是我記錯了？話說回來，那天和洪姊擦身而過後，我遠遠看到活動長佳寧從地上撿起了什麼，還小心翼翼地好像怕人發現一樣，感覺有點可疑。'
        },
        {
            evidence: '*',
            keywords: ['器攝','九面','時間', '泥土', '髒', '衣服', '撞見', '目擊'],
            response: '當時看到他好像是在我回營區的路上，大約是 22:45 左右。當時他衣服都是泥土，手上好像還紅紅的。'
        },
        {
            evidence: '*',
            keywords: ['砍預算'],
            response: '講到這個我就來氣，在籌備後期，總務統神突然砍我的資金，我當下去問他就說是總籌講的，現在如今他變成這樣，真的是……惡有惡報。'
        },
    ],
    'I': [
        {
            evidence: 'ig_screenshot',
            response: '狂擦冷汗）好啦！我承認我當晚都在喝酒，根本沒去巡邏，我 22:10 剛簽完就直接跑去酒桌遊戲玩，後來結束後在營本部後方遇到副籌牛萊，他整個人喘得很厲害，眼神超級恐怖。他還威脅我說如果我敢把事情說出去，他就會上報說我曠職，本來我想說這件事情就算了，哪曾想當天總籌竟然可能是因為我的疏忽而死。'
        },
        {
            evidence: 'patrol',
            keywords: ['牛萊','藍筆','黑筆', '顏色', '筆', '不一樣','不同'],
            response: '喔～我們當時簽到後想說為了省時間，你們也知道嘛～我就是想提早去酒桌遊戲啊，當時我們兩個就決定分開巡邏。喔對了，我當時好像不小心把黑筆帶在身上，所以後來我回去時，牛萊早就簽完了，藍筆的事情我不曉得？或許那邊也有藍筆吧？你們可以去看看採買清單？'
        },
    ],
    'E': [
        {
            evidence: 'c_testimony',
            keywords: ['活動', '佳寧', '目擊', '凌晨', '廢棄小街', '屍體', '埋','現場'],
            givesProp: 'k_phone',
            response: '（手抖、點菸）唉……其實我那天早上巡邏時便發現他倒在了廢棄澡堂那邊，我連忙上前看還有沒有救，但明顯已經走一段時間了，周邊文件散落一地。這可憐孩子啊……為了這個營隊操碎了心，卻換來這個後果。我當下也是想要替這孩子討回公道……但一想到我和老伴花了大半輩子辛辛苦苦經營的農場會因此受到影響，一時糊塗，才決定把他給埋了……我真的很對不起他啊……我最後能為他做的就只有把他的手機收起來好好保管，但我一直解不出密碼，或許你們可以，這就是他的手機！'
        },
    ],
};

// Default responses when no specific dialogue matches
const PHASE2_DEFAULT_RESPONSES = {
    'A': '（看著手錶，冷淡微笑）大家都是辦過活動的人，講話要講求憑證。沒有證據的話，我無可奉告喔。',
    'G': '你到底懂不懂管錢壓力多大啊？！要不要聽聽看你現在在講什麼？一代一代一代，別來吵我！',
    'B': '這我可能不能回答你ㄟ，但來都來了，你知道皮卡丘站起來是什麼嗎？……皮卡兵。不好笑對吧？就跟我現在的心情一樣。',
    'C': '蜜月期 po po！大家今天 po 了嗎！只要心裡充滿光，什麼事都不用怕喔……你們幹嘛一直盯著我看啦？',
    'D': '雖然我家境不富裕，但凌晨四點來我家，我會煮最奢華的牛肉麵給你們吃喔！有話好好說嘛。',
    'F': '每次被搞到快抓狂的時候，我都會用大跳讓自己冷靜！別來煩我，誰受得了啊！',
    'I': '676767676767！這問題太 67 了吧，差不多過得去就好啦，大家 67 起來！',
    'E': '後山有什麼好看的？聽話，不要去！來阿婆這裡，阿婆農場裡有好康的，比外面好玩多了！',
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
var selectedSuspect = null;

function openReportModal() {
    try {
        console.log('openReportModal called');
        const modal = document.getElementById('report-modal');
        const modalBody = document.getElementById('report-modal-body');
        const result = document.getElementById('report-result');

        if (!modal) { alert('Error: report-modal not found'); return; }
        if (!modalBody) { alert('Error: report-modal-body not found'); return; }

        // Reset
        modalBody.style.display = 'block';
        result.style.display = 'none';
        selectedSuspect = null;

        // Build NPC cards
        const npcCards = NPC_DATA.map(npc => `
            <div class="report-npc-card" id="report-card-${npc.id}" onclick="selectReportSuspect('${npc.id}')">
                <img src="${npc.avatar}" alt="${npc.name}">
                <span class="npc-name">${npc.name}</span>
                <span class="npc-role">${npc.role}</span>
            </div>
        `).join('');

        // Render everything at once
        modalBody.innerHTML = `
            <h3 style="text-align:center; font-family:var(--font-serif); font-size:1.4rem; margin-bottom:8px;">🚨 犯人舉報</h3>
            <p style="text-align:center; font-size:0.85rem; color:var(--text-secondary); margin-bottom:24px;">根據你的調查結果，你認為誰是殺害總籌 K 的兇手？</p>
            <div class="report-npc-grid" id="report-npc-grid">${npcCards}</div>
            <div class="report-confirm-area" id="report-confirm-area">
                <button class="report-confirm-btn" id="report-confirm-btn" disabled onclick="confirmReport()">
                    確認舉報 🚨
                </button>
            </div>
            <p style="text-align:center; font-size:0.75rem; color:var(--text-muted); margin-top:16px;">⚠️ 舉報後無法更改，請確認你的推理！</p>
        `;

        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        console.log('openReportModal success');
    } catch(e) {
        alert('Report modal error: ' + e.message);
        console.error('openReportModal error:', e);
    }
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

    // If already in Phase 2 on reload, restore dark theme and show report button
    if (gameState.phase >= 2) {
        document.body.classList.add('phase2');
        document.querySelector('.sidebar-header h3').textContent = '🔍 偵查進度';
        document.querySelector('.case-file-tag').textContent = '🔍 INVESTIGATION';
        document.getElementById('report-btn').style.display = '';
    }
});
