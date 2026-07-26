// ============================================
//  GAME DATA — Phase 1: 8 NPCs
// ============================================
const NPC_DATA = [
    {
        id: 'A',
        name: '副籌 A',
        fullName: 'A',
        role: '副籌',
        avatar: 'assets/npc_a.png',
        trait: '冷靜、掌控全局、帶風向',
        mindset: '極力撇清一年前的嫌疑，將 Leader 的不在場引導為「精神崩潰、丟下爛攤子跑路」，並把財務問題髒水潑給 G。',
        questions: [
            {
                q: '對於營隊的帳目與資金管理，你身為副籌了解多少？',
                a: '帳目主要是總務 G 在管。雖然大筆支出要我跟 Leader 複核，但後期太忙，只要 Leader 簽字我就放行。如果現在帳目有高達二、三十萬的出入，你們應該去嚴查總務 G，看他是不是帳沒記清楚，或者……有人手腳不乾淨，故意挪用公款？'
            },
            {
                q: '你最後一次看到 Leader 是什麼時候？他當時狀態如何？',
                a: '最後一晚深夜十點出頭吧，他一個人躲在辦公室。我好心問他要不要幫忙，他居然沉著臉叫我滾。他那陣子狀況非常詭異，常常看著文件發呆，很多決策到後來都是我含淚幫他分擔。我看他就是精神出了狀況，壓力太大，丟下爛攤子自己先回台北跑路了。'
            }
        ]
    },
    {
        id: 'G',
        name: '總務 G',
        fullName: 'G',
        role: '總務',
        avatar: 'assets/npc_g.png',
        trait: '極度焦慮、崩潰邊緣',
        mindset: '極度害怕被發現「28萬缺口」。他以為 Leader 是因為資金缺口跑路或自殺，回答時瘋狂甩鍋給 Leader 與 A。',
        questions: [
            {
                q: '聽說籌備後期美宣組預算被嚴重刪減，這是你的決定嗎？',
                a: '<span class="stage-direction">（眼神瘋狂閃爍，死命捏著手指）</span>這怎麼會是我的決定？是 Leader 逼我改的！當時有一些莫名其妙的資金調整，Leader 態度很硬，叫我把美宣組經費全部砍掉來墊補。我只是個聽令做事的總務，預算有問題你們去問他，不要把責任推到我頭上！'
            },
            {
                q: '當初那份最後提交給系上的資金流動表，你確定完全沒有問題嗎？',
                a: '<span class="stage-direction">（臉色刷白，猛地一拍桌）</span>當然沒問題！那份表格是當初營隊結束後大家「共同確認」才送出去的！那時候 Leader 莫名其妙消失，大家亂成一團，副籌 A 什麼都不管，是我自己一個人不眠不休加班好幾天，好不容易才把帳對齊的！你們憑什麼質疑我的專業？'
            }
        ]
    },
    {
        id: 'B',
        name: '女友 B',
        fullName: 'B',
        role: 'Leader 的女友',
        avatar: 'assets/npc_b.png',
        trait: '委屈、憤怒、嘴硬心軟',
        mindset: '以為男友（Leader）只是用冷暴力跟自己分手、退群。表現出來的是「面子掛不住的憤怒與酸意」，但藏著甩掉手鍊的內疚。',
        questions: [
            {
                q: '你當時和 Leader 的關係似乎降到了冰點，發生了什麼事嗎？',
                a: '交往久了沒話聊不行嗎？<span class="stage-direction">（冷笑）</span>他出事前那一個月像中邪一樣，訊息整天不回。最可笑的是，我的好閨蜜 C 居然比我還清楚他的行程，每次他聯絡不上，C 就能幫他緩頰。既然他那麼想跟他的工作、還有別的女人過日子，那我也沒必要作賤自己。'
            },
            {
                q: '這一年來，妳還有試圖跟 Leader 聯絡嗎？',
                a: '聯絡？那一晚吵完架我就把我送他的情侶藍色手鍊砸在他身上、把他所有的通訊軟體都封鎖了，誰稀罕聯絡他？<span class="stage-direction">（聲音發抖，眼眶泛紅）</span>……但我起初以為他只是在跟我冷戰。直到這一年過去了，他連家裡都沒回，他到底是恨我恨到什麼程度，才要搞這種人間蒸發來報復我？'
            }
        ]
    },
    {
        id: 'C',
        name: '暗戀者 C',
        fullName: 'C',
        role: 'B 的閨蜜（暗戀 Leader）',
        avatar: 'assets/npc_c.png',
        trait: '心虛、驚慌、極力撇清',
        mindset: '極度害怕被發現當晚偷偷拿了 B 的手鍊，且曾去過廢棄小街。只要提到「手鍊」或「感情」，就會過度防衛。',
        questions: [
            {
                q: '一年前在籌備營隊期間，妳平時跟 Leader 的交友圈或身邊的人熟嗎？',
                a: '<span class="stage-direction">（揪著衣角，語速變快）</span>我跟大家都很好啊。特別是 B，她是我大學最好的閨蜜！所以那陣子她跟我抱怨 Leader 對她很冷淡時，我也很替她著想，常常幫忙去跟 Leader 對接工作……我真的只是希望他們兩個人好好的！我從來沒有想過要介入，更不可能做出對不起 B 的事！'
            },
            {
                q: '宿營最後一天的深夜，營隊活動接近尾聲時，妳都在哪裡忙些什麼？',
                a: '<span class="stage-direction">（身體緊繃）</span>我那晚後半段都在公共區整理器材。現場大排檔音樂開超大聲，大家都在狂歡，很混亂。不過……那一晚我人在公共區搬音響時，確實隱約聽到後山方向傳來很激烈的爭吵聲。但我以為是有人喝醉在鬧，就沒過去了。大家還是別往後山廢棄小街那邊去比較好。'
            }
        ]
    },
    {
        id: 'D',
        name: '學長 D',
        fullName: 'D',
        role: '營隊學長',
        avatar: 'assets/npc_d.png',
        trait: '防禦性極強、痛苦',
        mindset: '知道 Leader 為了自己挪用 5 萬公款。他以為 Leader 是因為被發現而「跑路避風頭」，極力掩護真相與救命錢。',
        questions: [
            {
                q: '聽說你一年前家裡遇到一些狀況，而且經常缺席會議去打工，是這樣嗎？',
                a: '<span class="stage-direction">（眼神極度警惕，語氣變硬）</span>我私人的家務事，到底跟營隊有什麼關係？我雖然常常遲到，但該我搬的器材我一樣都沒少搬。我妹妹的醫藥費我自己會想辦法，我不需要任何人的同情，更沒拿過營隊或任何人的恩惠！'
            },
            {
                q: '在宿營最後一天活動空檔，很多幹部都說你常常不見人影，你那時候去哪了？',
                a: '我那陣子打工太累，一有空檔就想找個安靜的地方吹吹風。我通常只是在營區外圍非常平靜地散散步而已，真的沒有去什麼奇怪的地方，也絕對沒有遇到任何人！你們不要因為我平時孤僻，就什麼事都懷疑到我頭上。'
            }
        ]
    },
    {
        id: 'F',
        name: '美宣 F',
        fullName: 'F',
        role: '美宣組組長',
        avatar: 'assets/npc_f.png',
        trait: '火爆、內疚、丟出致命目擊',
        mindset: '因為當晚罵了 Leader「你不配當總籌」而自責，表現得非常刺人，但會主動戳破學長 D 的「平靜散步」謊言。',
        questions: [
            {
                q: '宿營最後一天的深夜，妳有再去找過 Leader 嗎？當時發生了什麼？',
                a: '我們美宣組熬夜好幾個月的設計被他一刀砍，連合理解釋都不給！最後一晚深夜，我因為喝了點酒，一時衝動又單獨跑去辦公室找他理論。我當時氣瘋了，指責他不配當老大，說活動搞砸全是他一個人的責任！我罵完就後悔了，拉不下臉道歉，就自己跑去後山吹風。'
            },
            {
                q: '妳去後山吹風的時候，有注意到什麼不尋常的事情嗎？',
                a: '那一晚在後山，我遠遠地有聽到別人在激烈爭吵的聲音！更怪的是，我回營區的路上，還遠遠看到 D 學長魂不守舍的，衣服看起來髒兮兮、都是泥土，整個人慌慌張張地往水源處跑過去…… 要覺得反常，你們怎麼不去找 D 學長？憑什麼覺得是我的氣話把人逼走的！'
            }
        ]
    },
    {
        id: 'I',
        name: '巡邏員 I',
        fullName: 'I',
        role: '巡邏員',
        avatar: 'assets/npc_i.png',
        trait: '心虛、企圖脫罪、拉 A 下水',
        mindset: '極力想掩蓋自己偷懶喝酒的事實，企圖用簽到簿證明清白，卻無意間咬出副籌 A 的「藍筆與時間」破綻。',
        questions: [
            {
                q: '隊員回憶那一晚十點左右，看到你跟學弟妹在玩酒桌遊戲，你當時有認真巡邏嗎？',
                a: '<span class="stage-direction">（冷汗直流，語速變快）</span>那、那是巡邏前拍的照片！或者是之後補拍的！大家出來宿營，中間空檔跟學弟妹聊個天很正常吧？但我保證我的巡邏絕對沒有漏掉，該走的地方我都走了，當年的巡邏簽到簿就是我的鐵證！'
            },
            {
                q: '你那晚去簽到時，有遇到其他幹部嗎？簽到處有什麼不尋常的地方嗎？',
                a: '<span class="stage-direction">（試圖轉移焦點）</span>我簽到的時候那裡沒人。不過……我記得我 22:15 左右去簽名時，看到副籌 A 已經簽在上面了（時間寫著 22:10）。對了，當時簽到處公用的黑色原子筆好像沒水了，但 A 簽名的筆跡卻是藍色的。這沒什麼大不了的吧？可能他自己有帶筆，反正我是用嘴咬著公用黑筆勉強寫完的。'
            }
        ]
    },
    {
        id: 'E',
        name: '農場主人 E',
        fullName: 'E',
        role: '農場主人',
        avatar: 'assets/npc_e.png',
        trait: '閃爍其詞、隱瞞重罪',
        mindset: '其實知道人死了（被他埋了），心懷愧疚與恐懼，但死咬著 Leader 是「壓力太大，自己坐車跑路」不放。',
        questions: [
            {
                q: '聽說一年前你和 Leader 交情很好，在營期結束前，他有跟你提過什麼煩惱嗎？',
                a: '<span class="stage-direction">（眼神微微一變，隨即嘆氣）</span>那孩子真的很有禮貌，他出事那段時間，看起來確實很累。我有勸他多休息，但他那時總說是學校系上活動的事。喔對了……他那陣子好像買了一個小保險箱，說是系上活動要用的重要道具，暫時寄放在我這。他失蹤後，這東西就一直擺在我的儲藏室裡，我都沒動過。'
            },
            {
                q: '一年前事發後的隔天早上，大家發現 Leader 沒出現時，你在農場周邊巡視有注意到什麼嗎？',
                a: '唉，我清晨去巡邏，整個農場都靜悄悄的，真的什麼人都沒看到啊。後山那邊風大，我當時還以為那孩子是一個人壓力太大、想不開，自己先坐車回台北市區了。誰能想到這一年來他居然都沒回家……可能他就只是在我們沒注意的時候自己離開了吧……'
            }
        ]
    }
];

