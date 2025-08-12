import { HeartHandshake, FileText, Microscope, Shield, Clock } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <HeartHandshake className="h-8 w-8 text-primary" />
              <h1 className="text-xl font-bold text-foreground">Portal Pasien</h1>
            </div>
            <Button asChild>
              <Link href="/login">
                Masuk
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Portal Resmi RSUD R.T. Notopuro Sidoarjo
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Akses Hasil Pemeriksaan 
              <span className="text-primary"> Radiologi & Laboratorium</span>
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Portal resmi untuk pasien RSUD R.T. Notopuro Sidoarjo. Lihat hasil radiologi dan laboratorium Anda 
              kapan saja, dimana saja dengan aman dan mudah.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild>
                <Link href="/login">
                  Akses Hasil Pemeriksaan
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#cara-kerja">
                  Pelajari Lebih Lanjut
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Fitur Unggulan Portal Pasien
            </h3>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Akses mudah dan aman untuk semua kebutuhan informasi medis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Microscope className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Hasil Laboratorium</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Lihat hasil pemeriksaan laboratorium lengkap dengan interpretasi dan nilai normal
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Hasil Radiologi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Akses hasil pemeriksaan radiologi termasuk foto rontgen, CT scan, dan MRI
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Keamanan Terjamin</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Data medis Anda dilindungi dengan standar keamanan tinggi dan enkripsi
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Akses 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Akses hasil pemeriksaan kapan saja, 24 jam sehari, 7 hari seminggu
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <HeartHandshake className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle>Support Pasien</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Tim support siap membantu untuk pertanyaan terkait akses dan penggunaan portal
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="cara-kerja" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Cara Menggunakan Portal Pasien
            </h3>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Akses hasil pemeriksaan Anda hanya dalam 3 langkah mudah
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <CardTitle>Login dengan Kredensial</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Masuk menggunakan nomor rekam medis atau NIK bersama dengan password yang telah diberikan
                </CardDescription>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <CardTitle>Pilih Jenis Pemeriksaan</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Pilih apakah ingin melihat hasil laboratorium atau radiologi dari menu yang tersedia
                </CardDescription>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <CardTitle>Lihat & Download Hasil</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Lihat hasil pemeriksaan Anda secara detail dan download untuk keperluan pribadi
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Siap Mengakses Hasil Pemeriksaan Anda?
            </h3>
            <p className="mt-6 text-lg sm:text-xl text-primary-foreground/80">
              Masuk sekarang dan dapatkan akses mudah ke semua hasil pemeriksaan medis Anda
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/login">
                  Masuk ke Portal Pasien
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <HeartHandshake className="h-8 w-8 text-primary" />
                <h4 className="text-lg font-semibold text-foreground">RSUD R.T. Notopuro Sidoarjo</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Portal resmi untuk akses hasil pemeriksaan radiologi dan laboratorium pasien.
              </p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-foreground mb-4">Layanan</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Hasil Laboratorium</li>
                <li>Hasil Radiologi</li>
                <li>Riwayat Pemeriksaan</li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-foreground mb-4">Bantuan</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Cara Login</li>
                <li>FAQ</li>
                <li>Kontak Support</li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-foreground mb-4">Kontak</h5>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>Jl. Mojopahit No.667, Kabupaten Sidoarjo</p>
                <p>WhatsApp: 0811-3550-333</p>
                <p>Informasi: (031) 8961649</p>
                <p>Informasi: (031) 8960871</p>
                <p>Informasi: (031) 8921647</p>
                <p>Pengaduan: 0812-2221-5266</p>
                <p>Email: rsudsda@yahoo.co.id</p>
                <p>Email: pengaduan.rsudsda@gmail.com</p>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 RSUD R.T. Notopuro Sidoarjo. Semua hak dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}