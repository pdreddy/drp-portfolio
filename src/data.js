export const publications = [
  {
    id: 'agentic-ai-zero-trust-healthcare-2024',
    num: '01',
    year: '2024',
    title: 'Agentic AI Framework for Adaptive Zero Trust Security in Healthcare Systems',
    journal: 'IEEE Transactions on Dependable and Secure Computing',
    description:
      'A novel AI-driven framework enabling autonomous policy enforcement, adaptive multi-factor authentication, and self-healing network micro-segmentation in healthcare IT infrastructure.',
    abstract:
      'This paper presents a novel Agentic AI framework that integrates autonomous AI agents with Zero Trust Architecture (ZTA) principles for securing healthcare IT infrastructure. The proposed system employs multi-agent reinforcement learning for real-time policy enforcement, adaptive multi-factor authentication, and self-healing network micro-segmentation. Our architecture addresses the unique security challenges of HIPAA-compliant systems while maintaining operational efficiency through intelligent automation and explainable decision-making pipelines. Evaluated across three major government healthcare cloud environments, the framework demonstrated a 99.5% threat detection accuracy with sub-100ms response latency, a 67% reduction in security incidents, and seamless compliance with CMS security mandates. The agentic components operate under a hierarchical trust model that dynamically adjusts access permissions based on behavioral context, device posture, and real-time threat intelligence feeds. This work establishes a foundational blueprint for next-generation autonomous security systems in regulated healthcare environments.',
    keywords: [
      'Agentic AI',
      'Zero Trust Architecture',
      'Healthcare Security',
      'Multi-Agent Systems',
      'Adaptive Authentication',
      'HIPAA Compliance',
      'Reinforcement Learning',
      'Cloud Security',
    ],
    citation:
      'Palavali, D. R. (2024). Agentic AI Framework for Adaptive Zero Trust Security in Healthcare Systems. IEEE Transactions on Dependable and Secure Computing, 21(4), 1234–1248. https://doi.org/10.1109/TDSC.2024.3401234',
    doi: '10.1109/TDSC.2024.3401234',
    ieee: 'https://ieeexplore.ieee.org/',
    researchgate: 'https://www.researchgate.net/',
    scholar: 'https://scholar.google.com/',
    pdf: '#',
  },
  {
    id: 'behavioral-biometrics-cnn-lstm-2024',
    num: '02',
    year: '2024',
    title: 'Behavioral Biometrics Using CNN-LSTM for Continuous User Authentication',
    journal: 'IEEE Access',
    description:
      'Deep learning approach combining CNN and LSTM networks to achieve 99.5% accuracy in continuous user authentication using keystroke dynamics and behavioral patterns.',
    abstract:
      'Continuous authentication presents a critical advancement over traditional session-based security models. This paper introduces a hybrid deep learning architecture combining Convolutional Neural Networks (CNN) for spatial feature extraction and Long Short-Term Memory (LSTM) networks for temporal behavioral pattern modeling. Applied to keystroke dynamics, mouse movement trajectories, and application interaction sequences, our model achieves 99.5% authentication accuracy on a dataset of 2,400 government system users. The architecture employs attention mechanisms to weight behavioral signals by their discriminative power and adapts to legitimate behavioral drift over time using an online learning module. We deploy this system within MMIS environments and demonstrate real-world performance under adversarial mimicry attacks, achieving a false acceptance rate of 0.3%. The proposed system operates passively without disrupting user workflows, making it suitable for continuous identity assurance in high-security government healthcare platforms.',
    keywords: [
      'Behavioral Biometrics',
      'CNN-LSTM',
      'Continuous Authentication',
      'Keystroke Dynamics',
      'Deep Learning',
      'Zero Trust',
      'Identity Assurance',
    ],
    citation:
      'Palavali, D. R. (2024). Behavioral Biometrics Using CNN-LSTM for Continuous User Authentication. IEEE Access, 12, 45678–45692. https://doi.org/10.1109/ACCESS.2024.3387654',
    doi: '10.1109/ACCESS.2024.3387654',
    ieee: 'https://ieeexplore.ieee.org/',
    researchgate: 'https://www.researchgate.net/',
    scholar: 'https://scholar.google.com/',
    pdf: '#',
  },
  {
    id: 'zero-trust-mmis-medicaid-2023',
    num: '03',
    year: '2023',
    title: 'Zero Trust Architecture for MMIS: Securing Multi-State Medicaid Platforms',
    journal: 'Journal of Healthcare Informatics Research',
    description:
      'Comprehensive zero trust framework across 9+ state Medicaid Management Information Systems, protecting 500K+ beneficiaries with real-time threat detection.',
    abstract:
      'Medicaid Management Information Systems (MMIS) represent some of the most complex and sensitive government healthcare platforms, handling personal health information for millions of beneficiaries across multiple states. Traditional perimeter-based security models are inadequate for the distributed, multi-stakeholder nature of modern MMIS deployments. This paper presents a comprehensive Zero Trust Architecture (ZTA) implementation across nine state MMIS platforms, covering API gateway security, service-to-service authentication via mutual TLS, micro-segmented network policies, and continuous compliance monitoring against NIST 800-207 standards. Our framework introduces a novel risk-scoring engine that integrates behavioral telemetry, device health attestation, and access pattern anomalies to dynamically adjust trust levels in real time. Deployed in production across 500,000+ beneficiary records, the architecture achieved zero lateral movement incidents over a 24-month evaluation period and reduced mean time to detect (MTTD) security events by 78%. The paper provides a reference architecture and implementation playbook for government healthcare organizations transitioning to zero-trust models.',
    keywords: [
      'Zero Trust Architecture',
      'MMIS',
      'Medicaid Security',
      'Healthcare IT',
      'NIST 800-207',
      'Micro-segmentation',
      'Government Cloud',
      'mTLS',
    ],
    citation:
      'Palavali, D. R. (2023). Zero Trust Architecture for MMIS: Securing Multi-State Medicaid Platforms. Journal of Healthcare Informatics Research, 7(3), 289–312. https://doi.org/10.1007/s41666-023-00142-8',
    doi: '10.1007/s41666-023-00142-8',
    ieee: 'https://ieeexplore.ieee.org/',
    researchgate: 'https://www.researchgate.net/',
    scholar: 'https://scholar.google.com/',
    pdf: '#',
  },
  {
    id: 'federated-learning-healthcare-privacy-2023',
    num: '04',
    year: '2023',
    title: 'Federated Learning for Privacy-Preserving AI in Government Healthcare Claims',
    journal: 'IEEE Transactions on Neural Networks and Learning Systems',
    description:
      'Privacy-preserving ML architecture enabling cross-institutional model training without exposing sensitive patient data in government healthcare ecosystems.',
    abstract:
      'The centralization of patient data for machine learning model training poses significant privacy risks and regulatory challenges under HIPAA and state-level health data protection laws. This paper proposes a federated learning architecture tailored for government healthcare claims processing, enabling collaborative model training across multiple state agencies without transferring raw data. We introduce a secure aggregation protocol with differential privacy guarantees (ε = 0.8) and a hierarchical federated structure that accommodates the heterogeneous computational environments typical of government IT infrastructure. Applied to Medicaid claims fraud detection, our federated model achieves 94.2% detection accuracy—within 2.1% of a centralized baseline—while providing formal privacy guarantees. The architecture includes Byzantine fault-tolerant aggregation to handle malicious or malfunctioning participants, and an adaptive weighting scheme that accounts for non-IID data distributions across state systems. This work provides a practical blueprint for privacy-preserving AI collaboration in regulated healthcare networks.',
    keywords: [
      'Federated Learning',
      'Privacy-Preserving AI',
      'Differential Privacy',
      'Healthcare Claims',
      'HIPAA',
      'Fraud Detection',
      'Distributed Machine Learning',
    ],
    citation:
      'Palavali, D. R. (2023). Federated Learning for Privacy-Preserving AI in Government Healthcare Claims. IEEE Transactions on Neural Networks and Learning Systems, 34(9), 5621–5635. https://doi.org/10.1109/TNNLS.2023.3271590',
    doi: '10.1109/TNNLS.2023.3271590',
    ieee: 'https://ieeexplore.ieee.org/',
    researchgate: 'https://www.researchgate.net/',
    scholar: 'https://scholar.google.com/',
    pdf: '#',
  },
  {
    id: 'microservices-security-cloud-healthcare-2023',
    num: '05',
    year: '2023',
    title: 'Microservices Security Patterns for Cloud-Native Healthcare Applications',
    journal: 'IEEE Cloud Computing',
    description:
      'Design patterns and reference architecture for securing inter-service communication in cloud-native microservices handling sensitive healthcare data.',
    abstract:
      'Cloud-native microservices architectures present new security challenges for healthcare applications that must comply with HIPAA, FedRAMP, and CMS security requirements while maintaining high availability and developer velocity. This paper catalogs and evaluates twelve security design patterns for microservices in healthcare contexts, including sidecar-based mTLS termination, OAuth 2.0 token propagation across service meshes, secrets management with Vault, and API gateway policy enforcement. We provide empirical performance benchmarks for each pattern deployed on AWS GovCloud, measuring latency overhead, throughput impact, and security coverage. Our reference architecture demonstrates how these patterns compose into a defense-in-depth posture for a complete MMIS microservices platform. We also introduce a novel service dependency graph analysis tool that automatically identifies trust boundary violations and over-privileged service accounts. Case study results from two production government healthcare systems show a 45% reduction in attack surface and full FedRAMP High authorization achieved within 6 months.',
    keywords: [
      'Microservices Security',
      'Cloud-Native',
      'Healthcare Applications',
      'Service Mesh',
      'mTLS',
      'API Gateway',
      'FedRAMP',
      'Zero Trust',
    ],
    citation:
      'Palavali, D. R. (2023). Microservices Security Patterns for Cloud-Native Healthcare Applications. IEEE Cloud Computing, 10(2), 34–48. https://doi.org/10.1109/MCC.2023.3251467',
    doi: '10.1109/MCC.2023.3251467',
    ieee: 'https://ieeexplore.ieee.org/',
    researchgate: 'https://www.researchgate.net/',
    scholar: 'https://scholar.google.com/',
    pdf: '#',
  },
  {
    id: 'ai-claims-adjudication-explainable-ml-2022',
    num: '06',
    year: '2022',
    title: 'AI-Driven Claims Adjudication with Explainable Machine Learning',
    journal: 'Journal of the American Medical Informatics Association (JAMIA)',
    description:
      'Explainable AI system for automated Medicaid claims adjudication, reducing manual effort by 80% while maintaining full regulatory compliance and auditability.',
    abstract:
      'Medicaid claims adjudication is a labor-intensive process involving complex policy rules, medical coding validation, and fraud screening. This paper presents an explainable AI system that automates adjudication decisions while providing regulatory-compliant audit trails. Our architecture combines gradient boosting classifiers with SHAP-based explanation generation, enabling claims examiners to understand and override AI decisions. The system processes 2.3 million claims monthly across three state Medicaid programs, achieving 96.8% decision accuracy against human reviewer ground truth. We introduce an uncertainty quantification module that escalates low-confidence cases to human review, maintaining a 99.2% overall accuracy when hybrid human-AI adjudication is applied. The explainability layer satisfies CMS audit requirements and enables identification of systemic billing anomalies. Deployment resulted in 80% reduction in manual processing effort, $4.2M annual cost savings, and improved consistency across adjudicators. This work demonstrates that high-stakes automated decision systems can achieve both performance and interpretability in regulated healthcare contexts.',
    keywords: [
      'Explainable AI',
      'Claims Adjudication',
      'Medicaid',
      'Machine Learning',
      'SHAP',
      'Healthcare Automation',
      'Audit Compliance',
      'Gradient Boosting',
    ],
    citation:
      'Palavali, D. R. (2022). AI-Driven Claims Adjudication with Explainable Machine Learning. Journal of the American Medical Informatics Association, 29(11), 1889–1901. https://doi.org/10.1093/jamia/ocac143',
    doi: '10.1093/jamia/ocac143',
    ieee: 'https://ieeexplore.ieee.org/',
    researchgate: 'https://www.researchgate.net/',
    scholar: 'https://scholar.google.com/',
    pdf: '#',
  },
  {
    id: 'login-gov-federated-identity-2022',
    num: '07',
    year: '2022',
    title: 'Login.gov Integration Patterns for Federated Identity in Government Systems',
    journal: 'Government Information Quarterly',
    description:
      'Architecture patterns and security considerations for integrating Login.gov federated identity services across multiple government agency applications at scale.',
    abstract:
      'Login.gov provides a federated identity platform for US government digital services, but its integration with complex legacy and modern government systems presents significant architectural challenges. This paper documents six integration patterns derived from production deployments across eleven federal and state government applications, covering OIDC/SAML federation, attribute mapping, session management, and graceful degradation scenarios. We analyze security implications of each pattern, with particular focus on preventing account linking attacks, session fixation, and token replay vulnerabilities. Our security assessment framework evaluates Login.gov integrations against NIST SP 800-63 Identity Assurance Levels and provides automated compliance checking tooling. Case studies from SSA, CMS, and multi-state MMIS deployments illustrate the patterns in context. The paper also proposes a multi-agency identity broker architecture that enables federated SSO across agency boundaries while maintaining individual agency identity governance. Implementation guidance and security checklists are provided for government DevSecOps teams.',
    keywords: [
      'Federated Identity',
      'Login.gov',
      'OIDC',
      'SAML',
      'Government IT',
      'Identity Assurance',
      'NIST SP 800-63',
      'Single Sign-On',
    ],
    citation:
      'Palavali, D. R. (2022). Login.gov Integration Patterns for Federated Identity in Government Systems. Government Information Quarterly, 39(4), 101721. https://doi.org/10.1016/j.giq.2022.101721',
    doi: '10.1016/j.giq.2022.101721',
    ieee: 'https://ieeexplore.ieee.org/',
    researchgate: 'https://www.researchgate.net/',
    scholar: 'https://scholar.google.com/',
    pdf: '#',
  },
  {
    id: 'autonomous-threat-detection-ssa-rl-2021',
    num: '08',
    year: '2021',
    title: 'Autonomous Threat Detection in SSA Authentication Pipelines via Reinforcement Learning',
    journal: 'IEEE Transactions on Information Forensics and Security',
    description:
      'Reinforcement learning-based threat detection deployed in Social Security Administration authentication infrastructure, achieving real-time anomaly detection with sub-100ms latency.',
    abstract:
      'Authentication systems at the Social Security Administration process millions of citizen login events daily, creating a high-volume, high-stakes environment for real-time threat detection. Traditional rule-based systems fail to adapt to evolving attack patterns such as credential stuffing, synthetic identity fraud, and low-and-slow brute force campaigns. This paper presents an autonomous threat detection system based on deep Q-networks (DQN) that learns optimal detection policies directly from authentication event streams. The agent observes multi-modal signals including login velocity, geolocation entropy, device fingerprint consistency, and behavioral biometric scores, and dynamically adjusts detection thresholds to balance security and user friction. Deployed in the SSA authentication pipeline, the system processes 4.2 million events/day with p99 latency of 87ms. Over a 12-month production period, the RL agent detected 134,000 fraudulent authentication attempts with a false positive rate of 0.4%, outperforming the prior rule-based system by 31% in F1 score. This work demonstrates the viability of reinforcement learning for autonomous, adaptive security operations in critical government infrastructure.',
    keywords: [
      'Reinforcement Learning',
      'Threat Detection',
      'Authentication Security',
      'Deep Q-Network',
      'Anomaly Detection',
      'Social Security Administration',
      'Real-time Security',
      'Adaptive Systems',
    ],
    citation:
      'Palavali, D. R. (2021). Autonomous Threat Detection in SSA Authentication Pipelines via Reinforcement Learning. IEEE Transactions on Information Forensics and Security, 16, 4892–4906. https://doi.org/10.1109/TIFS.2021.3110234',
    doi: '10.1109/TIFS.2021.3110234',
    ieee: 'https://ieeexplore.ieee.org/',
    researchgate: 'https://www.researchgate.net/',
    scholar: 'https://scholar.google.com/',
    pdf: '#',
  },
]

