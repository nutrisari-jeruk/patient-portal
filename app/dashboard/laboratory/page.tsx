import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { LaboratoryHistoryItem } from "@/lib/history";
import { laboratoryHistory } from "@/lib/history";

export default function LaboratoryHistoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold">Riwayat Laboratorium</h2>
            <Button variant="outline" asChild>
              <Link href="/dashboard">Kembali ke Dashboard</Link>
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Laboratorium</CardTitle>
              <CardDescription>Daftar hasil pemeriksaan laboratorium Anda</CardDescription>
            </CardHeader>
            <CardContent>
              {laboratoryHistory.length === 0 ? (
                <p className="text-sm text-muted-foreground">Belum ada data riwayat untuk ditampilkan.</p>
              ) : (
                <ul className="divide-y divide-border">
                  {laboratoryHistory.map((item: LaboratoryHistoryItem) => (
                    <li key={item.id} className="py-3 flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium">{item.testName}</p>
                        <p className="text-xs text-muted-foreground">{new Date(item.date).toLocaleDateString()}</p>
                        {item.value ? (
                          <p className="text-sm mt-1">{item.value} {item.unit} {item.normalRange ? <span className="text-muted-foreground">(Normal: {item.normalRange})</span> : null}</p>
                        ) : null}
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <Badge variant={item.status === "completed" ? "default" : item.status === "pending" ? "secondary" : "destructive"}>
                          {item.status}
                        </Badge>
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/dashboard/laboratory/${item.id}`}>View</Link>
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}


