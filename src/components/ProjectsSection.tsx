import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "Bitly (Java)",
    tagline: "Distributed URL shortener with Java sockets and SQLite",
    tech: ["Java", "SQLite", "Bash"],
    highlights: [
      "Built distributed Bitly-style URL shortener with multi-threaded proxy server and 4 backend nodes, routing concurrent requests using consistent hashing and achieving 3.96ms average PUT latency",
      "Implemented server-to-server network communication using Java sockets, streams, and custom request-parsing logic, enabling concurrent request handling through worker-thread pools",
      "Designed SQLite storage w/ replication factor 2 and failover-aware routing, allowing reads to continue upon server failure; heartbeat-based monitoring detected/removed dead nodes from routing within 3-6 seconds",
      "Developed a LinkedHashMap-based LRU cache with TTL eviction in the proxy, reducing GET latency from 7.80 ms to 2.33 ms per request (70% lower)",
    ],
    gradient: "from-primary to-secondary",
  },
  {
    name: "r/Place",
    tagline: "Real-time collaborative pixel canvas on AWS",
    tech: ["AWS", "Redis", "Python"],
    highlights: [
      "Built WebSocket API Gateway to handle real-time client connections, disconnections, and board updates",
      "Configured NAT gateway to provide private Lambda functions with secure outbound internet access",
      "Implemented HTTP API Gateway to send current board state to new users",
      "Used SQS to decouple board updates from DynamoDB persistent storage, improving throughput by 29%",
      "Utilized ElastiCache to store the latest board state and track active users",
    ],
    gradient: "from-secondary to-primary",
  },
  {
    name: "Bitly (Docker)",
    tagline: "Distributed URL shortener with 1000 req/s throughput",
    tech: ["Docker", "Redis", "Cassandra", "Python", "Flask"],
    highlights: [
      "Built distributed URL shortener using Flask HTTP APIs, Docker Swarm, Cassandra, and Redis, with 1000 req/s throughput",
      "Deployed Redis primary-replica architecture as LRU cache, leading to 42% decrease in GET latency",
      "Deployed a 3-node Cassandra cluster (RF=2), enabling persistent, horizontally-scalable, fault-tolerant storage",
      "Implemented Writer-Logger stack using Redis streams to decouple request handling from persistence, reducing perceived write latency by 37%",
    ],
    gradient: "from-primary to-secondary",
  },
  {
    name: "Zoomer",
    tagline: "Ride-sharing backend with microservices and API gateway",
    tech: ["Java", "Maven", "PostgreSQL", "MongoDB", "Neo4j", "Docker"],
    highlights: [
      "Built Java/Maven ride-sharing backend with 3 microservices and API gateway",
      "Built REST APIs on PostgreSQL, MongoDB, and Neo4j, using relational, document, and graph data models for users, trips, and road-network queries",
      "Built TripInfo microservice and user/location endpoints with robust error handling",
      "Built inter-service APIs for trip confirmation and driver ETA workflows",
      "Containerized and tested the backend in Docker, with gateway-level integration tests for success/failure responses",
    ],
    gradient: "from-secondary to-accent",
  },
  {
    name: "CUDA Laplacian Image Filtering",
    tagline: "GPU-accelerated image processing with CUDA and C++",
    tech: ["CUDA", "C++"],
    highlights: [
      "Designed a CUDA-based Laplacian filter leveraging shared memory, coalesced global memory access, and parallel reductions, delivering a 25x speedup over the CPU implementation on small images",
      "Optimized the CPU baseline using POSIX threads, row-level parallelism, and barrier synchronization",
      "Implemented five GPU kernel variants with different workload layouts (e.g., row-major vs. column-major), the top-performing kernel achieved 10%+ higher throughput",
    ],
    gradient: "from-accent to-secondary",
  },
  {
    name: "CNN Plays Geoguessr",
    tagline: "Deep learning model predicting locations from Street View imagery",
    tech: ["Python", "PyTorch", "Pandas", "NumPy", "sklearn"],
    highlights: [
      "Designed and trained global photo geolocation model using EVA-02 (ImageNet-22k) backbone to predict latitude/longitude from Street View imagery",
      "Built a two-stage architecture with a classification head (to constrain search space) and continent-conditioned regression head, reducing large errors (e.g., wrong-continent) by 64%",
      "Engineered custom dataset pipeline (38k+ images from 12.6k locations), including image augmentation and conversion from lat/lon to 3D spherical coordinates (x, y, z) for stable angular loss optimization",
      "Trained model over 40 epochs using Adam, achieving 90.6% continent accuracy and 251 km median error",
    ],
    gradient: "from-primary to-accent",
  },
  {
    name: "CascadeAI (GenAI Genesis 2026)",
    tagline: "Climate-risk web app with RAG-powered environmental analysis",
    tech: ["IBM watsonx", "React", "Vite", "Flask", "Leaflet"],
    highlights: [
      "Built CascadeAI, a climate-risk web app for analyzing city-level environmental conditions, supporting 7-/30-/95-day risk windows and hyperlocal geospatial analysis from 50 m to 5 km",
      "Designed 5-layer cascading impact engine and RAG pipeline with 500+ peer-reviewed papers, using IBM watsonx, to ground hazard assessments in research",
      "Built Leaflet-based geospatial UI with GeoJSON/PDF export, enabling city search, local-area analysis, and visual exploration of cascading risk flows",
    ],
    gradient: "from-accent to-primary",
  },
  {
    name: "Six Degrees of Kevin Bacon",
    tagline: "Graph-backed actor and movie relationship API",
    tech: ["Java", "Neo4j", "Docker"],
    highlights: [
      "Built Java REST API backed by Neo4j to model actor-movie relationships as a graph and support lookup, relationship, and traversal queries",
      "Implemented graph algorithms to compute Kevin Bacon shortest paths, returning full actor/movie connection paths",
      "Applied DAO and Dagger 2 dependency injection patterns to separate database, server, and request-handling logic for a cleaner, testable backend",
      "Dockerized application and wrote API tests for success and failure cases",
    ],
    gradient: "from-primary to-secondary",
  },
  {
    name: "PriceHawk",
    tagline: "Price tracking app with secure authentication",
    tech: ["Python", "TypeScript", "PostgreSQL", "Django", "React"],
    highlights: [
      "Implemented Django REST API endpoints that provides users with ability to change password",
      "Integrated JWT framework for user authentication, allowing for secure connections to server",
      "Implemented Google SSO sign-in for improved user convenience",
    ],
    gradient: "from-primary to-accent",
  },
  {
    name: "FaceVote (DeerHacks 2023)",
    tagline: "Identity-verified voting app",
    tech: ["Python", "TypeScript", "MongoDB", "Flask", "React"],
    highlights: [
      "Built an identity verification pipeline using React Webcam and imagehash to compare user's face and government issued id, achieving 80% accuracy",
      "Designed RESTful Flask APIs and MongoDB data flows to ingest/persist voting data, supporting real-time vote aggregation",
      "Developed live voting results dashboard using Chakra UI and Chart.js with sub-second update latency",
    ],
    gradient: "from-accent to-primary",
  },
  {
    name: "CarbonTrack",
    tagline: "Mobile carbon footprint tracker",
    tech: ["Python", "TypeScript", "MongoDB", "Flask", "React Native", "iOS"],
    highlights: [
      "Engineered features for Carbon-tracking metrics, leading to a 21% improvement in carbon footprint",
      "Implemented RESTful API endpoints and data models to ensure reliable end-to-end communication and data integrity between frontend clients and backend services",
      "Implemented Recommendation Feature, providing users with recommendations based on consumption habits",
    ],
    gradient: "from-secondary to-accent",
  },
];

