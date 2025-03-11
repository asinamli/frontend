import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FeaturedEvents } from "@/app/components/events/featured-events";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">

            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="block">Etkinliklere Bilet Almanın</span>

              <span className="block text-primary">En Kolay Yolu</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Konserler, tiyatrolar, spor etkinlikleri ve daha fazlası için biletlerinizi hemen alın.
              Tüm etkinlikler tek bir platformda!
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link href="/events">
                  <Button size="lg" className="w-full">
                    Etkinlikleri Keşfet
                  </Button>
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link href="/auth/register">
                  <Button variant="outline" size="lg" className="w-full">
                    Kayıt Ol
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-12 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
            Öne Çıkan Etkinlikler
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-muted-foreground">
            Kaçırmamanız gereken en popüler etkinlikler
          </p>
          <div className="mt-10">
            <FeaturedEvents />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
            Kategoriler
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-muted-foreground">
            İlgi alanınıza göre etkinlikleri keşfedin
          </p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/events?category=${category.slug}`}
                className="group"
              >
                <div className="relative rounded-lg border border-border overflow-hidden bg-card transition-all duration-200 group-hover:border-primary group-hover:shadow-md">
                  <div className="h-48 bg-muted flex items-center justify-center">
                    <category.icon className="h-12 w-12 text-primary" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-foreground group-hover:text-primary">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl">
            <span className="block">Etkinlik mi düzenliyorsunuz?</span>
            <span className="block">Hemen organizatör hesabı oluşturun.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/auth/register?role=organizer">
                <Button size="lg" variant="secondary">
                  Organizatör Olun
                </Button>
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link href="/about">
                <Button size="lg" variant="outline" className="bg-primary-foreground text-primary">
                  Daha Fazla Bilgi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Dummy data for categories
const categories = [
  {
    name: "Konserler",
    slug: "concerts",
    description: "Canlı müzik performansları ve konserler",
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
        />
      </svg>
    ),
  },
  {
    name: "Spor",
    slug: "sports",
    description: "Futbol, basketbol ve diğer spor etkinlikleri",
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    name: "Tiyatro",
    slug: "theater",
    description: "Tiyatro oyunları ve sahne performansları",
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
        />
      </svg>
    ),
  },
  {
    name: "Festivaller",
    slug: "festivals",
    description: "Müzik, yemek ve kültür festivalleri",
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
];
