//@ts-nocheck
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Globe, Database, Code, Layers, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { staggerItem, cardHover } from "@/lib/animations"
import { SectionWrapper, StaggerWrapper } from "@/components/motion-wrapper"
import { useState } from "react"

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <SectionWrapper id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-1/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="h-8 w-8 text-accent" />
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-heading font-bold text-foreground"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Skills & Technologies
            </motion.h2>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="h-8 w-8 text-accent" />
            </motion.div>
          </motion.div>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A comprehensive overview of my technical expertise and proficiency levels
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <StaggerWrapper className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Frontend Technologies */}
          <motion.div variants={staggerItem}>
            <Card className="border-l-4 border-l-accent border-r border-r-border/50 border-y border-y-border/50 group h-full">
              <motion.div
                variants={cardHover}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setHoveredSkill("frontend")}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Globe className="h-6 w-6 text-accent" />
                    </motion.div>
                    <h3 className="text-2xl font-heading font-semibold text-foreground">Frontend Development</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: "React JS", level: 90, label: "Advanced" },
                      { name: "Next.js", level: 85, label: "Advanced" },
                      { name: "JavaScript", level: 88, label: "Advanced" },
                      { name: "HTML & CSS", level: 95, label: "Expert" },
                      { name: "Angular JS", level: 70, label: "Intermediate" },
                    ].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {skill.label}
                          </Badge>
                        </div>
                        <div className="relative">
                          <Progress value={0} className="h-2" />
                          <motion.div
                            className="absolute top-0 left-0 h-2 bg-gradient-to-r from-accent to-chart-1 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.5,
                              delay: index * 0.2,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.div>
            </Card>
          </motion.div>

          {/* Backend Technologies */}
          <motion.div variants={staggerItem}>
            <Card className="border-l-4 border-l-chart-1 border-r border-r-border/50 border-y border-y-border/50 group h-full">
              <motion.div
                variants={cardHover}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setHoveredSkill("backend")}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="p-3 bg-chart-1/10 rounded-xl group-hover:bg-chart-1/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Database className="h-6 w-6 text-chart-1" />
                    </motion.div>
                    <h3 className="text-2xl font-heading font-semibold text-foreground">Backend Development</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: "Node.js", level: 85, label: "Advanced" },
                      { name: "Express.js", level: 82, label: "Advanced" },
                      { name: "MongoDB", level: 80, label: "Advanced" },
                      { name: "Python", level: 75, label: "Intermediate" },
                      { name: "RESTful APIs", level: 85, label: "Advanced" },
                    ].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {skill.label}
                          </Badge>
                        </div>
                        <div className="relative">
                          <Progress value={0} className="h-2" />
                          <motion.div
                            className="absolute top-0 left-0 h-2 bg-gradient-to-r from-chart-1 to-accent rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.5,
                              delay: index * 0.2,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.div>
            </Card>
          </motion.div>
        </StaggerWrapper>

        {/* Programming Languages & Tools */}
        <StaggerWrapper className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Programming Languages */}
          <motion.div variants={staggerItem}>
            <Card className="h-full border border-border/50">
              <motion.div variants={cardHover} whileHover="hover" whileTap={{ scale: 0.98 }}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="p-3 bg-chart-2/10 rounded-xl"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Code className="h-6 w-6 text-chart-2" />
                    </motion.div>
                    <h3 className="text-2xl font-heading font-semibold text-foreground">Programming Languages</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: "JavaScript", level: 90, label: "Expert" },
                      { name: "Python", level: 75, label: "Intermediate" },
                      { name: "Java", level: 70, label: "Intermediate" },
                      { name: "C/C++", level: 68, label: "Intermediate" },
                    ].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {skill.label}
                          </Badge>
                        </div>
                        <div className="relative">
                          <Progress value={0} className="h-2" />
                          <motion.div
                            className="absolute top-0 left-0 h-2 bg-gradient-to-r from-chart-2 to-chart-3 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.5,
                              delay: index * 0.2,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.div>
            </Card>
          </motion.div>

          {/* Full-Stack Expertise */}
          <motion.div variants={staggerItem}>
            <Card className="h-full border border-border/50">
              <motion.div variants={cardHover} whileHover="hover" whileTap={{ scale: 0.98 }}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="p-3 bg-chart-3/10 rounded-xl"
                      whileHover={{ scale: 1.1, rotate: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Layers className="h-6 w-6 text-chart-3" />
                    </motion.div>
                    <h3 className="text-2xl font-heading font-semibold text-foreground">Full-Stack Expertise</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: "MERN Stack", level: 88, label: "Expert" },
                      { name: "API Integration", level: 85, label: "Advanced" },
                      { name: "Authentication", level: 82, label: "Advanced" },
                      { name: "State Management", level: 80, label: "Advanced" },
                    ].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {skill.label}
                          </Badge>
                        </div>
                        <div className="relative">
                          <Progress value={0} className="h-2" />
                          <motion.div
                            className="absolute top-0 left-0 h-2 bg-gradient-to-r from-chart-3 to-accent rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.5,
                              delay: index * 0.2,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.div>
            </Card>
          </motion.div>
        </StaggerWrapper>

        {/* Key Achievements */}
        <motion.div
          className="bg-gradient-to-br from-muted/30 to-accent/5 rounded-3xl p-8 border border-border/50"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-2xl font-heading font-semibold text-foreground mb-8 text-center flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="h-6 w-6 text-accent" />
            </motion.div>
            Key Technical Achievements
          </motion.h3>
          <StaggerWrapper className="grid md:grid-cols-3 gap-6">
            {[
              { value: "30%", label: "API Performance Improvement", desc: "Optimized API calls using Axios" },
              { value: "Real-time", label: "Features Implementation", desc: "Built responsive UIs with live updates" },
              { value: "Production", label: "Ready Applications", desc: "Optimized for enterprise use" },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center space-y-2 group"
                variants={staggerItem}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="text-3xl font-heading font-bold text-accent"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  {achievement.value}
                </motion.div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
                <p className="text-xs text-muted-foreground">{achievement.desc}</p>
              </motion.div>
            ))}
          </StaggerWrapper>
        </motion.div>

        {/* Technology Stack Overview */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-2xl font-heading font-semibold text-foreground mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technology Stack
          </motion.h3>
          <StaggerWrapper className="flex flex-wrap justify-center gap-3">
            {[
              "React",
              "Node.js",
              "MongoDB",
              "Next.js",
              "Express",
              "JavaScript",
              "Python",
              "HTML",
              "CSS",
              "Java",
              "C++",
              "Angular",
              "RESTful APIs",
              "Git",
              "Responsive Design",
              "Authentication",
              "State Management",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                variants={staggerItem}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  backgroundColor: "rgba(var(--accent), 0.1)",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge variant="outline" className="px-4 py-2 text-sm transition-all duration-300 cursor-pointer">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </StaggerWrapper>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
