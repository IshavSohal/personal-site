import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Github, Linkedin, Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/sonner";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(1, "Message is required"),
});

type FormValues = z.infer<typeof formSchema>;

const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID;
const FORMSPREE_ENDPOINT = FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${FORMSPREE_FORM_ID}`
  : null;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    if (!FORMSPREE_ENDPOINT) {
      toast.error("Contact form is not configured. Please set VITE_FORMSPREE_FORM_ID in .env");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          _replyto: values.email,
          message: values.message,
        }),
      });
      if (!res.ok) throw new Error("Failed to send");
      toast.success("Message sent! I'll get back to you soon.");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-container text-center">
        <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 gradient-accent-text">
          Let's Connect
        </h2>
        <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-10">
          I'm always open to chatting about new opportunities, interesting projects, or just
          tech in general. Drop me a line!
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-w-md mx-auto space-y-6 text-left mb-12"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} disabled={isSubmitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message..."
                      className="min-h-[120px] resize-y"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full gradient-bg text-primary-foreground rounded-full h-12 text-base font-semibold hover:opacity-90 transition-opacity"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send message"
              )}
            </Button>
          </form>
        </Form>

        <div className="flex items-center justify-center gap-4">
          <Button asChild className="gradient-bg text-primary-foreground rounded-full px-8 h-12 text-base font-semibold hover:opacity-90 transition-opacity">
            <a href="mailto:ishavsohal1@gmail.com">
              <Mail className="h-5 w-5 mr-2" />
              Email Me
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-8 h-12 text-base font-semibold">
            <a href="https://linkedin.com/in/ishavsohal" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-8 h-12 text-base font-semibold">
            <a href="https://github.com/ishavsohal" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </a>
          </Button>
        </div>

        <p className="mt-16 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ishav Sohal. Built with ❤️
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
