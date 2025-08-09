"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Server,
  ChevronDown,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Send,
  Download,
  Cloud,
  Terminal,
  Cpu,
  FileCode,
  Layers,
  Settings,
  Trophy,
  Award,
  BookOpen,
  Phone,
  Edit,
  User,
  Moon,
  Sun,
} from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function Component() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  // ...existing code...
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendResult, setSendResult] = useState<null | "success" | "error">(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", icon: Code },
        { name: "Java", icon: Code },
        { name: "C/C++", icon: Cpu },
        { name: "JavaScript", icon: FileCode },
        { name: "Go", icon: Terminal },
        { name: "TypeScript", icon: FileCode },
      ],
    },
    {
      category: "Frontend Technologies",
      skills: [
        { name: "HTML5", icon: Globe },
        { name: "CSS3", icon: Globe },
        { name: "Tailwind CSS", icon: Globe },
        { name: "React.js", icon: Globe },
        { name: "Next.js", icon: Globe },
      ],
    },
    {
      category: "Backend & APIs",
      skills: [
        { name: "FastAPI", icon: Server },
        { name: "Node.js", icon: Server },
        { name: "Express.js", icon: Server },
        { name: "RESTful APIs", icon: Server },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", icon: Database },
        { name: "PostgreSQL", icon: Database },
        { name: "SQLite", icon: Database },
        { name: "Redis", icon: Database },
      ],
    },
    {
      category: "DevOps & Cloud",
      skills: [
        { name: "Docker", icon: Layers },
        { name: "Jenkins", icon: Settings },
        { name: "GitHub Actions", icon: Settings },
        { name: "AWS (EC2, S3, Lambda)", icon: Cloud },
      ],
    },
    {
      category: "Tools & OS",
      skills: [
        { name: "Git & GitHub", icon: Code },
        { name: "Postman", icon: Settings },
        { name: "VS Code", icon: FileCode },
        { name: "Linux (Ubuntu)", icon: Terminal },
        { name: "Windows", icon: Terminal },
      ],
    },
  ]

  const projects = [
    {
      title: "Full Stack Human Resource Management System",
      description:
        "Comprehensive HR system with employee attendance tracking, personal details management, leave requests, and access control with Redis caching and JWT authentication.",
      tech: ["Python", "FastAPI", "MySQL", "Redis", "JWT"],
      github: "https://github.com/Muniya-64bit/Database_Backend",
      demo: "#",
      image: "/projects/hr-management.png",
    },
    {
      title: "AI-powered VS Code Extension",
      description:
        "VS Code extension using OpenAI API for automated code reviews, comment generation, and GitHub integration to boost developer productivity.",
      tech: ["Node.js", "OpenAI API", "TypeScript", "VS Code API"],
      github: "https://github.com/Muniya-64bit/allcommit",
      demo: "#",
      image: "/projects/vscode-extension.png",
    },
    {
      title: "Financial Investment Advisor",
      description:
        "ML-powered financial platform with stock prediction, NLP budgeting, portfolio optimization, and real-time data integration using Yahoo Finance API.",
      tech: ["FastAPI", "Python", "PostgreSQL", "React.js", "ML", "LSTM"],
      github: "https://github.com/Intelligent-Advisor-Sem-4",
      demo: "#",
      image: "/projects/financial-advisor.png",
    },
    {
      title: "RPAL Interpreter",
      description:
        "Complete interpreter for RPAL language with lexical analysis, recursive descent parsing, AST construction, and stack-based evaluation engine supporting lambda calculus.",
      tech: ["Python", "Compiler Theory", "AST", "Lambda Calculus"],
      github: "https://github.com/Muniya-64bit/RPAL_SEM4",
      demo: "#",
      image: "/projects/rpal-interpreter.png",
    },
    {
      title: "CLI To-Do List Application",
      description:
        "Fast and minimalist command-line todo application with task management, filtering, and file-based persistence built for developer productivity.",
      tech: ["Golang", "CLI", "File System"],
      github: "https://github.com/Muniya-64bit/ToDoList_CLI_GOLANG",
      demo: "#",
      image: "/projects/go-todo-cli.webp",
    },
  ]

  const experience = [
    {
      title: "Software Engineering Intern",
      company: "Roboticgen Pvt Ltd, Colombo",
      period: "May 2025 - Present",
      description:
        "Designed RESTful APIs with FastAPI and PostgreSQL, developed Next.js frontend components, built PDF report generation systems, integrated MQTT messaging, and deployed microservices on AWS.",
      type: "work",
    },
    {
      title: "BSc. Computer Science and Engineering",
      company: "University of Moratuwa",
      period: "2023 - Present",
      description:
        "Currently pursuing Bachelor's degree in Computer Science and Engineering with focus on software development, algorithms, and system design.",
      type: "education",
    },
    {
      title: "Advanced Level Education",
      company: "Royal College, Colombo 7",
      period: "2013 - 2021",
      description: "Completed secondary education with strong foundation in mathematics and sciences.",
      type: "education",
    },
  ]

  const certifications = [
  "AWS Certified Cloud Practitioner",
  "Postman Student Expert - API Fundamentals",
  "GitHub Fundamentals",
  "Introduction to Jenkins - Linux Foundation",
  "Getting Started with Redis - Redis University",
  "Introduction to Kubernetes - Linux Foundation",
  ]

  const awards = [
    { name: "SLIIT Codefest CTF 2025", position: "Winner" },
    { name: "CRYPIX CTF 2025", position: "4th Place" },
    { name: "APPIT CTF 2024", position: "Winner" },
  ]

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/public/Isurumuni_Wijesooriya_CV.pdf"
    link.download = "Isurumuni_Wijesooriya_CV.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-xl font-bold text-cyan-400">{"<Portfolio />"}</div>
              {/* Resume download button removed to prevent duplication */}
              <div className="hidden md:flex space-x-8">
                {["Home", "About", "Skills", "Projects", "Experience", "Certifications", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleScrollToSection(item.toLowerCase())}
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <a
                href="/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 bg-transparent px-4 py-2 rounded transition-colors font-semibold"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </div>
          </div>
      </nav>

      {/* Hero Section */}
  <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-white dark:bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        <div
          className={`max-w-4xl mx-auto text-center px-4 relative z-10 transition-all duration-1000 pt-8 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1">
              {!imageError ? (
                <Image
                  src="/profile.png"
                  alt="Isurumuni Wijesooriya"
                  width={128}
                  height={128}
                  className="rounded-full w-full h-full object-cover"
                  onError={() => setImageError(true)}
                  priority
                />
              ) : (
                <div className="rounded-full w-full h-full bg-slate-800 flex items-center justify-center">
                  <User className="w-16 h-16 text-cyan-400" />
                </div>
              )}
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Isurumuni Wijesooriya
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-4">Computer Science & Engineering Student</p>
          <p className="text-lg text-slate-400 mb-2">University of Moratuwa</p>

          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Enthusiastic and motivated Computer Science student with a strong foundation in programming,
            problem-solving, and software development. Passionate about learning new technologies and applying knowledge
            to real-world challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold"
              onClick={() => handleScrollToSection("contact")}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
              onClick={() => handleScrollToSection("projects")}
            >
              <Github className="w-5 h-5 mr-2" />
              View Projects
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Link
              href="https://github.com/Muniya-64bit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/isurumuni-wijesooriya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:isurumuniwije@gmail.com"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </Link>
            <Link
              href="https://medium.com/@isurumuniwije"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Edit className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </div>
      </section>

      {/* About Section */}
  <section id="about" className="py-20 bg-slate-100 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-200">Building Tomorrow's Solutions</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                As a Computer Science and Engineering student at the University of Moratuwa, I'm passionate about
                creating innovative software solutions that solve real-world problems. My journey in technology began
                with curiosity and has evolved into a deep commitment to excellence in software development.
              </p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Currently working as a Software Engineering Intern at Roboticgen Pvt Ltd, where I design RESTful APIs,
                develop frontend components, and deploy scalable microservices on AWS. I believe in continuous learning
                and staying updated with the latest technologies to deliver impactful solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-slate-800 text-cyan-400">
                  Problem Solver
                </Badge>
                <Badge variant="secondary" className="bg-slate-800 text-cyan-400">
                  Full Stack Developer
                </Badge>
                <Badge variant="secondary" className="bg-slate-800 text-cyan-400">
                  CTF Champion
                </Badge>
                <Badge variant="secondary" className="bg-slate-800 text-cyan-400">
                  AWS Certified
                </Badge>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="w-5 h-5 text-cyan-400 mr-2" />
                    <span className="text-slate-300">+94 71 774 0339</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Mail className="w-5 h-5 text-cyan-400 mr-2" />
                    <span className="text-slate-300">isurumuniwije@gmail.com</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 text-cyan-400 mr-2" />
                    <span className="text-slate-300">Colombo, Sri Lanka</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-cyan-400 mr-2" />
                    <span className="text-slate-300">Available for opportunities</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
  <section id="skills" className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Technical Skills</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {technicalSkills.map((category, categoryIndex) => (
              <Card key={category.category} className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-slate-200 text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => {
                      const IconComponent = skill.icon
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800 transition-colors"
                        >
                          <IconComponent className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{skill.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
  <section id="projects" className="py-20 bg-slate-100 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-slate-800 border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-200 text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-slate-400 text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-slate-700 text-cyan-400 text-xs">
                      {tech}
                    </Badge>
                  ))}
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">University of Moratuwa</p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent flex-1"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
  <section id="experience" className="py-20 bg-slate-100 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Experience & Education</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-700"></div>
            {experience.map((item, index) => (
              <div key={index} className="relative flex items-start mb-12">
                <div className="absolute left-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-950"></div>
                <div className="ml-16">
                  <Card className="bg-slate-900 border-slate-700">
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        {item.type === "work" ? (
                          <Briefcase className="w-5 h-5 text-cyan-400 mr-2" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-cyan-400 mr-2" />
                        )}
                        <Badge variant="secondary" className="bg-slate-800 text-cyan-400">
                          {item.period}
                        </Badge>
                      </div>
                      <CardTitle className="text-slate-200">{item.title}</CardTitle>
                      <CardDescription className="text-cyan-400 font-semibold">{item.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards Section */}
  <section id="certifications" className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Certifications & Awards</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-200 flex items-center">
                  <BookOpen className="w-6 h-6 text-cyan-400 mr-2" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Award className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-300">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-200 flex items-center">
                  <Trophy className="w-6 h-6 text-cyan-400 mr-2" />
                  Competition Awards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {awards.map((award, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-slate-300">{award.name}</span>
                      <Badge variant="secondary" className="bg-slate-800 text-cyan-400">
                        {award.position}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
  <section id="contact" className="py-20 bg-slate-100 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-200">{"Let's Connect"}</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities, exciting projects, and collaborations. Whether you have a
                question, want to discuss a project, or just want to connect, feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-slate-300">isurumuniwije@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-slate-300">+94 71 774 0339</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-slate-300">Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <form className="space-y-4" onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
                  const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
                  const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;
                  setSending(true);
                  setSendResult(null);
                  try {
                    const res = await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ name, email, message })
                    });
                    if (res.ok) {
                      setSendResult("success");
                      form.reset();
                    } else {
                      setSendResult("error");
                    }
                  } catch {
                    setSendResult("error");
                  }
                  setSending(false);
                }}>
                  <div>
                    <Label htmlFor="name" className="text-slate-300">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="bg-slate-700 border-slate-600 text-slate-200 focus:border-cyan-400"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-slate-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-slate-700 border-slate-600 text-slate-200 focus:border-cyan-400"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-slate-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={4}
                      className="bg-slate-700 border-slate-600 text-slate-200 focus:border-cyan-400"
                      required
                    />
                  </div>
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold" type="submit" disabled={sending}>
                    <Send className="w-4 h-4 mr-2" />
                    {sending ? "Sending..." : "Send Message"}
                  </Button>
                  {sendResult === "success" && (
                    <div className="text-green-400 text-center mt-2">Message sent successfully!</div>
                  )}
                  {sendResult === "error" && (
                    <div className="text-red-400 text-center mt-2">Failed to send message. Please try again.</div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
  {/* Floating Theme Toggle Button removed. Only dark theme is kept. */}
  <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-400 mb-4">© 2024 Isurumuni Wijesooriya. Built with Next.js and Tailwind CSS.</p>
          <div className="flex justify-center space-x-6">
            <Link
              href="https://github.com/Muniya-64bit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/isurumuni-wijesooriya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:isurumuniwije@gmail.com"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </Link>
            <Link
              href="https://medium.com/@isurumuniwije"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Edit className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
      </div>
  // ...existing code...
  )
}
