import Image from "next/image"
import Link from "next/link"
import { Button } from "../components/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/card"
import { Avatar, AvatarFallback, AvatarImage } from "../components/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/accordion"
import { Alert, AlertDescription, AlertTitle } from "../components/alert"
import { Wrench, Users, Tractor, Calendar, CreditCard, Truck, MessageCircle, UserPlus, Settings, Link as LinkIcon, TrendingUp } from "lucide-react"

export default function ForFarmersPage() {
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
            <Link className="text-sm font-medium underline underline-offset-4" href="/farmers">
              For Farmers
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/partners">
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
            <Button size="sm" className="bg-white text-black hover:bg-black hover:text-white transition-colors duration-300" variant="outline">Sign Up</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center" style={{backgroundImage: "url('/farmers-hero.jpg')"}}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Empower Your Farming Journey with Farmtex Hub
              </h1>
              <h2 className="mx-auto max-w-[700px] text-white md:text-xl">
                Access resources, collaborate with peers, and scale up—whether you own a farm or not.
              </h2>
              <Button asChild size="lg" className="mt-6 outline ouline-white" >
                <Link href="/signup">Join the Community Today</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Identify the Challenges */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Common Farming Challenges</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <Wrench className="w-10 h-10 mb-2 text-[#67ef45]" />
                  <CardTitle>Access to Equipment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Struggling to find the right equipment when you need it?</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="w-10 h-10 mb-2 text-[#67ef45]" />
                  <CardTitle>Labor Shortages</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Facing labor shortages during peak seasons?</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Introduce Farmtex Hub */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Your Solution is Here</h2>
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div>
                <p className="text-xl text-muted-foreground">
                  Farmtex Hub addresses these challenges by connecting you with a vast network of resources, equipment providers, and skilled labor. Our platform streamlines the process of finding what you need, when you need it, allowing you to focus on what matters most - growing your farm.
                </p>
              </div>
              <div className="relative h-[300px] lg:h-[400px]">
                <Image
                  src="/collaboration.jpg"
                  alt="Farmers collaborating"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="w-full py-12 md:py-24 lg:py-32 overflow-hidden">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Key Benefits</h2>
            <div className="flex space-x-4 pb-4 overflow-x-auto">
              <Card className="w-[300px] flex-shrink-0">
                <CardHeader>
                  <Tractor className="w-10 h-10 mb-2 text-[#67ef45]" />
                  <CardTitle>Access to Equipment and Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Rent state-of-the-art equipment from trusted providers.</p>
                </CardContent>
              </Card>
              <Card className="w-[300px] flex-shrink-0">
                <CardHeader>
                  <Calendar className="w-10 h-10 mb-2 text-[#67ef45]" />
                  <CardTitle>Labor Management Made Easy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Hire skilled labor effortlessly for every farming phase.</p>
                </CardContent>
              </Card>
              <Card className="w-[300px] flex-shrink-0">
                <CardHeader>
                  <CreditCard className="w-10 h-10 mb-2 text-[#67ef45]" />
                  <CardTitle>Financial Services at Your Fingertips</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Secure loans, leasing options, and insurance tailored for farmers.</p>
                </CardContent>
              </Card>
              <Card className="w-[300px] flex-shrink-0">
                <CardHeader>
                  <Truck className="w-10 h-10 mb-2 text-[#67ef45]" />
                  <CardTitle>Efficient Logistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Streamline equipment delivery and crop transportation with real-time tracking.</p>
                </CardContent>
              </Card>
              <Card className="w-[300px] flex-shrink-0">
                <CardHeader>
                  <MessageCircle className="w-10 h-10 mb-2 text-[#67ef45]" />
                  <CardTitle>Collaborate and Grow</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Join forces with other farmers to share resources and knowledge.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Hear from Fellow Farmers</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardContent className="mt-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar>
                      <AvatarImage src="/john-d.jpg" alt="John D." />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">John D.</h3>
                      <p className="text-sm text-muted-foreground">Maize Farmer</p>
                    </div>
                  </div>
                  <p className="italic">Thanks to Farmtex Hub, I increased my yield by 30% last season!</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="mt-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar>
                      <AvatarImage src="/sarah-m.jpg" alt="Sarah M." />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">Sarah M.</h3>
                      <p className="text-sm text-muted-foreground">Organic Vegetable Farmer</p>
                    </div>
                  </div>
                  <p className="italic">The labor management tools saved me countless hours during harvest season.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="mt-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar>
                      <AvatarImage src="/michael-r.jpg" alt="Michael R." />
                      <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">Michael R.</h3>
                      <p className="text-sm text-muted-foreground">Dairy Farmer</p>
                    </div>
                  </div>
                  <p className="italic">Farmtex Hub &apos;s financial services helped me expand my operation with confidence.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Getting Started is Easy</h2>
            <div className="grid gap-6 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <UserPlus className="w-10 h-10 mb-2 text-[#67ef45]" />
                  <CardTitle>1. Sign Up</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Create your free account.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Settings className="w-10 h-10 mb-2 text-[#67ef45]" />
                  <CardTitle>2. Customize Your Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Select your needs and interests.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <LinkIcon className="w-10 h-10 mb-2 text-[#67ef45]" />
                  <CardTitle>3. Connect</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Find equipment, labor, and partners.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <TrendingUp className="w-10 h-10 mb-2 text-[#67ef45]" />
                  <CardTitle>4. Grow Your Farm</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Utilize resources to scale up.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Opportunities for All */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <Alert>
              <AlertTitle className="text-xl font-bold">No farm? No problem!</AlertTitle>
              <AlertDescription>
                Join as a labor provider or equipment partner and contribute to the agricultural community.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Educational Resources */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Grow Your Knowledge</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Latest Farming Techniques</CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href="/resources/farming-techniques" className="text-primary hover:underline">
                    Learn More
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Market Trends Webinar</CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href="/resources/market-trends" className="text-primary hover:underline">
                    Watch Now
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  
                  <CardTitle>Expert Tips for Crop Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href="/resources/crop-management" className="text-primary hover:underline">
                    Read Article
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Community Engagement */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Join the Conversation</h2>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-xl text-center max-w-[600px]">
                Engage with fellow farmers, share experiences, and learn from the community.
              </p>
              <Button asChild size="lg" variant="outline">
                <Link href="/community">Explore the Community</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Strong Call-to-Action */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Ready to Transform Your Farming Experience?</h2>
            <Button asChild size="lg" variant="secondary" className="mt-6">
              <Link href="/signup">Sign Up Now and Start Growing</Link>
            </Button>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How much does it cost to join?</AccordionTrigger>
                <AccordionContent>
                  Joining Farmtex Hub is free for farmers. Some services may have associated costs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I use Farmtex Hub without owning a farm?</AccordionTrigger>
                <AccordionContent>
                  You can join as a labor provider or equipment partner.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is my data secure?</AccordionTrigger>
                <AccordionContent>
                  Yes, we use industry-standard encryption to protect your information.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Contact Us */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Need More Information?</h2>
            <div className="flex flex-col items-center space-y-4 text-center">
              <p className="text-xl">We&apos;re here to help. Reach out to us through any of these channels:</p>
              <div className="flex space-x-4">
                <Button asChild variant="outline">
                  <Link href="mailto:support@farmtexhub.com">support@farmtexhub.com</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="tel:+1234567890">+123-456-7890</Link>
                </Button>
                <Button>Live Chat</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      
    </div>
  )
}