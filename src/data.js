const introduce = {
  cname: '馬楊陞',
  ename: 'Max Ma',
  jobTitle: 'Aerospace Engineer',
  livedIn: '台北市',
  email: 'marfi241@gmail.com',
  github: 'https://github.com/maxma241',
  phone: '請用信箱通知後在給您',
  about:'對JavaScript很有興趣的開發者，熱衷和鑽研前後端新技術，喜歡與人討論新技術和code寫法，具有良好的學習能力。喜歡看網球、棒球。'
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
      '前端導入es6'
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
    description: ''
  }
]

const projects = [
  {
    title: 'Project 1',
    meta: 'Propulsion Engineer',
    description: 'Responsibilities included: writing technical reports and other documentation, such as handbooks and bulletins, for use by engineering staff, management, and customers, analyzing project requests and proposals and engineering data to determine feasibility, predictability, cost, and production time of aerospace or aeronautical product.',
    images: [
      {
        thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=150&h=150',
        original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=900&h=900'
      },
      {
        thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=secondimage&w=150&h=150',
        original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=secondimage&w=900&h=900'
      },
      {
        thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=thirdImage&w=150&h=150',
        original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=thirdImage&w=900&h=900'
      }
    ]
  },
  {
    title: 'Project 1',
    meta: 'Propulsion Engineer',
    description: 'Responsibilities included: writing technical reports and other documentation, such as handbooks and bulletins, for use by engineering staff, management, and customers, analyzing project requests and proposals and engineering data to determine feasibility, predictability, cost, and production time of aerospace or aeronautical product.',
    images: [
      {
        thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=150&h=150',
        original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=900&h=900'
      },
      {
        thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=secondimage&w=150&h=150',
        original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=secondimage&w=900&h=900'
      },
      {
        thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=thirdImage&w=150&h=150',
        original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=thirdImage&w=900&h=900'
      }
    ]
  }
]

const skills = [
  { name: 'JavaScript', value:90 },
  { name: 'HTML', value:75 },
  { name: 'CSS', value:60 },
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
