import Link from "next/link";

import { Container} from "@/app/components/common/container";

export function Footer() {
  return (
    <footer className="border-t py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              SmartifAI
            </h3>

            <p className="text-sm text-muted-foreground">
              AI training and workforce transformation
              platform.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-medium">Company</h4>

            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/team">Team</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/events">Events</Link>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-3">
            <h4 className="font-medium">Programs</h4>

            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/programs">AI Programs</Link>
              <Link href="/corporate-training">
                Corporate Training
              </Link>
              <Link href="/webinars">Webinars</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-medium">Contact</h4>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p>contact@smartifai.com</p>
              <p>India</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-sm text-muted-foreground">
          © 2026 SmartifAI. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}