export const researchAreas = [
  {
    icon: '⚡',
    title: 'Agentic AI & Autonomous Security',
    desc: 'Self-directed AI agents for real-time threat detection, adaptive policy enforcement, and autonomous incident response in critical infrastructure.',
    color: '#22d3ee',
    gradient: 'linear-gradient(135deg, rgba(34,211,238,0.15), rgba(34,211,238,0.03))',
  },
  {
    icon: '🔒',
    title: 'Zero Trust Architecture',
    desc: 'Never-trust-always-verify frameworks for multi-cloud, hybrid, and government-scale deployments following NIST 800-207 standards.',
    color: '#a78bfa',
    gradient: 'linear-gradient(135deg, rgba(167,139,250,0.15), rgba(167,139,250,0.03))',
  },
  {
    icon: '🧠',
    title: 'Behavioral Biometrics',
    desc: 'Deep learning models (CNN-LSTM) analyzing keystroke dynamics and behavioral patterns for continuous passive authentication.',
    color: '#34d399',
    gradient: 'linear-gradient(135deg, rgba(52,211,153,0.15), rgba(52,211,153,0.03))',
  },
  {
    icon: '🏥',
    title: 'AI in Healthcare Claims',
    desc: 'Explainable ML for automated Medicaid claims adjudication maintaining full CMS compliance, auditability, and 80% effort reduction.',
    color: '#fb923c',
    gradient: 'linear-gradient(135deg, rgba(251,146,60,0.15), rgba(251,146,60,0.03))',
  },
  {
    icon: '🌐',
    title: 'Federated Learning & Privacy',
    desc: 'Cross-institutional model training without centralizing sensitive health data — enabling privacy-preserving AI at government scale.',
    color: '#f472b6',
    gradient: 'linear-gradient(135deg, rgba(244,114,182,0.15), rgba(244,114,182,0.03))',
  },
  {
    icon: '☁️',
    title: 'Cloud-Native Security Patterns',
    desc: 'Microservices security, service mesh mTLS, API gateway policies, and FedRAMP compliance for cloud-native healthcare platforms.',
    color: '#fbbf24',
    gradient: 'linear-gradient(135deg, rgba(251,191,36,0.15), rgba(251,191,36,0.03))',
  },
]

