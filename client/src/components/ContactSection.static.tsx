import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { insertContactMessageSchema } from "@shared/schema";
import { submitContactForm } from "@/lib/staticApi";

const contactFormSchema = insertContactMessageSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await submitContactForm(data);
      
      toast({
        title: "Message sent",
        description: "Thank you for your message! I'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 relative overflow-hidden bg-gradient-to-b from-blue-900/40 to-blue-950/70">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle,_transparent_20%,_#020817_70%)]"></div>
        <div className="bubbles-sm"></div>
        <div className="bubbles-md"></div>
        <div className="bubbles-lg"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200">
          Get In Touch
        </h2>
        <div className="max-w-2xl mx-auto bg-blue-950/40 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-blue-100">Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your name" 
                        {...field} 
                        className="bg-blue-900/30 border-blue-500/30 text-blue-100 placeholder:text-blue-300/50"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-blue-100">Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your email address" 
                        type="email" 
                        {...field} 
                        className="bg-blue-900/30 border-blue-500/30 text-blue-100 placeholder:text-blue-300/50"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-blue-100">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="How can I help you?" 
                        className="bg-blue-900/30 border-blue-500/30 text-blue-100 placeholder:text-blue-300/50 min-h-[120px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription className="text-blue-200/70">
                      Your message will be sent directly to me.
                    </FormDescription>
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-medium py-2 shadow-[0_0_15px_rgba(56,189,248,0.3)]"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}