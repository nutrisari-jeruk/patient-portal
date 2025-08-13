import { HeartHandshake, Microscope, FileText, User, IdCard, Calendar, Shield } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <HeartHandshake className="h-8 w-8 text-primary" />
              <h1 className="text-xl font-bold text-foreground">Portal Pasien</h1>
            </Link>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="hidden sm:inline-flex">RSUD R.T. Notopuro Sidoarjo</Badge>
              <Button variant="outline" asChild>
                <Link href="/login">Keluar</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Patient Info */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl sm:text-3xl font-bold">Dashboard</h2>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                Data Anda aman dan terenkripsi
              </div>
            </div>

            <Card>
              <CardHeader className="flex flex-row items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Budi Santoso</CardTitle>
                    <CardDescription>Pasien</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="flex items-center gap-3">
                    <IdCard className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">No. Rekam Medis</p>
                      <p className="font-medium">12345678</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <IdCard className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">NIK</p>
                      <p className="font-medium">3512345678900001</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Tanggal Lahir</p>
                      <p className="font-medium">12 Januari 1985</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Jenis Kelamin</p>
                      <p className="font-medium">Laki-laki</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* Service List */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Layanan</h3>
              <p className="text-sm text-muted-foreground">Pilih jenis pemeriksaan untuk melihat hasil</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Laboratorium */}
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Microscope className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Hasil Laboratorium</CardTitle>
                  <CardDescription>Pemeriksaan darah, urine, dan lainnya</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    <Button asChild>
                      <Link href="/dashboard/laboratory">Lihat Hasil</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Radiologi */}
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Hasil Radiologi</CardTitle>
                  <CardDescription>Rontgen, CT Scan, MRI, dan lainnya</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    <Button asChild>
                      <Link href="/dashboard/radiology">Lihat Hasil</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