const techBadgeColors = {
  languages: "gradient-bg",
  technologies: "gradient-accent-bg",
  systems: "bg-gradient-to-r from-secondary to-cyan-500",
  storage: "bg-gradient-to-r from-emerald-500 to-teal-600",
};

const languageTech = new Set(["Java", "SQL", "Python", "C/C++", "C++", "JavaScript", "TypeScript", "HTML/CSS"]);
const frameworkTech = new Set([
  "React.js",
  "React",
  "React Native",
  "Express",
  "Flask",
  "Node.js",
  "Vue.js",
  "Pinia",
  "Prisma",
  "npm",
  ".NET",
  "PyTorch",
  "Scikit-Learn",
  "sklearn",
  "Pandas",
  "NumPy",
  "CUDA",
  "Django",
  "Maven",
  "IBM watsonx",
  "Vite",
  "Leaflet",
]);
const systemsTech = new Set(["Linux", "Git", "Bash", "AWS", "Docker", "Postman", "iOS"]);
const storageTech = new Set(["SQLite", "PostgreSQL", "Cassandra", "Redis", "DynamoDB", "MongoDB", "Neo4j"]);

const getTechBadgeColor = (tech: string) => {
  if (languageTech.has(tech)) return techBadgeColors.languages;
  if (storageTech.has(tech)) return techBadgeColors.storage;
  if (systemsTech.has(tech)) return techBadgeColors.systems;
  if (frameworkTech.has(tech)) return techBadgeColors.technologies;
  return techBadgeColors.technologies;
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="pt-24 pb-16">
      <div className="section-container">
        <h2 className="font-display text-4xl sm:text-5xl font-bold mb-14 gradient-accent-text">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={`${project.name}-${project.tagline}`}
              className="group relative rounded-2xl border border-border bg-card p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Top gradient accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />

              <div className="mb-4">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground">{project.tagline}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className={`${getTechBadgeColor(t)} border-0 text-xs font-medium text-primary-foreground hover:opacity-90`}
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
