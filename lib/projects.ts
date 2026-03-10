export interface Project {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  techStack: string[];
  githubUrl?: string;
  externalUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "pawsnapai",
    title: "PawSnapAI",
    tagline: "AI-powered cat emotional analysis",
    problem:
      "Cats communicate through body language: tail position, ear angle, posture. But most owners struggle to interpret what their cat is feeling. Misreading signals can lead to stress for both pet and owner.",
    solution:
      "PawSnapAI (DeepFrank) analyzes cat images using AI to decode emotional state and provide insights about health and behavior. Includes an AI chat assistant (Frankie) for discussing your cat's wellbeing. Why build this? Years of living with cats sparked a curiosity: what if we could bridge the communication gap between species?",
    techStack: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Stytch",
    ],
    githubUrl: "https://github.com/Theodore-Utomo/DeepFrank",
  },
  {
    slug: "gallaugher-quiz-app",
    title: "John Gallaugher's Quiz App",
    tagline: "Quiz web application for YouTube students",
    problem:
      "Professor Gallaugher's YouTube students needed a way to take quizzes and test their understanding. Hosting quiz content across multiple videos required a centralized, accessible platform.",
    solution:
      "A quiz web application that hosts Professor Gallaugher's quiz content for his YouTube audience. Students can take quizzes, track progress, and reinforce learning from the course material.",
    techStack: ["TypeScript", "React", "Tailwind CSS", "Google Cloud Firestore", "Render", "Python", "FastAPI", "Docker", "Stytch"],
    githubUrl: "https://github.com/Theodore-Utomo/swift-ios-quizzes",
    externalUrl: "https://www.johngallaugher.com/",
  },
  {
    slug: "tailtranslate",
    title: "TailTranslate",
    tagline: "Swift Student Challenge 2026: Cat body language decoder",
    problem:
      "Cat body language is subtle and often misunderstood. Owners want to know what their cat is feeling: are they relaxed, anxious, playful? Visual cues (ears, tail, posture) hold the answer.",
    solution:
      "TailTranslate is my Swift Student Challenge 2026 submission. An iOS app that uses Core ML's vision capabilities to analyze cat body language in real time. Built from a genuine passion for animal-tech and years of observing my own cats,turning that curiosity into a tool that helps others understand their pets.",
    techStack: ["Swift", "SwiftUI", "Core ML", "Vision", "iOS"],
    githubUrl: "https://github.com/Theodore-Utomo/TailTranslate",
  },
  {
    slug: "neural-network-from-scratch",
    title: "Neural Network from Scratch",
    tagline: "Pure Python implementation without any ML libraries",
    problem:
      "Understanding how neural networks work under the hood is often obscured by high-level frameworks like TensorFlow or PyTorch. The math: backpropagation, gradient descent, activation functions gets abstracted away.",
    solution:
      "Built a fully functional neural network using only Python and NumPy. Implements forward propagation, backpropagation, and common activation functions from first principles. No TensorFlow, no PyTorch. Just the fundamentals.",
    techStack: ["Python", "NumPy"],
    githubUrl: "https://github.com/Theodore-Utomo/NeuralNetworkFromScratch",
  },
  {
    slug: "moveos",
    title: "MoveOS",
    tagline: "iOS fitness tracking app",
    problem:
      "Fitness tracking apps often feel bloated or generic. Users want something that fits their workflow without overwhelming them with features they never use.",
    solution:
      "MoveOS is a focused iOS app for tracking workouts and movement. Clean, native experience built for people who want to log their activity without the noise.",
    techStack: ["Swift", "SwiftUI", "iOS", "Google Cloud Firestore"],
    githubUrl: "https://github.com/Theodore-Utomo/MoveOS",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}
