import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { RadiologyHistoryItem } from "@/lib/history";
import { radiologyHistory } from "@/lib/history";

export default async function RadiologyResultDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item: RadiologyHistoryItem | undefined = radiologyHistory.find((x) => x.id === id);
  if (!item) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold">Detail Hasil - Radiologi</h2>
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <Link href="/dashboard/radiology">Riwayat</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{item.modality} - {item.bodyPart}</CardTitle>
                  <CardDescription>ID: {item.id}</CardDescription>
                </div>
                <Badge variant={item.status === "completed" ? "default" : item.status === "pending" ? "secondary" : "destructive"}>
                  {item.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {item.impression ? (
                  <p className="text-sm text-muted-foreground">{item.impression}</p>
                ) : (
                  <p className="text-sm text-muted-foreground">No impression provided.</p>
                )}
                <p className="text-sm text-muted-foreground">Tanggal: {new Date(item.date).toLocaleDateString()}</p>
                {item.reference ? <p className="text-sm">Ref: {item.reference}</p> : null}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}


