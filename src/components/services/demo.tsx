import {
  IconBrandMongodb,
  IconBrandHtml5,
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandVscode,
  IconBrandNextjs,
  IconBrandPython,
  IconBrandSupabase,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandNodejs,
  IconBrandCss3,
} from "@tabler/icons-react"

import { LogoTimeline } from "@/components/ui/timeline"
import type { LogoItem } from "@/components/ui/timeline"

const logos: LogoItem[] = [
  // Row 1 - Communication & Social (2 logos, 50s duration, spaced 25s apart)
  {
    label: "HTML",
    icon: <IconBrandHtml5 />,
    animationDelay: -50,
    animationDuration: 50,
    row: 1,
  },
  {
    label: "CSS",
    icon: <IconBrandCss3 />,
    animationDelay: -25,
    animationDuration: 50,
    row: 1,
  },
  // Row 2 - Development Tools (2 logos, 45s duration, spaced 22.5s apart)
  {
    label: "GitHub",
    icon: <IconBrandGithub />,
    animationDelay: -45,
    animationDuration: 45,
    row: 2,
  },
  {
    label: "React",
    icon: <IconBrandReact />,
    animationDelay: -22.5,
    animationDuration: 45,
    row: 2,
  },
  // Row 3 - Development Tools Continued (3 logos, 60s duration, spaced 20s apart)
  {
    label: "TypeScript",
    icon: <IconBrandTypescript />,
    animationDelay: -60,
    animationDuration: 60,
    row: 3,
  },
  {
    label: "Tailwind",
    icon: <IconBrandTailwind />,
    animationDelay: -40,
    animationDuration: 60,
    row: 3,
  },

  // Row 4 - Productivity & Cloud (2 logos, 55s duration, spaced 27.5s apart)
  {
    label: "Javascript",
    icon: <IconBrandJavascript />,
    animationDelay: -55,
    animationDuration: 55,
    row: 4,
  },
  {
    label: "Next.JS",
    icon: <IconBrandNextjs />,
    animationDelay: -27.5,
    animationDuration: 55,
    row: 4,
  },
  // Row 5 - Messaging (2 logos, 50s duration, spaced 25s apart)
  {
    label: "NodeJS",
    icon: <IconBrandNodejs />,
    animationDelay: -50,
    animationDuration: 50,
    row: 5,
  },
  {
    label: "VS Code",
    icon: <IconBrandVscode />, // Placeholder icon
    animationDelay: -25,
    animationDuration: 50,
    row: 5,
  },
  // Row 6 - AI & Automation (3 logos, 65s duration, spaced ~21.5s apart)
  {
    label: "Python",
    icon: <IconBrandPython />, // Placeholder icon
    animationDelay: -65,
    animationDuration: 65,
    row: 6,
  },

  // Row 7 - Payment & Services (2 logos, 50s duration, spaced 25s apart)
  {
    label: "Supabase",
    icon: <IconBrandSupabase />, // Placeholder icon
    animationDelay: -50,
    animationDuration: 50,
    row: 7,
  },
  {
    label: "MongoDB",
    icon: <IconBrandMongodb />, // Placeholder icon
    animationDelay: -25,
    animationDuration: 50,
    row: 7,
  },
]

const labelsByService: Record<number, string[]> = {
  1: ["HTML", "CSS", "Javascript", "TypeScript", "Python"],
  2: ["React", "NodeJS", "Next.JS", "Tailwind"],
  3: ["GitHub", "VS Code", "MongoDB", "Supabase"],
}

export function LogoTimelineDemo({
  activeServiceId,
}: {
  activeServiceId: number | null
}) {
  const highlightedLabels = activeServiceId
    ? labelsByService[activeServiceId] ?? []
    : []

  return (
    <div className="w-full overflow-hidden">
      <LogoTimeline
        items={logos.map((logo) => ({
          ...logo,
          highlighted: highlightedLabels.includes(logo.label),
        }))}
        height="h-[400px] sm:h-[400px]"
        iconSize={18}
        showRowSeparator={true}
      />
    </div>
  )
}

export default LogoTimelineDemo
