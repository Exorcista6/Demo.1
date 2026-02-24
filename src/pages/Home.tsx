import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, Scale, Shield, Heart } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Landing Page - Bufete Lecarnaque
 * Diseño: Elegancia Corporativa Minimalista
 * Colores: Azul Profundo (#1A3A52), Gris Carbón (#2D2D2D), Dorado (#C9A961)
 * Tipografía: Playfair Display (títulos) + Lato (cuerpo)
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <nav className="container flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/UvqYBYNb37tJjAvM78oEQC/sandbox/taEnrRboxZ7yFck2s3bV0J-img-1_1771881151000_na1fn_bGVjYXJuYXF1ZS1sb2dv.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVXZxWUJZTmIzN3RKakF2TTc4b0VRQy9zYW5kYm94L3RhRW5yUmJveFo3eUZjazJzM2JWMEotaW1nLTFfMTc3MTg4MTE1MTAwMF9uYTFmbl9iR1ZqWVhKdVlYRjFaUzFzYjJkdi5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Fq3CD~aRAFpxNyYmARSyO-csdSNYZ8Bt7SAUPnL5BqkSjAaxVS~5~xBneyZJdsh7vf8ZzG5TK6V4tW62xDvwLCkpwuaXXa6Hh83BS2tYtn~R~JPtyq03YA8X8OE6lfpi4~rgzneOGTijz9G7Nfn6EVBLIE6wplZGkPjhgeE3eZs0iR7~EDABQ4QOAk~xuiwVi6W4KH6u-rhl1cMD~aPp2VYyBVHvskYabqcPB-9B9Dle~sYMGUA6jeUv92pyMv9DezsQAfe-y0IKzNxUOEDKQvv83uAYvd-Fd6qEcVKpVO71IIOPFcL~rww6zd2gHH~WOqL5f7GXF2yfsBR0ToLxNQ__"
              alt="Lecarnaque Logo"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-primary hidden sm:inline" style={{ fontFamily: "Playfair Display" }}>
              Lecarnaque
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#areas" className="text-foreground hover:text-primary transition-colors">
              Áreas de Práctica
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </div>

          {/* CTA Button */}
          <Button
            className="bg-primary hover:bg-primary/90 text-white transition-all duration-300"
            size="sm"
          >
            Consulta Gratis
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "url('https://private-us-east-1.manuscdn.com/sessionFile/UvqYBYNb37tJjAvM78oEQC/sandbox/taEnrRboxZ7yFck2s3bV0J-img-2_1771881161000_na1fn_aGVyby1iYW5uZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVXZxWUJZTmIzN3RKakF2TTc4b0VRQy9zYW5kYm94L3RhRW5yUmJveFo3eUZjazJzM2JWMEotaW1nLTJfMTc3MTg4MTE2MTAwMF9uYTFmbl9hR1Z5YnkxaVlXNXVaWEkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Kvk-UQrXxvJQXUL-bhZrbwPmBnQZLySK1qSI01TaeUbmg4GN-gNQfTemURXdHr5wqH98WNaKeL6QF6wV5rGGi5RVnIitTBGiU80G7vXhvUb67p7pj-95SzFHAOE9RtnriTIr6rg0g32NUPoVehufC5GJ~1njeZrGy-X6Xz99PkViCnb5XFuQU~FJEvBYJX8hB~w9aCiDbfmWVzVKi0TTOLfkmk0rD4n5wJod0q7dhY8t6VqLsWphfJsMA2~Y9AZYYV6xAJp7YDfGoi-SV9dLITEulGHRDRS05K1uGU95wu8N-VxaQ-4-tUxEIixfKxHexn9Y2BGlU4RdfzXq~mtgXw__')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent" />

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1
              className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight animate-fade-in"
              style={{ fontFamily: "Playfair Display" }}
            >
              Justicia y Protección Legal para tu Familia
            </h1>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed max-w-xl">
              En Lecarnaque, nos especializamos en Derecho Penal y Familiar con más de 15 años de experiencia. Tu confianza es nuestra responsabilidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Agendar Consulta <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
              >
                Conocer Más
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Services Section */}
      <section id="servicios" className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-primary mb-4"
              style={{ fontFamily: "Playfair Display" }}
            >
              Nuestros Servicios
            </h2>
            <div className="h-1 w-16 bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Scale className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3" style={{ fontFamily: "Playfair Display" }}>
                Asesoría Legal
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Consultoría integral en asuntos legales complejos con enfoque personalizado y estratégico para cada caso.
              </p>
            </Card>

            {/* Service Card 2 */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3" style={{ fontFamily: "Playfair Display" }}>
                Defensa Penal
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Representación legal experta en procedimientos penales, protegiendo tus derechos en todo momento.
              </p>
            </Card>

            {/* Service Card 3 */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3" style={{ fontFamily: "Playfair Display" }}>
                Derecho Familiar
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Soluciones legales en asuntos de familia con sensibilidad, profesionalismo y dedicación.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section id="areas" className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold text-primary mb-6"
                style={{ fontFamily: "Playfair Display" }}
              >
                Derecho Penal
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Especializados en defensa penal con amplia experiencia en delitos complejos. Nuestro equipo garantiza una defensa rigurosa y estratégica.
              </p>
              <ul className="space-y-3">
                {["Delitos graves", "Procedimientos penales", "Apelaciones", "Recursos extraordinarios"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/UvqYBYNb37tJjAvM78oEQC/sandbox/taEnrRboxZ7yFck2s3bV0J-img-3_1771881165000_na1fn_cGVuYWwtbGF3LXNlY3Rpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVXZxWUJZTmIzN3RKakF2TTc4b0VRQy9zYW5kYm94L3RhRW5yUmJveFo3eUZjazJzM2JWMEotaW1nLTNfMTc3MTg4MTE2NTAwMF9uYTFmbl9jR1Z1WVd3dGJHRjNMWE5sWTNScGIyNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=LG5FLDNA5se0JI~x6HWf1v4x6QH40cAPo6OQrmPmS~jvqqEwA2pPqkOCk~QTdisyFL3-wlhtJ-BCw23qOaz4jI7PKdMFjorD~lGFRJuXrIq5bVW7Ydr1eApq64jP2lOFdbmctyMVS~y3BbqfUWqQwbneBjNKWEedg3ydkkkpnJtuJITVzbByzpx96VLHYZi2qLrIGQdTczvJD~bjS-h9ff9HHUpO677KNyWvqS4dClP0Vn~XckUM1bQ0xJ6zoLu8Uh3Y4GfJ0cSNo~zpeJLaZeZ~AbSfGhotuynmw1KwDhZka2ean92-T8hXmlum6VQUsIUMcjmLuiBFrOEIGotmEA__"
                alt="Derecho Penal"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Family Law Section */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/UvqYBYNb37tJjAvM78oEQC/sandbox/taEnrRboxZ7yFck2s3bV0J-img-4_1771881163000_na1fn_ZmFtaWx5LWxhdy1zZWN0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVXZxWUJZTmIzN3RKakF2TTc4b0VRQy9zYW5kYm94L3RhRW5yUmJveFo3eUZjazJzM2JWMEotaW1nLTRfMTc3MTg4MTE2MzAwMF9uYTFmbl9abUZ0YVd4NUxXeGhkeTF6WldOMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=gs99lKuQkllVODtwfuVdxyp7hc5WRjfNQVkWL8ukkGt0IaBveskZIVi3faeyPZR9eKY8VsbdXtBfzm2zFweWHzyO75XzR3F5dWx1q7gUdff5ZDCl4XTfbljOX-MumjEs92y33OqHRYs86xHc7il3G-Uue5UvTgaP-yNdBVL4dhwP7DoeUYc~pNL24BYV9b37wlb4RSZpCFHV5VxmcEp55GAElNBYEGsMclhCS2vCyHLFsNtO~hUUgL-036p6~QaCEImICaP-ZD~uLShZXcPjKde9EQQx9utPbbj6yvGGaDqhetdoHh0i1cwGtvW1-NKbU0ciMgZtJxUekgATAnawag__"
                alt="Derecho de Familia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Right Content */}
            <div className="order-1 md:order-2">
              <h2
                className="text-4xl md:text-5xl font-bold text-primary mb-6"
                style={{ fontFamily: "Playfair Display" }}
              >
                Derecho de Familia
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Acompañamos a familias en momentos delicados con sensibilidad y profesionalismo. Buscamos soluciones que protejan los intereses de todos.
              </p>
              <ul className="space-y-3">
                {["Divorcios y separaciones", "Custodia de menores", "Pensión alimenticia", "Mediación familiar"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-primary mb-4"
              style={{ fontFamily: "Playfair Display" }}
            >
              ¿Por qué elegirnos?
            </h2>
            <div className="h-1 w-16 bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Años de Experiencia" },
              { number: "500+", label: "Casos Resueltos" },
              { number: "98%", label: "Satisfacción de Clientes" },
              { number: "24/7", label: "Disponibilidad" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                <div
                  className="text-4xl font-bold text-accent mb-2"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {stat.number}
                </div>
                <p className="text-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="container text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            ¿Necesitas Asesoría Legal?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contáctanos hoy para una consulta gratuita. Nuestro equipo está listo para ayudarte.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-primary font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Agendar Consulta Ahora
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-primary mb-4"
              style={{ fontFamily: "Playfair Display" }}
            >
              Contacto
            </h2>
            <div className="h-1 w-16 bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-6">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Teléfono</h3>
              <p className="text-foreground/70">+1 (555) 123-4567</p>
            </div>
            <div className="text-center p-6">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <p className="text-foreground/70">info@lecarnaque.com</p>
            </div>
            <div className="text-center p-6">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Ubicación</h3>
              <p className="text-foreground/70">Calle Principal 123</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4" style={{ fontFamily: "Playfair Display" }}>
                Lecarnaque
              </h3>
              <p className="text-white/70">Bufete jurídico especializado en Derecho Penal y Familiar.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Servicios</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#servicios" className="hover:text-white transition-colors">Asesoría Legal</a></li>
                <li><a href="#areas" className="hover:text-white transition-colors">Derecho Penal</a></li>
                <li><a href="#areas" className="hover:text-white transition-colors">Derecho Familiar</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>&copy; 2026 Lecarnaque. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
