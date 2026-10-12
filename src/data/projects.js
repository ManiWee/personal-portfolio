export const projects = [
  {
    id: "v-ppfl",
    title: "v-PPFL",
    subtitle: "Verifiable Privacy-Preserving Federated Learning",
    role: "AI & Distributed Systems Researcher",
    description:
      "Multi-cloud privacy-preserving ML framework across AWS, GCP, and Azure with Dockerized edge training nodes. Groth16 zk-SNARKs via ZoKrates prove update legitimacy without exposing credentials or clinical data - isolating Byzantine nodes in 0.52s while preserving classification accuracy.",
    tags: ["Federated Learning", "zk-SNARKs", "AWS", "GCP", "Azure", "Flask"],
    href: "#",
  },
  {
    id: "ai-reconciliation",
    title: "Enterprise AI Financial Reconciliation",
    subtitle: "Audit Engine · Proof of Concept",
    role: "AI & Backend Systems",
    description:
      "Secure backend for invoice reconciliation and compliance auditing. PostgreSQL + pgvector maps transaction embeddings for semantic anomaly detection; FastAPI, Spring AI, and local LLMs via Ollama extract structured financial entities while keeping data private.",
    tags: ["FastAPI", "Spring AI", "pgvector", "Ollama", "RAG"],
    href: "#",
  },
  {
    id: "concert-tickets",
    title: "Distributed Concert Ticket System",
    subtitle: "Concurrent multi-node reservations",
    role: "Distributed Systems Engineer",
    description:
      "Primary-coordinated writes to prevent double-bookings with strong consistency. Low-latency inter-node messaging with gRPC/Protobuf over HTTP/2, plus ZooKeeper for configuration, heartbeats, and leader election with ephemeral sequential znodes.",
    tags: ["gRPC", "Protobuf", "ZooKeeper", "Distributed Systems"],
    href: "#",
  },
]
