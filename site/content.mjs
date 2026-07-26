export const site = {
  title: "Danika Lewis Journal",
  short: "DLJ",
  description: "Human-centered reflections on healthcare, technology, leadership, and the systems shaping everyday life.",
  github: "https://github.com/lewis-os/DLJ",
  linkedin: "https://www.linkedin.com/in/danika-lewis-29a6185/",
};

export const editions = [{
  slug: "2026-week-30",
  number: "01",
  label: "Week 30 · 20–26 July 2026",
  title: "Trust must move at the speed of the system",
  dek: "Ten connected reflections on what happens when AI leaves the demo, enters institutions, and begins shaping decisions with human consequences.",
  intro: [
    "This first edition begins at a threshold. AI is no longer only a tool we test at the edge of work. It is becoming infrastructure: a layer inside healthcare governance, drug discovery, public research, and systems designed to respond at machine speed.",
    "Across these pieces, one question repeats in different forms: what makes a system worthy of trust after the announcement? A certificate can establish a baseline. A builder can show a prototype. Open weights can widen access. Powerful computing can compress a research cycle. None of these achievements, by itself, settles who remains accountable as conditions change.",
    "The week’s conclusion is not that innovation should slow to the pace of fear. It is that evidence, oversight, and human authority must be designed to keep up. Trust is not a stamp placed on a system once. It is a relationship maintained through monitoring, explanation, challenge, and the real ability to intervene."
  ],
  entrySlugs: [
    "revisiting-supernova-os", "from-stamp-to-alliance",
    "bms-nvidia-ai-drug-discovery", "designing-rest",
    "open-weights-and-ai-leadership", "certification-accountability-gap",
    "human-control-at-machine-speed", "the-visibility-paradox",
    "builder-reported-to-independently-supported",
    "research-review-as-human-ai-co-creation"
  ]
}];

