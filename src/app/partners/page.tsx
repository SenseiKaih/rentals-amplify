import Image from "next/image"
import Link from "next/link"
import { Button } from "../components/button"
import { Card } from "../components/card"
import { Avatar } from "../components//avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/accordion"
import { Globe, Users, Eye, Wrench, Lock, BarChart, Edit, Settings, MessageCircle, Headset } from "lucide-react"

export default function PartnersPage() {
return (
  <div className="flex flex-col min-h-screen">
    {/* Navigation Bar */}
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/farmtex-logo-white.svg" alt="Farmtex Hub Logo" width={32} height={32} />
          <span className="font-bold">Farmtex Hub</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About Us
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/farmers">
            For Farmers
          </Link>
          <Link className="text-sm font-medium underline underline-offset-4" href="/partners">
            Partners
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/resources">
            Resources
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact Us
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button size="sm">Sign Up</Button>
        </div>
      </div>
    </header>

    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center" style={{backgroundImage: "url('/partners-hero.jpg')"}}>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Expand Your Business Horizons with Farmtex Hub
            </h1>
            <h2 className="mx-auto max-w-[700px] text-white md:text-xl">
              Connect with a vast network of farmers and unlock new growth opportunities.
            </h2>
            <Button asChild size="lg" className="mt-6">
              <Link href="/partners/signup">Become a Partner Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction to Partnership */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Partner with Farmtex Hub?</h2>
          <p className="mt-4 text-muted-foreground">
            Farmtex Hub connects equipment providers, labor agencies, financial institutions, and logistics companies with a vast network of farmers. By partnering with us, you'll gain access to new markets, innovative tools, and collaborative opportunities that drive growth and success in the agricultural sector.
          </p>
          <Image
            src="/partnership-illustration.svg"
            alt="Partners interacting with Farmtex Hub platform"
            width={600}
            height={400}
            className="mt-8 rounded-lg"
          />
        </div>
      </section>

      {/* Unlocking Opportunities */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Unlock New Opportunities</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="p-6">
              <Globe className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Market Expansion</h3>
              <p>Tap into new markets and reach customers beyond your current scope.</p>
            </Card>
            <Card className="p-6">
              <Users className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Collaborative Growth</h3>
              <p>Work alongside industry leaders to innovate and grow.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Partner Benefits</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6">
              <Eye className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Increased Visibility</h3>
              <p>Showcase your services to thousands of potential clients daily.</p>
            </Card>
            <Card className="p-6">
              <Wrench className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Advanced Management Tools</h3>
              <p>Manage bookings, schedules, and customer interactions efficiently.</p>
            </Card>
            <Card className="p-6">
              <Lock className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Secure Transactions</h3>
              <p>Benefit from our secure payment processing and compliance standards.</p>
            </Card>
            <Card className="p-6">
              <BarChart className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Data Insights</h3>
              <p>Leverage analytics to understand market trends and customer behavior.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Success Stories</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <Image src="/sarah-k.jpg" alt="Sarah K." width={40} height={40} />
                </Avatar>
                <div>
                  <h3 className="font-bold">Sarah K.</h3>
                  <p className="text-sm text-muted-foreground">Equipment Provider</p>
                </div>
              </div>
              <p className="italic">"Since partnering with Farmtex Hub, our equipment rentals have increased by 50%."</p>
            </Card>
            {/* Add more testimonials here */}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Simple Onboarding Process</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <Card className="p-6">
              <Edit className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">1. Apply</h3>
              <p>Submit your partnership application.</p>
            </Card>
            <Card className="p-6">
              <Settings className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">2. Set Up Your Profile</h3>
              <p>List your services and offerings.</p>
            </Card>
            <Card className="p-6">
              <MessageCircle className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">3. Connect with Clients</h3>
              <p>Start receiving inquiries and bookings.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Maximizing Your Partnership */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Grow with Farmtex Hub</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Marketing Support</AccordionTrigger>
              <AccordionContent>
                Access co-branding opportunities and promotional campaigns.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Dedicated Assistance</AccordionTrigger>
              <AccordionContent>
                Our team is here to assist you every step of the way.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Community Engagement</AccordionTrigger>
              <AccordionContent>
                Engage with other partners to create synergistic opportunities.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Strong Call-to-Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Ready to Grow Your Business?</h2>
          <Button asChild size="lg" variant="secondary" className="mt-6">
            <Link href="/partners/signup">Apply Now to Become a Partner</Link>
          </Button>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What are the costs associated with partnering?</AccordionTrigger>
              <AccordionContent>
                We offer flexible plans tailored to your business needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does Farmtex Hub promote my services?</AccordionTrigger>
              <AccordionContent>
                We feature partners prominently on our platform and through marketing campaigns.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I integrate my existing systems?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer API integrations for seamless connectivity.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Our Partnership Team */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <Headset className="w-12 h-12 mb-4 text-primary" />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Have Questions? We're Here to Help.</h2>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button asChild variant="outline">
                <Link href="mailto:partners@farmtexhub.com">partners@farmtexhub.com</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="tel:+1234567890">+123-456-7890</Link>
              </Button>
              <Button asChild>
                <Link href="/schedule-meeting">Schedule a Meeting</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>

    {/* Footer */}
    
  </div>
)
}