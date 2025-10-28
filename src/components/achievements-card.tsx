import { Card } from "@/components/ui/card";
import { TrophyIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function AchievementCard({
  title,
  issuer,
  date,
  description,
  className = "",
}: {
  title: string;
  issuer?: string;
  date?: string;
  description?: string;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "p-4 rounded-2xl border border-muted bg-muted/30 dark:bg-muted/20 shadow-sm h-full",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-full bg-background border">
          <TrophyIcon className="size-5 text-muted-foreground" />
        </div>
        <div className="flex-1 space-y-1">
          <div className="text-sm font-semibold">{title}</div>
          {(issuer || date) && (
            <div className="text-xs text-muted-foreground">
              {issuer}
              {issuer && date ? " • " : ""}
              {date}
            </div>
          )}
          {description && (
            <p className="text-sm text-foreground mt-2">{description}</p>
          )}
        </div>
      </div>
    </Card>
  );
}
