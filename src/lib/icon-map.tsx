import { BrainCircuit, Code2, Globe2, Wrench, BarChart3, Calculator, Orbit, Users, BriefcaseBusiness, TrafficCone, type LucideIcon } from "lucide-react";
import type { ProjectIcon, SkillIcon, ExpertiseIcon } from "./portfolio-data";
export const projectIconMap: Record<ProjectIcon, LucideIcon> = { traffic:TrafficCone, orbit:Orbit, users:Users, briefcase:BriefcaseBusiness, calculator:Calculator };
export const skillIconMap: Record<SkillIcon, LucideIcon> = { code:Code2, brain:BrainCircuit, globe:Globe2, wrench:Wrench };
export const expertiseIconMap: Record<ExpertiseIcon, LucideIcon> = { brain:BrainCircuit, globe:Globe2, calculator:Calculator, chart:BarChart3 };
export function ProjectIconSvg({icon,className,size,strokeWidth}:{icon:ProjectIcon;className?:string;size?:number;strokeWidth?:number}) { const Icon=projectIconMap[icon]; return <Icon className={className} size={size} strokeWidth={strokeWidth??2} aria-hidden="true"/>; }
export function SkillIconSvg({icon,className,size,strokeWidth}:{icon:SkillIcon;className?:string;size?:number;strokeWidth?:number}) { const Icon=skillIconMap[icon]; return <Icon className={className} size={size} strokeWidth={strokeWidth??2} aria-hidden="true"/>; }
export function ExpertiseIconSvg({icon,className,size,strokeWidth}:{icon:ExpertiseIcon;className?:string;size?:number;strokeWidth?:number}) { const Icon=expertiseIconMap[icon]; return <Icon className={className} size={size} strokeWidth={strokeWidth??2} aria-hidden="true"/>; }
