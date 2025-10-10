import tianjinHuangImg from './assets/tj.png';
import yunxiaoZhangImg from './assets/yunxiao.jpeg'; 
import gaojieJinImg from './assets/gj.png'; 
export const DATA = {
  lab: {
    name: 'TruGreen AI Lab',
    tagline: 'Trustworthy, Green, Efficient AI for Real-World Impact',
    contacts: {
      email: 'trugreen@exeter.ac.uk',
      address: 'Dept. of Computer Science, University of Exeter, Exeter, UK',
      twitter: 'https://x.com/',
      github: 'https://github.com/',
    },
    director: {
      name: 'Lu Liu',
      role: 'Lab Director & Principal Investigator',
      affiliation: 'University of Exeter',
      email: 'l.liu3@exeter.ac.uk',
      img: 'https://placehold.co/240x240?text=Lu%20Liu',
      webpage: 'https://experts.exeter.ac.uk/42893-lu-liu',
    },
    pis: [
      { name: 'Tianjin Huang', role: 'Principal Investigator', affiliation: 'University of Exeter', email: 't.huang2@exeter.ac.uk', img: tianjinHuangImg, webpage:'https://tianjinyellow.github.io/'},
      { name: 'Gaojie Jin', role: 'Principal Investigator', affiliation: 'University of Exeter', email: 'g.jin@exeter.ac.uk', img: gaojieJinImg, webpage:'https://alexkael.github.io/'},
      { name: 'Rongrui Mu', role: 'Principal Investigator', affiliation: 'University of Exeter', email: 'R.Mu2@exeter.ac.uk', img: 'https://placehold.co/240x240?text=Rongrui%20Mu' },
      { name: 'Yunxiao Zhang', role: 'Principal Investigator', affiliation: 'University of Exeter', email: 'Y.Zhang12@exeter.ac.uk', img: yunxiaoZhangImg, webpage:'https://experts.exeter.ac.uk/41641-yunxiao-zhang' },
    ],
    // members: [
    //   {
    //     name: 'Alice Example',
    //     role: 'Research Associate',
    //     affiliation: 'University of Exeter',
    //     email: '',
    //     img: 'https://placehold.co/240x240?text=Alice%20Example',
    //     webpage: '',
    //   },
    //   {
    //     name: 'Bob Example',
    //     role: 'Research Assistant',
    //     affiliation: 'University of Exeter',
    //     email: '',
    //     img: 'https://placehold.co/240x240?text=Bob%20Example',
    //     webpage: '',
    //   },
    // ],

    /**
     * A list of current PhD students supervised within the lab.  Each
     * entry contains a name and short descriptor.  These can be
     * expanded with additional fields (e.g. email, webpage) as needed.
     */
    phd: [
      {
        name: 'Tao Yong',
        role: 'PhD Student',
        affiliation: 'University of Exeter',
        email: '',
        img: 'https://placehold.co/240x240?text=Charlie%20Student',
        webpage: '',
      },
      {
        name: 'Xinyu Li',
        role: 'PhD Student',
        affiliation: 'University of Exeter',
        email: '',
        img: 'https://placehold.co/240x240?text=Charlie%20Student',
        webpage: '',
      },
      {
        name: 'Zixia Wang',
        role: 'PhD Student',
        affiliation: 'University of Exeter',
        email: '',
        img: 'https://placehold.co/240x240?text=Charlie%20Student',
        webpage: '',
      },
    ],

    /**
     * A list of undergraduate or Masters mentees who are working with
     * the lab.  Keep this list up to date with mentees’ names and
     * affiliations.  Similar to other person entries, optional
     * properties like email and webpage may be added when available.
     */
    mentees: [
      {
        name: 'Ziquan Zhu',
        role: 'Remote Visitor',
        affiliation: 'University of Leicester',
        email: '',
        img: 'https://placehold.co/240x240?text=Dana%20Mentee',
        webpage: '',
      },
      {
        name: 'Shuaitong Liu',
        role: 'Remote Visitor',
        affiliation: 'Southwest University',
        email: '',
        img: 'https://placehold.co/240x240?text=Dana%20Mentee',
        webpage: '',
      },
    ],
  },
  
  researchAreas: [
    { title: 'Trustworthy AI', desc: 'Robustness, safety, alignment and evaluation across modalities.' },
    { title: 'Green & Efficient ML', desc: 'Energy-aware training, compression, and low-precision inference.' },
    { title: 'Sparse & Stable Optimization', desc: 'Optimizers and curricula that reduce compute and improve stability.' },
    { title: 'Applied AI', desc: 'Remote sensing, healthcare, and scientific discovery.' },
  ],
  news: [
    // Newest first.  When only the month and year are known we default the day to the 1st.
    {
      date: '2025-09-01',
      title: 'NeurIPS 2025 paper accepted',
      // Provide segments so that multiple portions of the detail can be linked individually.  The
      // segments array will override the `highlight` and `highlightUrl` fields below when
      // rendering.  Each segment has a `text` field and an optional `url`.  When `url` is
      // provided the text becomes a red, underlined link.
      detailSegments: [
        { text: 'One paper accepted at NeurIPS 2025: ' },
        { text: 'REOBench', url: 'https://arxiv.org/abs/2505.16793' },
        { text: '.' },
      ],
    },
    {
      date: '2025-05-01',
      title: 'EUSIPCO 2025 audio deepfake benchmarking',
      detail: 'Benchmarking Audio Deepfake Detection Robustness in real‑world communication scenarios accepted at EUSIPCO 2025.',
      highlight: 'EUSIPCO 2025',
      highlightUrl: 'https://arxiv.org/abs/2504.12423',
    },
    {
      date: '2025-05-01',
      title: 'REOBench released',
      detail: 'We release REOBench: a benchmark for evaluating the robustness of Earth observation foundation models.',
      highlight: 'REOBench',
      highlightUrl: 'https://github.com/lx709/reobench',
    },
    {
      date: '2025-05-01',
      title: 'MICCAI 2025 early acceptance',
      detail: 'One paper (LKA) early accepted at MICCAI 2025.',
      highlight: 'MICCAI 2025',
      highlightUrl: 'https://arxiv.org/abs/2506.19118',
    },
    {
      date: '2025-05-01',
      title: 'ICML 2025 paper accepted',
      detail: 'One paper (LIFT) accepted at ICML 2025.',
      highlight: 'ICML 2025',
      highlightUrl: 'https://arxiv.org/abs/2506.00772',
    },
    {
      date: '2025-03-01',
      title: 'Journal paper accepted',
      detail: 'A paper on traffic congestion prediction accepted by Expert Systems with Applications.',
      url: 'https://doi.org/10.1016/j.eswa.2025.127200',
      highlight: 'Expert Systems with Applications',
    },
    {
      date: '2025-03-01',
      title: 'ICLR 2025 SCOPE workshop papers',
      detail: 'Two papers accepted at the ICLR 2025 SCOPE workshop: Spike‑aware Optimizer (SPAM) and StableSPAM.',
      highlight: 'ICLR 2025 SCOPE',
    },
    {
      date: '2025-01-01',
      title: 'ICLR 2025 papers accepted',
      detailSegments: [
        { text: 'Three papers accepted at ICLR 2025: ' },
        { text: 'Spike‑aware Optimizer (SPAM)', url: 'https://arxiv.org/abs/2501.06842' },
        { text: ', ' },
        { text: 'Composable Interventions for Language Models', url: 'https://arxiv.org/abs/2407.06483' },
        { text: ', and ' },
        { text: 'Robust Fairness via Confusional Spectral Regularization', url: 'https://arxiv.org/abs/2501.13273' },
        { text: '.' },
      ],
      // highlight can be retained for compatibility, but it’s ignored when detailSegments is present
      highlight: 'ICLR 2025',
    },
    {
      date: '2024-12-01',
      title: 'Invited talk at SGAI',
      detail: 'Invited talk delivered at the SGAI conference in Cambridge on benchmarking the robustness of remote sensing foundation models.',
      url: 'https://www.bcs.org/events-calendar/2025/april/webinar-sgai-virtual-seminar-series-2025-computer-vision-applications/',
    },
    {
      date: '2024-12-01',
      title: 'AAAI 2025 paper accepted',
      detail: 'Visual prompting upgrades neural network sparsification: a data‑model perspective accepted at AAAI 2025.',
      highlight: 'AAAI 2025',
      highlightUrl: 'https://arxiv.org/abs/2312.01397',
    },
    {
      date: '2024-07-01',
      title: 'BMVC 2024 paper accepted',
      detail: 'Are Sparse Neural Networks Better Hard Sample Learners? accepted at BMVC 2024.',
      highlight: 'BMVC',
      highlightUrl: 'https://arxiv.org/abs/2409.09196',
    },
    {
      date: '2024-06-01',
      title: 'Co‑organizing NeurIPS 2024 Edge‑Device competition',
      detail: 'Co‑organizing the NeurIPS 2024 Edge‑Device Large Language Model Competition. Join us for the competition!',
      url: 'https://edge-llms-challenge.github.io/',
      highlight: 'the competition',
      highlightUrl: 'https://edge-llms-challenge.github.io/',
    },
    {
      date: '2024-03-01',
      title: 'ICLR 2024 workshop paper accepted',
      detail: 'Composing Knowledge and Compression Interventions for Language Models accepted at an ICLR 2024 workshop.',
      highlight: 'ICLR 2024 workshop',
      highlightUrl: 'https://openreview.net/forum?id=quK3DN5kUO',
    },
    {
      date: '2023-10-01',
      title: 'Information Fusion paper accepted',
      detail: 'Robust Spatiotemporal GCN accepted in Information Fusion. IF=18.5',
      highlight: 'Information Fusion',
      highlightUrl: 'https://doi.org/10.1016/j.inffus.2023.102078',
    },
    {
      date: '2023-09-01',
      title: 'Complex Networks 2024 paper accepted',
      detail: 'Heterophily‑Based Graph Neural Network for Imbalanced Classification accepted in Complex Networks 2024.',
      highlight: 'Heterophily‑Based Graph Neural Network',
      highlightUrl: 'https://arxiv.org/abs/2310.08725',
    },
    {
      date: '2023-09-01',
      title: 'NeurIPS 2023 paper accepted',
      detail: 'Channel‑DST accepted at NeurIPS 2023.',
      highlight: 'NeurIPS 2023',
      highlightUrl: 'https://arxiv.org/abs/2305.19454',
    },
    {
      date: '2023-06-01',
      title: 'ECML 2023 paper accepted',
      detail: 'Enhancing AT via Refining Optimization Trajectories accepted at ECML 2023.',
      highlight: 'ECML 2023',
      highlightUrl: 'https://arxiv.org/abs/2306.14275',
    },
    {
      date: '2023-04-01',
      title: 'ICML 2023 paper accepted',
      detail: 'Larger Kernel Serve better Teachers than Transformers accepted at ICML 2023.',
      highlight: 'ICML 2023',
      highlightUrl: 'https://arxiv.org/abs/2305.19412',
    },
    {
      date: '2023-01-01',
      title: 'ICLR 2023 paper accepted',
      detail: 'Oral paper “Sparsity May Cry: SMC” accepted at ICLR 2023.',
      highlight: 'ICLR 2023',
      highlightUrl: 'https://arxiv.org/abs/2303.02141',
    },
    {
      date: '2022-11-01',
      title: 'LoG 2022 Best Paper Award',
      detail: 'Better GNN by Finding Graph Tickets accepted at LoG 2022 with a Best Paper Award.',
      highlight: 'Best Paper Award.',
      highlightUrl: 'https://arxiv.org/abs/2211.15335',
    },
    {
      date: '2022-11-01',
      title: 'AAAI 2023 paper accepted',
      detail: 'Lottery Pools accepted at AAAI 2023.',
      highlight: 'AAAI 2023',
      highlightUrl: 'https://arxiv.org/abs/2208.10842',
    },
    {
      date: '2022-06-01',
      title: 'ECML‑PKDD 2022 paper accepted',
      detail: 'Hop‑count based self‑supervised anomaly detection accepted at ECML‑PKDD 2022.',
      highlight: 'ECML‑PKDD',
      highlightUrl: 'https://arxiv.org/abs/2104.07917',
    },
  ],
  publications: [
    { year: 2025, title: 'SPAM: Spike-Aware Adam with Momentum Reset for Stable LLM Training', authors: 'Tianjin Huang et al.', venue: 'ICML', link: 'https://arxiv.org/abs/2501.06842' },
    { year: 2025, title: 'Benchmarking Audio Deepfake Detection Robustness in real‑world communication scenarios', authors: 'Haohan Shi et al.', venue: 'EUSIPCO', link: 'https://eusipco2025.org/wp-content/uploads/pdfs/0000566.pdf' },
    { year: 2025, title: 'S2O: Enhancing Adversarial Training With Second-Order Statistics of Weights', authors: 'Gaojie Jin et al.', venue: 'IEEE TPAMI', link: 'https://ieeexplore.ieee.org/document/11027475' },
    { year: 2025, title: 'Invariant Correlation of Representation With Label', authors: 'Gaojie Jin et al.', venue: 'IEEE TIFS', link: 'https://ieeexplore.ieee.org/abstract/document/10969094' },
    { year: 2025, title: 'Enhancing Robust Fairness via Confusional Spectral Regularization', authors: 'Gaojie Jin et al.', venue: 'ICLR', link: 'https://arxiv.org/pdf/2501.13273' },
  ],
  resources: [
    { label: 'Open Positions', url: '#/contact' },
    { label: 'Code & Datasets', url: 'https://github.com/' },
    { label: 'Seminar Series', url: '#/news' },
  ],
positions: [
  {
    title: 'CSC & University of Exeter PhD Scholarships',
    detail:
      'Up to 50 fully funded PhD scholarships for Chinese applicants to study at the University of Exeter as part of the China Scholarship Council collaboration',
    url: 'https://www.exeter.ac.uk/study/pg-research/csc-scholarships/',
  },
  {
    title: 'EPSRC Funded PhD Studentships',
    detail:
      'Up to 15 fully funded doctoral studentships available through the EPSRC Doctoral Landscape Award at Exeter for September 2025 entry',
    url: 'https://www.exeter.ac.uk/study/pg-research/funding/phdfunding/epsrc-dla-studentships/',
  },
  {
    title: 'UKRI CDT in Environmental Intelligence',
    detail:
      'Centre for Doctoral Training in Environmental Intelligence offering interdisciplinary training at the intersection of data science, AI and environmental challenges',
    url: 'https://www.exeter.ac.uk/study/pg-research/funding/phdfunding/fundedcentres/eicdt/',
  },
  {
    title: 'ESE Faculty PhD Studentships',
    detail:
      'Studentships in the Faculty of Environment, Science and Economy supporting research aligned with Exeter’s scientific priorities',
    url: 'https://www.exeter.ac.uk/study/pg-research/funding/phdfunding/fundingbyfaculty/ese/',
  },
  {
    title: 'Doctoral Training Partnerships & Centres',
    detail:
      'Various UK research council funded doctoral training partnerships and centres available through Exeter, spanning arts, biology, social sciences and engineering',
    url: 'https://www.exeter.ac.uk/study/pg-research/funding/phdfunding/fundedcentres/',
  },
  {
    title: 'Commonwealth & International Scholarships',
    detail:
      'Commonwealth Scholarship Plan provides full scholarships for talented students from eligible countries to pursue PhD study in other Commonwealth nations, including Exeter',
    url: 'https://cscuk.dfid.gov.uk',
  },
  {
    title: 'EPSRC Postdoctoral Fellowship',
    detail:
      'Fellowships funded by the UK Engineering and Physical Sciences Research Council offering support and flexibility for early or established researchers to develop world‑leading STEM research ideas',
    url: 'https://www.ukri.org/opportunity/epsrc-fellowships-early-and-established-career/',
  },
  {
    title: 'RAEng Research Fellowship',
    detail:
      'Five‑year fellowships aimed at early‑career researchers within four years of their PhD to undertake ambitious engineering projects at a UK host institution; fellows must start between August and October 2026',
    url: 'https://raeng.org.uk/programmes-and-prizes/programmes/uk-grants-and-prizes/support-for-research/research-fellowships/eligibility/',
  },
  {
    title: 'Royal Society University Research Fellowship',
    detail:
      'Eight‑year fellowships for outstanding early career scientists to build an independent research career in the UK or Republic of Ireland, with up to £1.87 million in funding',
    url: 'https://royalsociety.org/grants/university-research/',
  },
  {
    title: 'Newton International Fellowship',
    detail:
      'Two‑year fellowships jointly run by the Royal Society and British Academy to attract non‑UK early career researchers, providing up to £280k and fostering international collaboration',
    url: 'https://royalsociety.org/grants/newton-international/',
  },
  {
    title: 'Leverhulme Early Career Fellowship',
    detail:
      'Three‑year fellowships enabling early career researchers without a permanent post to undertake a significant project; the Trust funds 100% of salary in year 1 and 50% in years 2–3, plus research expenses',
    url: 'https://www.leverhulme.ac.uk/early-career-fellowships',
  },
  {
    title: 'Marie Skłodowska‑Curie Postdoctoral Fellowship',
    detail:
      'European fellowships lasting 12–30 months open to researchers of any nationality with up to eight years of post‑PhD experience, requiring mobility to a host country and offering salary, mobility and family allowances',
    url: 'https://marie-sklodowska-curie-actions.ec.europa.eu',
  },
  {
    title: '1851 Research Fellowship',
    detail:
      'Highly competitive three‑year fellowships awarded by the Royal Commission for the Exhibition of 1851 to outstanding early career scientists and engineers to pursue independent research projects',
    url: 'https://royalcommission1851.org',
  },
  {
    title: 'Wellcome Early‑Career Award',
    detail:
      'Wellcome Trust scheme supporting early‑career researchers from any discipline to develop their own research identity in areas of human life, health and wellbeing and prepare to lead an independent programme',
    url: 'https://wellcome.org/grant-funding/schemes/early-career-awards',
  },
],
  /**
   * A list of sample project proposals for the CSC PhD scholarship.  Each
   * proposal contains a human‑readable title and the filename of the PDF
   * stored in the public folder.  Replace or extend this list with your
   * actual proposals and file names.  The CscPhd page will iterate over
   * this array to render a download button for each project.
   */
  cscProposals: [
    {
      title: 'LLM for Digital Forensics',
      file: 'csc-project-digital-forensics.pdf',
    },
    {
      title: 'Shadow AI: risk and goverance',
      file: 'csc-project-shadow-ai.pdf',
    },
  ],
}
