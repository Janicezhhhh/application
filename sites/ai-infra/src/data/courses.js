// 精选课程数据。优先链接到斯坦福最新公开课。
// 每门课程都包含官方课程主页（多数附带公开的 lecture notes / 视频）。
// xp 表示完成该课程在升级系统中获得的经验值。
// hours 是自学完成该课程（看课 + 做作业）的预计工时，用于「用时评估」。

export const courses = [
  {
    id: 'cs336',
    code: 'CS336',
    school: '斯坦福',
    title: 'Language Modeling from Scratch（从零构建语言模型）',
    term: 'Spring 2025',
    level: '进阶',
    xp: 400,
    hours: 120,
    tags: ['大模型', '训练系统', '分布式', 'GPU'],
    summary:
      '斯坦福最新的“从零造大模型”课程，覆盖数据处理、Transformer 实现、分布式训练、混合精度、推理与系统优化。AI Infra 转行者的核心课程。',
    url: 'https://stanford-cs336.github.io/spring2025/',
    focus: '从工程角度完整走通 LLM 全流程，是 AI Infra 最贴合的实战课。',
  },
  {
    id: 'cs149',
    code: 'CS149',
    school: '斯坦福',
    title: 'Parallel Computing（并行计算）',
    term: 'Fall 2024',
    level: '进阶',
    xp: 350,
    hours: 100,
    tags: ['并行计算', 'CUDA', '多核', '性能优化'],
    summary:
      '系统讲解并行编程模型、GPU/CUDA、缓存一致性、性能调优。AI Infra 工程师理解硬件与吞吐的必修内容。',
    url: 'https://gfxcourses.stanford.edu/cs149/fall24',
    focus: '打牢并行与 GPU 编程基础，是写高性能算子/训练系统的前提。',
  },
  {
    id: 'cs217',
    code: 'CS217',
    school: '斯坦福',
    title: 'Hardware Accelerators for Machine Learning（机器学习硬件加速器）',
    term: '近年',
    level: '进阶',
    xp: 350,
    hours: 80,
    tags: ['硬件加速', 'TPU/GPU', '推理优化', '编译'],
    summary:
      '从算法到硬件协同设计的视角，讲解 GPU/TPU、数据流、量化、稀疏化等加速技术。',
    url: 'https://cs217.stanford.edu/',
    focus: '理解模型如何被高效地映射到硬件上，推理优化方向的关键。',
  },
  {
    id: 'cs229',
    code: 'CS229',
    school: '斯坦福',
    title: 'Machine Learning（机器学习）',
    term: '常年开设',
    level: '基础',
    xp: 250,
    hours: 100,
    tags: ['机器学习', '数学基础', '理论'],
    summary:
      'Andrew Ng 经典机器学习课程，覆盖监督/无监督学习、优化与概率基础。建立扎实的 ML 直觉。',
    url: 'https://cs229.stanford.edu/',
    focus: '补齐机器学习理论与数学基础，理解你要为之搭建基础设施的“负载”是什么。',
  },
  {
    id: 'cs231n',
    code: 'CS231n',
    school: '斯坦福',
    title: 'Deep Learning for Computer Vision（深度学习与计算机视觉）',
    term: '常年开设',
    level: '基础',
    xp: 250,
    hours: 90,
    tags: ['深度学习', '神经网络', '反向传播'],
    summary:
      '从零实现神经网络与反向传播，理解训练过程的每一个细节。著名的作业体系非常适合动手。',
    url: 'https://cs231n.stanford.edu/',
    focus: '亲手实现训练循环，理解显存、梯度、batch 等系统侧关心的概念。',
  },
  {
    id: 'cs224n',
    code: 'CS224n',
    school: '斯坦福',
    title: 'Natural Language Processing with Deep Learning（深度学习与自然语言处理）',
    term: '常年开设',
    level: '基础',
    xp: 250,
    hours: 90,
    tags: ['NLP', 'Transformer', '词向量'],
    summary:
      '系统讲解词向量、RNN、注意力与 Transformer，是理解大模型结构的前置课程。',
    url: 'https://web.stanford.edu/class/cs224n/',
    focus: '搞懂 Transformer 内部结构，再去 CS336 做系统优化才不至于黑盒。',
  },
  {
    id: 'cs246',
    code: 'CS246',
    school: '斯坦福',
    title: 'Mining Massive Data Sets（海量数据挖掘）',
    term: '常年开设',
    level: '进阶',
    xp: 300,
    hours: 80,
    tags: ['大数据', '分布式', 'MapReduce', '系统'],
    summary:
      '讲解 MapReduce、海量数据下的算法与系统设计，对应数据基础设施与特征工程平台。',
    url: 'https://web.stanford.edu/class/cs246/',
    focus: '面向数据规模的系统思维，是数据/训练基础设施方向的补充。',
  },
  {
    id: 'cs25',
    code: 'CS25',
    school: '斯坦福',
    title: 'Transformers United（Transformer 专题）',
    term: '常年更新',
    level: '专题',
    xp: 150,
    hours: 30,
    tags: ['Transformer', '前沿', '讲座'],
    summary:
      '由前沿研究者主讲的 Transformer 系列讲座，紧跟最新进展，适合扩展视野。',
    url: 'https://web.stanford.edu/class/cs25/',
    focus: '跟踪最新模型与系统趋势，作为持续学习的“资讯源”。',
  },
]

// 所有课程的预计总工时
export const totalCourseHours = courses.reduce((sum, c) => sum + c.hours, 0)

export function getCourseById(id) {
  return courses.find((c) => c.id === id)
}