// ============================================
//  GAME STATE
// ============================================
const gameState = {
    questioned: {},       // { npcId: questionIndex }
    currentNpc: null,
    notes: '',
    log: []
};

// Load saved state
function loadState() {
    try {
        const saved = localStorage.getItem('campMystery_state');
        if (saved) {
            const parsed = JSON.parse(saved);
            Object.assign(gameState, parsed);
        }
        const notes = localStorage.getItem('campMystery_notes');
        if (notes) gameState.notes = notes;
    } catch (e) {
        console.warn('Failed to load state:', e);
    }
}

function saveState() {
    try {
        localStorage.setItem('campMystery_state', JSON.stringify({
            questioned: gameState.questioned,
            log: gameState.log
        }));
        localStorage.setItem('campMystery_notes', gameState.notes);
    } catch (e) {
        console.warn('Failed to save state:', e);
    }
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
        updateProgress();
        // Restore notes
        const notesEl = document.getElementById('player-notes');
        if (notesEl) notesEl.value = gameState.notes;
    }
}

function startGame() {
    showScreen('briefing-screen');
}

// ============================================
//  TABS
// ============================================
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));

    document.getElementById(`tab-${tabName}`).classList.add('active');
    document.querySelector(`.sidebar-btn[data-tab="${tabName}"]`).classList.add('active');

    // Close sidebar on mobile
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
        const card = document.createElement('div');
        card.className = `npc-card${isQuestioned ? ' questioned' : ''}`;
        card.style.setProperty('--delay', `${index * 0.07}s`);
        card.onclick = () => openNpcDialog(npc.id);

        card.innerHTML = `
            <div class="npc-card-header">
                <img class="npc-avatar" src="${npc.avatar}" alt="${npc.name}" loading="lazy">
                <div>
                    <div class="npc-card-name">${npc.name}</div>
                    <span class="npc-role-badge">${npc.role}</span>
                </div>
            </div>
            <p class="npc-card-trait">「${npc.trait}」</p>
        `;

        grid.appendChild(card);
    });
}