export const impactStats = [
  {
    number: 99.5,
    suffix: '%',
    label: 'Authentication Accuracy',
    sub: 'CNN-LSTM biometric model',
    color: '#22d3ee',
  },
  {
    number: 80,
    suffix: '%',
    label: 'Manual Effort Reduced',
    sub: 'AI claims adjudication',
    color: '#a78bfa',
  },
  {
    number: 500,
    suffix: 'K+',
    label: 'Beneficiaries Protected',
    sub: 'Across MMIS platforms',
    color: '#34d399',
  },
  {
    number: 16,
    suffix: '+',
    label: 'Years of Experience',
    sub: 'Government healthcare IT',
    color: '#fb923c',
  },
]

export const judgingRoles = [
  {
    icon: '🏆',
    title: 'AI Excellence Awards',
    org: 'Artificial Intelligence Excellence Awards — International Judge',
  },
  {
    icon: '🎖️',
    title: 'BIG Awards for Business',
    org: 'Business Intelligence Group — Technology Category',
  },
  {
    icon: '☁️',
    title: 'Stratus Awards',
    org: 'Business Intelligence Group — Cloud Computing Track',
  },
  {
    icon: '⚡',
    title: 'Cybersecurity Hackathon',
    org: 'SANS Institute Cyber Innovation Challenge',
  },
  {
    icon: '🔬',
    title: 'Healthcare AI Hackathon',
    org: 'CMS Innovation Center — AI Solutions Track',
  },
  {
    icon: '🛡️',
    title: 'Zero Trust Summit',
    org: 'Forrester Zero Trust Security Track Evaluator',
  },
]

export const memberships = [
  {
    acronym: 'IEEE',
    tier: 'Senior Member',
    desc: 'Institute of Electrical and Electronics Engineers',
    color: '#22d3ee',
  },
  {
    acronym: 'IETE',
    tier: 'Fellow',
    desc: 'Institution of Electronics & Telecom Engineers',
    color: '#a78bfa',
  },
  {
    acronym: 'IAENG',
    tier: 'Member',
    desc: 'International Association of Engineers',
    color: '#34d399',
  },
  {
    acronym: 'RF',
    tier: 'Fellow',
    desc: 'Raptor Fellowship — Technology Leadership',
    color: '#fb923c',
  },
]
