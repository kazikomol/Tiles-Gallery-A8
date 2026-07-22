import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Envelope } from "@gravity-ui/icons";

const Footer = () => {
  return (
    <footer className="relative mt-24">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* Subtle Gradient Glow */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

     
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="TILES gallery logo"
                width={60}
                height={32}
                className="dark:brightness-200"
              />
              <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
                Tiles-Gallery
              </h2>
            </div>

           
          </div>

          {/* Product */}
          <div className="flex gap-2  ">
            <FaFacebook ></FaFacebook>
           
           <Link href={'https://www.facebook.com'} className="text-sm"> Facebook</Link>
            
          </div>

          
          <div className="flex gap-2">
            <BsInstagram/>
           <Link href={'https://www.instagram.com/?hl=en'} className="text-sm">Instragram</Link>
            
          </div>

         
          <div className="flex gap-2">
            <BsTwitter/>
           <Link href={'https://x.com'} className="text-sm">Twitter</Link>

            

            
          </div>
          <div className="flex justify-center">
            <Modal>
      <Button variant="secondary">Contact us</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we'll get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text" variant="secondary">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="email" type="email" variant="secondary">
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>
                  <TextField className="w-full" name="phone" type="tel" variant="secondary">
                    <Label>Phone</Label>
                    <Input placeholder="Enter your phone number" />
                  </TextField>
                  <TextField className="w-full" name="company" variant="secondary">
                    <Label>Company</Label>
                    <Input placeholder="Enter your company name" />
                  </TextField>
                  <TextField className="w-full" name="message" variant="secondary">
                    <Label>Message</Label>
                    <Input placeholder="Enter your message" />
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Send Message</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal></div>
          
        </div>

       
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Tiles-Gallery. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-black dark:hover:text-white transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-black dark:hover:text-white transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;