import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import PageHeader from "@/components/layout/PageHeader";
import { FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GeneralPages = () => {
  return (
    <div className="min-h-screen flex w-full bg-background overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto p-6">
        <PageHeader title="General Pages" icon={<FileText className="h-6 w-6 text-purple-primary" />} />
        
        <Tabs defaultValue="about" className="w-full mb-6">
          <TabsList>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>About Purple</CardTitle>
                <CardDescription>Learn more about our company and mission</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Purple is a leading provider of dashboard solutions and UI components, dedicated to making
                  development easier and more efficient for teams of all sizes.
                </p>
                
                <div className="py-4">
                  <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                  <p>
                    To provide beautiful, responsive, and accessible UI components that can be easily 
                    integrated into any project, saving developers time and effort while maintaining 
                    high standards of quality and performance.
                  </p>
                </div>
                
                <div className="py-4">
                  <h3 className="text-lg font-semibold mb-2">Our Team</h3>
                  <p>
                    We are a diverse team of designers, developers, and product managers who are passionate 
                    about creating great user experiences and developer tools.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold">Founded</h4>
                    <p>2023</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold">Customers</h4>
                    <p>10,000+</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold">Countries</h4>
                    <p>50+</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="faq" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Find answers to common questions about Purple</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {[
                    {
                      question: "What is Purple?",
                      answer: "Purple is a comprehensive UI component library and dashboard solution that helps developers build beautiful, responsive web applications quickly and efficiently."
                    },
                    {
                      question: "How do I get started with Purple?",
                      answer: "You can start by exploring our documentation, downloading our starter templates, or installing our components via npm or yarn."
                    },
                    {
                      question: "Is Purple free to use?",
                      answer: "We offer both free and premium versions. The free version includes essential components and features, while the premium version provides additional advanced components and priority support."
                    },
                    {
                      question: "Can I customize Purple components?",
                      answer: "Yes, all our components are fully customizable. You can modify colors, sizes, and behaviors to match your brand and design requirements."
                    },
                    {
                      question: "Do you offer support?",
                      answer: "Yes, we provide documentation, tutorials, and community forums for all users. Premium users also get access to dedicated support channels and faster response times."
                    }
                  ].map((item, i) => (
                    <div key={i} className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">{item.question}</h3>
                      <p className="text-muted-foreground">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="contact" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Get in touch with our team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">General Inquiries</h3>
                      <p className="text-muted-foreground">info@purple-ui.com</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Support</h3>
                      <p className="text-muted-foreground">support@purple-ui.com</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Sales</h3>
                      <p className="text-muted-foreground">sales@purple-ui.com</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Address</h3>
                      <p className="text-muted-foreground">123 Purple Street, Tech City, TC 12345</p>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg flex flex-col gap-4">
                    <h3 className="font-semibold">Send us a message</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm">Name</label>
                        <input type="text" className="border rounded-md p-2" placeholder="Your name" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm">Email</label>
                        <input type="email" className="border rounded-md p-2" placeholder="your@email.com" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm">Message</label>
                        <textarea className="border rounded-md p-2 min-h-[100px]" placeholder="Your message"></textarea>
                      </div>
                      <Button className="bg-purple-primary hover:bg-purple-primary/90">Send Message</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GeneralPages;
