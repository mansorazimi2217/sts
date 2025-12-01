import React from "react";
import {
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import logo from "../assets/logo-01.png";
const data = {
  facebookLink: "https://facebook.com/mvpblocks",
  instaLink: "https://instagram.com/mvpblocks",
  twitterLink: "https://twitter.com/mvpblocks",
  githubLink: "https://github.com/mvpblocks",
  dribbbleLink: "https://dribbble.com/mvpblocks",
  services: {
    webdev: "/web-development",
    webdesign: "/web-design",
    marketing: "/marketing",
    googleads: "/google-ads",
  },
  about: {
    history: "/company-history",
    team: "/meet-the-team",
    handbook: "/employee-handbook",
    careers: "/careers",
  },
  help: {
    faqs: "/faqs",
    support: "/support",
    livechat: "/live-chat",
  },
  contact: {
    email: "hello@mvpblocks.com",
    phone: "+91 8637373116",
    address: "Kolkata, West Bengal, India",
  },
  company: {
    name: "Smart Technology",
    description:
      "Building beautiful and functional web experiences with modern technologies. We help startups and businesses create their digital presence.",
  },
};

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: data.facebookLink },
  { icon: Instagram, label: "Instagram", href: data.instaLink },
  { icon: Twitter, label: "Twitter", href: data.twitterLink },
  { icon: Github, label: "GitHub", href: data.githubLink },
  { icon: Dribbble, label: "Dribbble", href: data.dribbbleLink },
];

const aboutLinks = [
  { text: "Company History", href: data.about.history },
  { text: "Meet the Team", href: data.about.team },
  { text: "Employee Handbook", href: data.about.handbook },
  { text: "Careers", href: data.about.careers },
];

const serviceLinks = [
  { text: "Web Development", href: data.services.webdev },
  { text: "Web Design", href: data.services.webdesign },
  { text: "Marketing", href: data.services.marketing },
  { text: "Google Ads", href: data.services.googleads },
];

const helpfulLinks = [
  { text: "FAQs", href: data.help.faqs },
  { text: "Support", href: data.help.support },
  { text: "Live Chat", href: data.help.livechat, hasIndicator: true },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer4Col() {
  return (
    <footer className=" w-full place-self-end  bg-gray-950 border-t border-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center gap-2 text-blue-400 sm:justify-start">
              <img src={logo} alt="logo" className="h-8 w-8 rounded-full" />
              <span className="text-2xl font-semibold">
                {data.company.name}
              </span>
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-400 transition hover:text-blue-400 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-100">About Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-gray-500 transition hover:text-blue-400 hover:translate-x-1 block"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-100">Our Services</p>
              <ul className="mt-8 space-y-4 text-sm">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-gray-500 transition hover:text-blue-400 hover:translate-x-1 block"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-100">Helpful Links</p>
              <ul className="mt-8 space-y-4 text-sm">
                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className={`${
                        hasIndicator
                          ? "group flex justify-center gap-1.5 sm:justify-start"
                          : "text-gray-500 transition hover:text-blue-400 hover:translate-x-1 block"
                      }`}
                    >
                      <span className="text-gray-500 transition hover:text-blue-400">
                        {text}
                      </span>
                      {hasIndicator && (
                        <span className="relative flex size-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                          <span className="relative inline-flex size-2 rounded-full bg-blue-500" />
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-100">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start text-gray-500 hover:text-blue-400 group"
                      href={
                        Icon === Mail
                          ? `mailto:${text}`
                          : Icon === Phone
                          ? `tel:${text}`
                          : "#"
                      }
                    >
                      <Icon className="size-5 shrink-0 text-gray-400 group-hover:text-blue-400 transition-colors" />
                      {isAddress ? (
                        <address className="-mt-0.5 flex-1 not-italic text-gray-500 transition group-hover:text-blue-400">
                          {text}
                        </address>
                      ) : (
                        <span className="flex-1 text-gray-500 transition group-hover:text-blue-400">
                          {text}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="mt-4 text-sm text-gray-500 transition sm:order-first sm:mt-0">
              &copy; 2025 {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
