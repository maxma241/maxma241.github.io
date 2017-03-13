const introduce = {
  cname: '馬楊陞',
  ename: 'Max Ma',
  jobTitle: 'Aerospace Engineer',
  livedIn: '台北市',
  email: 'marfi241@gmail.com',
  github: 'https://github.com/maxma241',
  phone: '請用信箱通知後在給您',
  about:'對JavaScript很有興趣的開發者，熱衷和鑽研前後端新技術，喜歡與人討論新技術和code，具有良好的學習能力。目前都會follow polo主持的線上讀書會。希望成為前端工程師(重前輕後)。職場上希望能學習及熟練更多新穎技術，熟練前端JavaScript Framework和開發工具，後端希望把node.js技能等級點高，讓自己的技術更扎實。'
}

const experiences = [
  {
    workAt: '商智資訊',
    companyUrl: 'http://www.bi.com.tw/',
    position: 'Java Engineer',
    duration: '2016/06 – 2017/02',
    description: '商智資訊提供了銀行金融服務解決方案，例如財富管理系統、行動理專APP、資產配置系統。',
    highlights: [
      '負責財富管理系統，使用Java Struts2, Spring',
      '幫助公司導入git版控，開了內部教育訓練課程',
      '引導同事使用ES6',
      '專案follow git flow 使用jenkins自動包版'
    ]
  },
  // {
  //   workAt: '基隆某家高中補習班',
  //   companyUrl: '',
  //   position: '數理輔導老師',
  //   duration: '2009/09 – 2011/01',
  //   description: '高中數理還不錯，因緣際會的在這邊打工',
  //   highlights: [
  //     '教數學、物理、化學'
  //   ]
  // }
]

const educations = [
  {
    educatedAt: '國立台灣海洋大學',
    title: '資工所碩士',
    duration: '2013/08 – 2015/08',
    description: '服務導向暨軟體工程實驗室(SOSELab)',
  },
  {
    educatedAt: '國立台灣海洋大學',
    title: '資工系學士',
    duration: '2009/09 – 2013/06',
    description: '主要走Web領域'
  }
]

const projects = [
  {
    title: '個人簡歷',
    meta: ['vue', 'vue-cli', 'vue-material', 'ES6', 'scss'],
    description: '用了vue寫了個簡歷頁面，使用了vue material',
    url:'https://maxma241.github.io/',
    repository: 'https://github.com/maxma241/maxma241.github.io'
  },
  {
    title: '為了下指令打卡',
    meta: ['node', 'selenium-webdriver', 'babel', 'ES6'],
    description: '前公司2017新制的關係，為了省時間打卡就做了這個',
    url:'',
    repository: 'https://github.com/maxma241/work_punch'
  },
  {
    title: '綜藝節目-綜藝玩很大',
    meta: ['react'],
    description: '會看這節目，為了方便就寫了一個簡單的page，一開始用傳統jQuery方式寫，後來新增一頁用React呈現的view',
    url:'http://maxma241.github.io/tvprogram/TVRE.html',
    repository: 'https://github.com/maxma241/tvprogram'
  },
  {
    title: '碩論',
    meta: ['Tomcat/Servlet', 'jQuery UI/mobile', 'Mashup', 'RESTful Service'],
    description: '前端mashup，後端mashup。目的是節省手機流量與操作時間',
    url:'https://www.youtube.com/playlist?list=PLNksLR6Z4ynYreXMIco1Sqg17OzGU4rF9',
    repository: ''
  },
  {
    title: '海大APP',
    meta: ['Android', 'Java', 'RESTful Service'],
    description: '第二期開發與維護',
    url:'https://play.google.com/store/apps/details?id=tw.edu.ntou&hl=zh_TW',
    repository: ''
  },
]

const skills = [
  { name: 'JavaScript', value:90 },
  { name: 'HTML/CSS', value:75 },
  { name: 'ES6', value:87 },
  { name: 'Vue.js', value:67 },
  { name: 'React.js', value: 60 },
  { name: 'Node.js', value: 40},
  { name: 'Webpack', value: 80},
  { name: 'Git', value:90 },
  { name: 'Git/Github flow', value:87 },
  { name: 'Gulp', value:70 }
]

export default {
  introduce,
  experiences,
  educations,
  projects,
  skills
}
/**
 * 104
 * 我是，在2015年八月取得碩士學位。希望尋找web工程師相關的工作機會。出生於80年3月22日。於國立台灣海洋大學取得學士學位及碩士學位。研究所是在馬尚彬教授的服務導向及軟體工程實驗室，主要是進行web  service及軟體工程技術方面的研究。

大學期間，在高中補習班擔任數理輔導老師的工作，從大一打工到大三的寒假，約兩年半多。這期間在學校也參加了系上的籃球隊。
在我大二大三左右，是實況及影音類型的website開始發展的時候，所以我就開始往web這個方向去修課。從前端的HTML、CSS、JavaScript及jQuery到後端的tomcat/servlet、jsp。
大三時參加過ITSA線上程式設計大賽
升研究所前的暑假參加了教育部資訊軟體人才培育計畫的UI/UX  Summer  School
碩士擔任過網頁程式設計助教及Java程式設計助教

我的碩士論文是提出一個新的mobile  mashup方法，此方法有兩種機制，android-fragment-based的service  brick架構及以狀態驅動之RESTful服務的組合機制。
前者的方法提升了service  brick的讀取速度，且大幅降低讀取網頁資源的流量。後者讓service  brick更有效的調用後端RESTful服務。

專長
開發工具:notepad,  sublime,  Eclipse
程式語言:HTML5,  CSS3,  JavaScript,  Java
Framework/技術:jQuery,  AJAX,  RESTful  service
資料庫:MySQL

相關經驗
1.海大APP
海大APP第一期從零到有是實驗室學長先開發的，我升上碩一後接手是第二期計畫了
第二期計畫我主要是修改海大APP內的交通功能和將專題生所開發的圖書館功能做整合，並追蹤及改善google  play上使用者的意見或是回報的錯誤訊息。

2.碩士論文的系統
我的碩士論文一部份是接手學長的研究成果做延伸，將原本前端利用jQuery  mobile生成的web  application改為一個Android  APP的架構，以及讓前端(service  brick)更有效的呼叫後端的RESTful  service。RESTful服務的例子主要是以音樂的服務為主，利用jsoup去分析kkbox網頁上的內容並包裝成JSON，而環境是用tomcat/servlet所架設的。
一般使用者能透過一個叫做Brick-based  Application的網站來製作一個自己喜愛的brick  application
Brick-based  Application也能讓開發者上傳製作好的brick來提供給一般使用者。

關於我
好勝心強
喜歡與人溝通討論
喜歡思考問題的解決方式

未來規劃
希望能從事web前端/後端工程師相關的職務。進入職場後希望能學到更多及熟練新穎技術，熟練前端JavaScript  framework的特性及優缺點及後端的PHP或nodeJS，讓自己學會更多的web技術。 
 */