// ============================================
//  NPC DIALOG
// ============================================
function openNpcDialog(npcId) {
    const npc = NPC_DATA.find(n => n.id === npcId);
    if (!npc) return;

    gameState.currentNpc = npc;

    // Set header
    document.getElementById('npc-dialog-avatar').innerHTML =
        `<img src="${npc.avatar}" alt="${npc.name}">`;
    document.getElementById('npc-dialog-name').textContent = npc.name;
    document.getElementById('npc-dialog-role').textContent = npc.role;
    document.getElementById('npc-dialog-desc').textContent = npc.trait;

    const body = document.getElementById('npc-dialog-body');

    if (gameState.questioned[npcId] !== undefined) {
        // Already questioned — show answer
        const qIndex = gameState.questioned[npcId];
        const question = npc.questions[qIndex];
        body.innerHTML = `
            <div class="answer-container">
                <div class="answer-question">Q：${question.q}</div>
                <div class="answer-text">${question.a}</div>
                <button class="answer-done-btn" onclick="closeNpcModal()">關閉</button>
            </div>
        `;
    } else {
        // Show question selection
        body.innerHTML = `
            <p class="question-prompt">選擇一個問題詢問 ${npc.name}：</p>
            ${npc.questions.map((q, i) => `
                <button class="question-btn" data-qnum="Q${i + 1}" onclick="askQuestion('${npc.id}', ${i})">
                    ${q.q}
                </button>
            `).join('')}
        `;
    }

    // Open modal
    document.getElementById('npc-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function askQuestion(npcId, questionIndex) {
    const npc = NPC_DATA.find(n => n.id === npcId);
    if (!npc) return;

    // Record
    gameState.questioned[npcId] = questionIndex;
    gameState.log.push({
        npcId,
        npcName: npc.name,
        npcRole: npc.role,
        questionIndex,
        question: npc.questions[questionIndex].q,
        answer: npc.questions[questionIndex].a,
        timestamp: Date.now()
    });
    saveState();

    // Show answer with typing effect
    const body = document.getElementById('npc-dialog-body');
    const question = npc.questions[questionIndex];
    const rawAnswer = question.a;

    body.innerHTML = `
        <div class="answer-container">
            <div class="answer-question">Q：${question.q}</div>
            <div class="answer-text" id="typing-area"></div>
            <button class="answer-done-btn" id="answer-done-btn" style="display:none" onclick="closeNpcModal()">關閉</button>
        </div>
    `;

    // Typing effect
    typeText(rawAnswer, document.getElementById('typing-area'), () => {
        document.getElementById('answer-done-btn').style.display = 'block';
    });

    updateProgress();
    renderNpcGrid();
    renderInvestigationLog();
}

function typeText(html, container, onDone) {
    // Parse HTML to extract text and tags
    const temp = document.createElement('div');
    temp.innerHTML = html;
    const fullText = temp.textContent;
    const fullHTML = html;

    let charIndex = 0;
    const speed = 30; // ms per char

    // For simplicity, we'll do a gradual reveal by chars
    // But preserve HTML tags
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';

    function revealChar() {
        if (charIndex >= fullText.length) {
            container.innerHTML = fullHTML;
            if (onDone) onDone();
            return;
        }

        charIndex += 1;

        // Find position in HTML that corresponds to charIndex plain text chars
        let plainCount = 0;
        let htmlPos = 0;
        let inTag = false;
        for (let i = 0; i < fullHTML.length; i++) {
            if (fullHTML[i] === '<') inTag = true;
            if (!inTag) {
                plainCount++;
                if (plainCount === charIndex) {
                    htmlPos = i + 1;
                    break;
                }
            }
            if (fullHTML[i] === '>') inTag = false;
        }

        // Make sure we don't cut in the middle of a tag
        let sliceEnd = htmlPos;
        let tagDepth = 0;
        for (let i = 0; i < sliceEnd; i++) {
            if (fullHTML[i] === '<' && fullHTML[i + 1] !== '/') tagDepth++;
            if (fullHTML[i] === '<' && fullHTML[i + 1] === '/') tagDepth--;
            if (fullHTML[i] === '>' && tagDepth > 0) tagDepth--;
        }

        container.innerHTML = fullHTML.substring(0, sliceEnd);
        container.appendChild(cursor);

        const nextSpeed = speed + Math.random() * 20 - 10;
        setTimeout(revealChar, nextSpeed);
    }

    revealChar();
}

function closeNpcModal() {
    document.getElementById('npc-modal').classList.remove('open');
    document.body.style.overflow = '';
    gameState.currentNpc = null;
}

// ============================================
//  CLUE MODALS
// ============================================
function openClueModal(type) {
    const body = document.getElementById('clue-modal-body');

    if (type === 'handbook') {
        body.innerHTML = `
            <img class="clue-modal-img" src="assets/handbook.png" alt="營隊手冊">
            <h3 class="clue-modal-title">📒 第 12 屆宿營幹部編制手冊</h3>
            <p class="clue-modal-desc">
                這份手冊列出了第 12 屆大學宿營的完整幹部名單。<br>
                注意：名單上的「總籌」在宿營最後一晚之後，就再也沒有出現在任何人的回答裡。
            </p>
            <div class="org-chart">
                <h4>幹部編制表</h4>
                <div class="org-row highlight">
                    <span class="org-title">總籌（Leader）</span>
                    <span class="org-name">❌ 已失蹤</span>
                </div>
                <div class="org-row">
                    <span class="org-title">副籌</span>
                    <span class="org-name">A</span>
                </div>
                <div class="org-row">
                    <span class="org-title">總務</span>
                    <span class="org-name">G</span>
                </div>
                <div class="org-row">
                    <span class="org-title">美宣組長</span>
                    <span class="org-name">F</span>
                </div>
                <div class="org-row">
                    <span class="org-title">巡邏員</span>
                    <span class="org-name">I</span>
                </div>
                <div class="org-row">
                    <span class="org-title">營隊學長</span>
                    <span class="org-name">D</span>
                </div>
                <div class="org-row">
                    <span class="org-title">相關人員</span>
                    <span class="org-name">B（Leader 女友）、C（B 的閨蜜）</span>
                </div>
                <div class="org-row">
                    <span class="org-title">農場主人</span>
                    <span class="org-name">E</span>
                </div>
            </div>
        `;
    } else if (type === 'photo') {
        body.innerHTML = `
            <img class="clue-modal-img" src="assets/group_photo.png" alt="大合照">
            <h3 class="clue-modal-title">📷 第 12 屆宿營大合照</h3>
            <p class="clue-modal-desc">
                宿營第一天拍攝的全體合照。照片中可以看到所有營隊幹部和參加者。<br><br>
                這張照片確認了這確實是<strong>第 12 屆宿營</strong>的活動。<br>
                前排中央的人就是 Leader（總籌），目前已失蹤一年。<br><br>
                照片中的每個人看起來都很開心，沒有人能預料到最後一晚會發生什麼事。
            </p>
        `;
    }

    document.getElementById('clue-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeClueModal() {
    document.getElementById('clue-modal').classList.remove('open');
    document.body.style.overflow = '';
}

// ============================================
//  PROGRESS
// ============================================
function updateProgress() {
    const total = NPC_DATA.length;
    const done = Object.keys(gameState.questioned).length;
    const pct = (done / total) * 100;

    document.getElementById('progress-fill').style.width = `${pct}%`;
    document.getElementById('progress-text').textContent = `已訊問 ${done} / ${total} 人`;
}

// ============================================
//  INVESTIGATION LOG
// ============================================
function renderInvestigationLog() {
    const container = document.getElementById('investigation-log-content');
    if (gameState.log.length === 0) {
        container.innerHTML = '<p class="log-empty">尚未進行任何訊問。</p>';
        return;
    }

    container.innerHTML = gameState.log.map(entry => {
        // Strip HTML tags for log display
        const plainAnswer = entry.answer.replace(/<[^>]*>/g, '');
        return `
            <div class="log-entry">
                <div class="log-entry-header">
                    <span class="log-entry-name">${entry.npcName}</span>
                    <span class="log-entry-role">${entry.npcRole}</span>
                </div>
                <div class="log-entry-q">Q：${entry.question}</div>
                <div class="log-entry-a">A：${plainAnswer}</div>
            </div>
        `;
    }).join('');
}

// ============================================
//  NOTES AUTO-SAVE
// ============================================
function setupNotes() {
    const notesEl = document.getElementById('player-notes');
    if (!notesEl) return;
    notesEl.value = gameState.notes;
    notesEl.addEventListener('input', () => {
        gameState.notes = notesEl.value;
        saveState();
    });
}

// ============================================
//  SIDEBAR MOBILE
// ============================================
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

// ============================================
//  PARTICLE EFFECT
// ============================================
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.3 + 0.05;
            this.fadeSpeed = Math.random() * 0.005 + 0.001;
            this.fadingIn = true;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.fadingIn) {
                this.opacity += this.fadeSpeed;
                if (this.opacity >= 0.35) this.fadingIn = false;
            } else {
                this.opacity -= this.fadeSpeed;
                if (this.opacity <= 0) this.reset();
            }

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(160, 140, 220, ${this.opacity})`;
            ctx.fill();
        }
    }

    // Create particles
    const count = Math.min(80, Math.floor(canvas.width * canvas.height / 15000));
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        animId = requestAnimationFrame(animate);
    }

    animate();
}

// ============================================
//  KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeNpcModal();
        closeClueModal();
    }
});

// ============================================
//  INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initParticles();
    setupNotes();
});
