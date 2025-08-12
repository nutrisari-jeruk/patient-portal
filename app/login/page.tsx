import { HeartHandshake } from 'lucide-react';
import Link from 'next/link';

import { LoginForm } from './login-form';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <HeartHandshake className="h-8 w-8 text-primary" />
              <h1 className="text-xl font-bold text-foreground">Portal Pasien</h1>
            </Link>
            <Badge variant="secondary">
              RSUD R.T. Notopuro Sidoarjo
            </Badge>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <HeartHandshake className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Masuk ke Portal Pasien</CardTitle>
              <CardDescription>
                Akses hasil pemeriksaan radiologi dan laboratorium Anda
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <LoginForm />

              <div className="mt-6 pt-6 border-t border-border">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-3">
                    Butuh bantuan?
                  </p>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <p>WhatsApp: 0811-3550-333</p>
                    <p>Email: rsudsda@yahoo.co.id</p>
                    <p>Informasi: (031) 8961649</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Link 
              href="/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
