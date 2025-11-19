import { Link } from "wouter";
import { Lightbulb, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "@/i18n/context";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">{t.footer.companyName}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t.footer.description}
            </p>
            <div className="flex gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center"
                data-testid="link-social-linkedin"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center"
                data-testid="link-social-twitter"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-home"
                >
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-about"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-products"
                >
                  {t.nav.products}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-contact"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {t.footer.productCategories}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/products?category=office"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-category-office"
                >
                  {t.footer.categories?.office}
                </a>
              </li>
              <li>
                <a
                  href="/products?category=industrial"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-category-industrial"
                >
                  {t.footer.categories?.industrial}
                </a>
              </li>
              <li>
                <a
                  href="/products?category=outdoor"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-category-outdoor"
                >
                  {t.footer.categories?.outdoor}
                </a>
              </li>
              <li>
                <a
                  href="/products?category=retail"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-category-retail"
                >
                  {t.footer.categories?.retail}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {t.contact.contactInfo}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span data-testid="text-address">{t.footer.addressLine}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a
                  href="tel:+1-555-0123"
                  className="hover:text-foreground transition-colors"
                  data-testid="link-phone"
                >
                  +1 (555) 012-3456
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:info@luminatech.com"
                  className="hover:text-foreground transition-colors"
                  data-testid="link-email"
                >
                  info@luminatech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-sm text-muted-foreground"
            data-testid="text-copyright"
          >
            © {new Date().getFullYear()} {t.footer.companyName}.{" "}
            {t.footer.allRightsReserved}
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-privacy"
            >
              {t.footer.privacyPolicy}
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-terms"
            >
              {t.footer.termsOfService}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
