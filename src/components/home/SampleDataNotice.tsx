import { FlaskConical } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const SampleDataNotice = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center gap-2 mb-8 text-sm text-muted-foreground">
    <Badge variant="outline" className="gap-1">
      <FlaskConical className="w-3 h-3" aria-hidden="true" />
      Sample data
    </Badge>
    <span>{title} — numbers shown here are illustrative, not real farm records.</span>
  </div>
);
