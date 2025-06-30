"use client";

import { CalendarIcon, GraduationCapIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CredentialCardProps {
  title: string;
  subtitle: string; // provider or issuer
  date: string;
  description?: string;
  icon?: "course" | "certificate";
  className?: string;
}

export const CredentialCard: React.FC<CredentialCardProps> = ({
  title,
  subtitle,
  date,
  description,
  icon = "course",
  className = "",
}) => {
  const Icon = icon === "certificate" ? GraduationCapIcon : CalendarIcon;

  return (
    <Card
      className={cn(
        "p-4 rounded-2xl border border-muted bg-muted/30 dark:bg-muted/20 shadow-sm",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-full bg-background border">
          <Icon className="size-5 text-muted-foreground" />
        </div>
        <div className="flex-1 space-y-1">
          <div className="text-sm font-semibold">{title}</div>
          <div className="text-xs text-muted-foreground">{subtitle}</div>
          <div className="text-xs text-muted-foreground">{date}</div>
          {description && (
            <p className="text-sm text-foreground mt-2">{description}</p>
          )}
        </div>
      </div>
    </Card>
  );
};