export const essays = {
  "revisiting-supernova-os": {
    promise: "What meaningful human control requires when autonomous defense begins answering machine-speed threats.",
    lede: "A public description of a three-layer counter-autonomous defense system raises a larger question than whether the prototype works: can human authority remain meaningful when the response window becomes too short for reflection?",
    sections: [
      ["The signal", "Daniel McKay described Supernova OS as an integrated framework intended to respond to autonomous robotic and drone threats. The available public excerpt refers to three specialized, interconnected AI layers and marks a transition into private development. The architecture has not been independently evaluated by DLJ; this article preserves and examines the public claim."],
      ["Speed changes the meaning of control", "An automated threat can observe and move faster than a conventional human response chain. Automation may therefore become necessary simply to remain relevant. But a person who can only approve what a system has already done is not meaningfully in control. Authority must be defined before deployment: what the system may detect, recommend, disrupt, or disable; what confidence is required; and which actions always require human permission."],
      ["Layers are not automatically safeguards", "Separating perception, interpretation, and response can reduce the risk of one opaque component controlling an entire chain. Yet the safety value depends on how disagreement and uncertainty are handled, what each layer is prohibited from doing, and whether interruption has been tested under realistic pressure."],
      ["The visibility paradox", "Sensitive defense work cannot publish every operational detail. Still, secrecy removes familiar ways a claim earns trust: reproducible tests, adversarial review, and independent oversight. The design challenge is not simply open versus closed. It is how to provide credible evidence without creating a manual for defeating the system."],
      ["Questions to carry forward", "What does “works” mean—simulation, controlled hardware testing, or field deployment? What are the false-positive and safe-failure behaviors? Can qualified independent reviewers inspect the evidence under appropriate restrictions? Most importantly, can a human still understand, refuse, and interrupt a consequential action?"]
    ],
    sources: [
      ["Archived public LinkedIn excerpt by Daniel McKay", "https://www.linkedin.com/in/daniel-mckay-52215a3ab/"]
    ]
  },
  "from-stamp-to-alliance": {
    promise: "Why responsible healthcare AI must become a living alliance after certification.",
    lede: "The Joint Commission’s new certification is an important institutional signal. Its strongest contribution may be the shift from asking whether a single tool is “approved” to asking whether an organization can govern AI responsibly over time.",
    sections: [
      ["A meaningful baseline", "The Responsible Use of AI in Healthcare certification recognizes healthcare organizations that demonstrate governance, safeguards, monitoring, and education. The Joint Commission is explicit that it does not validate individual AI products. That distinction matters: responsible use depends on the institution, workflow, people, and changing environment around a tool—not only the tool’s initial specification."],
      ["Why a stamp is not enough", "Models drift, vendors update systems, patient populations change, and staff find uses that were never anticipated in procurement. A certificate can show that essential structures existed at a review point. It cannot, on its own, guarantee how every decision will unfold afterward."],
      ["From certification to alliance", "A durable model connects five parties: patients, care teams, healthcare leadership, technology suppliers, and independent reviewers. Each needs a defined voice. Patients need understandable notice and channels for challenge. Clinicians need escalation paths. Leaders need measurable accountability. Vendors need post-deployment obligations. Reviewers need continuing access to evidence."],
      ["The operating rhythm", "Responsible AI should be treated as a recurring practice: monitor performance and disparities; record incidents and near misses; review material updates; test human override; communicate limitations; and publish what can responsibly be shared. Certification becomes the entry point to this relationship, not its conclusion."],
      ["The standard worth building", "The goal is not a badge that says an organization once passed. It is an alliance capable of noticing when reality has changed and acting before trust is lost. In healthcare, accountability must remain as alive as the system it governs."]
    ],
    sources: [
      ["The Joint Commission — Responsible Use of AI in Healthcare Certification", "https://www.jointcommission.org/en/knowledge-library/news/2026-05-responsible-use-of-ai-in-healthcare-certification"],
      ["The Joint Commission — Responsible Use of AI in Healthcare framework", "https://digitalassets.jointcommission.org/api/public/content/dcfcf4f1a0cc45cdb526b3cb034c68c2"]
    ]
  },
  "bms-nvidia-ai-drug-discovery": {
    promise: "What changes when AI becomes owned research infrastructure rather than a borrowed experiment.",
    lede: "Bristol Myers Squibb’s plan to deploy a large NVIDIA AI factory signals a move from episodic AI projects toward an internal scientific capability built into the operating model of drug discovery.",
    sections: [
      ["The announcement", "BMS announced an expanded NVIDIA collaboration centered on a DGX SuperPOD using Vera Rubin NVL72 systems. The company says the infrastructure will scale proprietary models, compress discovery timelines, and support “collaborative hybrid intelligence” between AI scientists and researchers."],
      ["Infrastructure changes the question", "When compute becomes a durable internal resource, the question shifts from “can this model help with one task?” to “how should research be reorganized around continuous machine assistance?” Data pipelines, experimental prioritization, scientific review, and talent all begin to change together."],
      ["Acceleration is not the same as discovery", "Faster screening and model iteration can narrow a vast possibility space, but a predicted molecule is not a medicine. Biological uncertainty, laboratory validation, clinical evidence, safety, manufacturing, and regulatory review remain. The honest value of AI is not the elimination of these stages; it is better choices about where scarce human and laboratory attention should go."],
      ["The human design problem", "Hybrid intelligence should describe a real distribution of authority, not a reassuring phrase. Researchers need to understand the evidence behind recommendations, challenge model assumptions, preserve negative findings, and prevent computational convenience from narrowing scientific imagination."],
      ["What to watch", "The consequential evidence will arrive after the infrastructure announcement: validated research gains, reproducibility, energy and operating costs, governance of proprietary data, and examples where scientists overruled the system. An AI factory earns its name through the quality of science it helps produce."]
    ],
    sources: [
      ["Bristol Myers Squibb — AI factory announcement, 20 July 2026", "https://news.bms.com/news/corporate-financial/2026/Bristol-Myers-Squibb-to-Build-the-Most-Powerful-AI-Factory-in-Life-Sciences-with-NVIDIA/default.aspx"]
    ]
  },
  "designing-rest": {
    promise: "Rest is biological and organizational infrastructure—not unused time.",
    lede: "Modern systems optimize what can be counted: output, response time, utilization, and visible activity. Rest appears as an absence in those measures, even when it is doing essential work.",
    sections: [
      ["The mistake in the calendar", "We often treat rest as the remainder after obligations are complete. That makes recovery fragile: any urgent demand can consume it. A human-centered system begins with a different premise. Sleep, pauses, and cognitive distance are inputs to judgment, memory, emotional regulation, and sustainable performance."],
      ["Designing conditions, not issuing advice", "Telling people to rest while rewarding constant availability transfers responsibility to the individual. Design asks what the environment makes possible. Are there protected boundaries? Can work be handed over? Do notification defaults respect recovery? Is a pause interpreted as care or lack of commitment?"],
      ["Memory needs space", "Learning is not only what happens during exposure to information. Consolidation, association, and insight continue when attention changes state. A schedule filled edge to edge can therefore reduce the value of the work already performed."],
      ["Rest as a leadership signal", "Leaders reveal the real culture through what they model and reward. A system that depends on hidden exhaustion is not efficient; it is borrowing capacity from the future. Designing rest means making recovery legitimate, visible, and compatible with responsibility."],
      ["A practical test", "Ask whether the system can remain healthy without relying on people to violate their own limits. If the answer is no, the problem is not personal discipline. It is architecture. Rest becomes human-centered when it is protected before exhaustion has to request permission."]
    ],
    sources: []
  },
  "open-weights-and-ai-leadership": {
    promise: "Open weights expand agency, but openness needs more than downloadable parameters.",
    lede: "Open-weight models can broaden who experiments, adapts, audits, and teaches with advanced AI. They can also concentrate new responsibilities in the hands of deployers who may not receive the full history of how a model was built.",
    sections: [
      ["What open weights unlock", "Access to model parameters allows researchers and organizations to run systems in their own environments, adapt them to specific domains, study behavior, and reduce dependence on a single hosted provider. For scientific communities, this can turn AI from a distant service into inspectable research material."],
      ["Open is not one binary", "Weights, training data, source code, evaluation methods, and documentation can each be open or closed independently. A model with downloadable weights but little provenance is different from a fully documented research release. Leadership requires naming that difference clearly."],
      ["The responsibility moves", "When deployment becomes easier, governance does not disappear; it becomes distributed. Fine-tuning, security, monitoring, user disclosure, and misuse controls may now belong to thousands of organizations with very different capabilities."],
      ["A stronger definition of leadership", "National and institutional leadership should be measured not only by how many models are released, but by whether researchers can understand them, smaller actors can participate, risks can be studied, and public value is created without hiding costs."],
      ["The test", "Open weights are a powerful mechanism for access. They become a durable public contribution when paired with documentation, evaluations, usable licenses, research support, and an honest account of what remains unavailable."]
    ],
    sources: [
      ["NVIDIA — Opening language models to advance American researchers", "https://blogs.nvidia.com/blog/national-science-foundation-ai2-open-ai-models/"]
    ]
  },
  "certification-accountability-gap": {
    promise: "Approval is a moment; accountability is a continuing capacity to notice and respond.",
    lede: "Healthcare AI can change after review—not only because software is updated, but because people, workflows, populations, and incentives change around it.",
    sections: [
      ["The gap", "Certification can test whether governance, monitoring, privacy, and training structures exist. The accountability gap opens when those structures become static while the deployed system and its context continue to evolve."],
      ["What should be monitored", "Performance is only the beginning. Organizations should watch for disparities across relevant populations, overrides and workarounds, user reliance, incident patterns, vendor changes, data drift, complaints, and situations where the system is technically correct but operationally harmful."],
      ["Who can stop the line", "A credible program identifies who has authority to pause or restrict use. Clinicians and frontline staff need routes that do not punish them for raising uncertainty. Patients need accessible ways to question AI-influenced outcomes."],
      ["Evidence between reviews", "A mature accountability record includes dated decisions, update assessments, incident learning, and the rationale for continuing use. This makes the next review more than a reconstruction from memory."],
      ["Closing the distance", "The real standard is not perfect prediction. It is whether an organization can detect a meaningful change, understand its consequences, and act before the problem becomes normalized."]
    ],
    sources: [
      ["The Joint Commission — RUAIH certification", "https://www.jointcommission.org/en/knowledge-library/news/2026-05-responsible-use-of-ai-in-healthcare-certification"]
    ]
  },
  "human-control-at-machine-speed": {
    promise: "A person is not in control merely because their name appears in the decision chain.",
    lede: "As automated systems compress perception, judgment, and action into milliseconds, familiar phrases such as “human in the loop” can conceal how little practical authority remains.",
    sections: [
      ["The timing problem", "If a human cannot understand the situation before the action deadline, approval becomes ceremonial. Meaningful control must be designed across time: rules before operation, supervision during operation, and accountable review afterward."],
      ["Three tests", "A human must be able to understand what kind of action is being proposed, refuse it without the system routing around that refusal, and interrupt or safely contain the action. If any of these abilities exists only on paper, control is incomplete."],
      ["Move judgment upstream", "Machine-speed environments require careful pre-commitment. Teams must define boundaries, confidence thresholds, forbidden targets, escalation paths, and safe defaults before pressure arrives. This is not removing human judgment; it is placing it where it can still matter."],
      ["Design for uncertainty", "A safe system does not only select an action. It recognizes when its own evidence is weak, when sensors conflict, or when the situation falls outside training. Uncertainty should change behavior—slowing, abstaining, escalating—not merely appear in a log after the fact."],
      ["Responsibility after speed", "Faster action cannot mean diluted accountability. Someone must remain responsible for the rules, evidence, deployment context, and consequences. The system’s speed is a design constraint, not a moral exemption."]
    ],
    sources: []
  },
  "the-visibility-paradox": {
    promise: "Sensitive systems cannot reveal everything, but legitimacy cannot survive without inspectable evidence.",
    lede: "Secrecy may protect a system from adversaries. It can also protect weak claims from scrutiny. Responsible design has to distinguish those two outcomes.",
    sections: [
      ["Two valid needs", "Security may require withholding operational details, vulnerabilities, locations, or exact response logic. Public accountability requires evidence that testing, limits, oversight, and incident handling are real. Treating either need as absolute creates avoidable danger."],
      ["Evidence without exposure", "Independent review under confidentiality, standardized evaluation summaries, red-team attestations, audit logs, incident reporting, and disclosure of governance boundaries can provide assurance without publishing a blueprint."],
      ["The danger of authority by mystery", "When outsiders are asked to trust a system solely because it is too sensitive to explain, secrecy becomes a substitute for evidence. The burden should move in the opposite direction: the less the public can inspect directly, the stronger the independent assurance must be."],
      ["Layered transparency", "Different audiences can receive different levels of detail. Operators need procedures, auditors need evidence, regulators need access, affected communities need understandable rights and risks, and adversaries need none of the exploitable specifics."],
      ["The balance", "The goal is not total visibility. It is enough structured visibility for responsible people to challenge the system and for the public to know that consequential power is not operating without review."]
    ],
    sources: []
  },
  "builder-reported-to-independently-supported": {
    promise: "A compact evidence ladder for moving from invention to justified trust.",
    lede: "“It works on my system” is a meaningful beginning. It is not the end of evaluation.",
    sections: [
      ["Level 1 — Builder-reported", "The creator describes intended behavior and reports a successful implementation. Preserve the claim precisely, including environment, version, and what “success” meant."],
      ["Level 2 — Demonstrated", "A repeatable demonstration shows the system performing a defined task under known conditions. Failures, exclusions, and operator interventions are recorded rather than edited out."],
      ["Level 3 — Reproduced", "Another qualified party can obtain materially similar results using the documented method. Reproduction tests whether success depends on hidden knowledge or a uniquely favorable setup."],
      ["Level 4 — Independently evaluated", "Reviewers select tests, probe failure modes, examine safety claims, and report limitations. Independence does not guarantee truth, but it changes the incentives around what is noticed and disclosed."],
      ["Level 5 — Operationally supported", "Evidence accumulates in real use: performance across contexts, incident learning, updates, and monitoring. Trust remains conditional and revisable. The ladder is not a marketing score; it is a language for saying exactly what the evidence currently supports."]
    ],
    sources: []
  },
  "research-review-as-human-ai-co-creation": {
    promise: "A transparent method for turning a public signal into a durable reflection.",
    lede: "Human–AI co-creation is most credible when readers can see where the source ends, where analysis begins, and who remains responsible for publication.",
    sections: [
      ["1. Capture the signal", "Preserve the source, author, date, link, and the exact material that prompted attention. Record missing information instead of silently reconstructing it."],
      ["2. Separate layers", "Distinguish attributed claims, independently supported facts, interpretation, and open questions. This prevents fluent analysis from making uncertain material look settled."],
      ["3. Add the human frame", "Ask who benefits, who carries risk, which relationships change, and what a non-specialist needs in order to understand the stakes. Expertise is translated without flattening uncertainty."],
      ["4. Challenge the draft", "Look for missing evidence, hidden assumptions, overconfident language, and absent perspectives. AI can expand questions and structure; the human editor decides what deserves attention and publication."],
      ["5. Preserve revision", "Publish sources and revision dates, correct visibly, and revisit predictions when new evidence arrives. Co-creation becomes accountable when it leaves a trail another reader can inspect."],
      ["The principle", "AI can help a reflection become wider, clearer, and more consistent. It should not become an invisible authorizing voice. Danika’s editorial judgment remains the final boundary: the journal publishes a human position, supported by a transparent process."]
    ],
    sources: [
      ["DLJ public editorial record", "https://github.com/lewis-os/DLJ"]
    ]
  }
};
