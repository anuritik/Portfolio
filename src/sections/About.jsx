import { Code2, BrainCircuit, ShieldCheck, Radio } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building complete and scalable applications from frontend to backend.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Apps",
    description:
      "Exploring AI to build smarter and more interactive web experiences.",
  },
  {
    icon: ShieldCheck,
    title: "REST APIs & Security",
    description:
      "Developing secure REST APIs with authentication and role-based access control.",
  },
  {
    icon: Radio,
    title: "Real-Time Experiences",
    description:
      "Building interactive applications with messaging, notifications, and background workflows.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Turning ideas into
              <span className="font-serif italic font-normal text-white">
                {" "}
                scalable web applications.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm Anurag Shukla, a Full-Stack Developer specializing in the
                MERN stack. I build scalable, responsive, and high-performance
                web applications using React.js, Node.js, Express.js, and
                MongoDB.
              </p>
              <p>
                I enjoy working across both frontend and backend
                development—from creating intuitive user interfaces to designing
                REST APIs, authentication systems, and complete end-to-end
                applications.
              </p>
              <p>
                I've built projects including an AI-powered React Website
                Generator, an Employee Management System, and a Social Media
                Platform with real-time features. I'm also currently expanding
                my knowledge in AI & Machine Learning.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I enjoy turning ideas into real-world applications—combining
                clean code, thoughtful user experiences, and modern technologies
                to build products that solve meaningful problems."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
