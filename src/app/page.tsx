
import { BookOpen, Calendar, CheckCircle, Contact2, Lightbulb, Newspaper, Computer } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-24 overflow-hidden" // Added overflow-hidden
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover object-center w-full h-full opacity-30" // Reduced opacity
        >
          <source src="https://ak.picdn.net/shutterstock/videos/1073551597/preview/stock-footage-group-of-indian-students-studying-together-in-university-classroom-group-mates-reading-books-and.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container relative z-10 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">
            Beyond Books Library
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            Your hub for affordable education and growth.
          </p>
          <a
            href="#services"
            className="rounded-full bg-accent px-8 py-3 font-semibold text-gray-800 shadow-md transition-colors hover:bg-accent-foreground hover:text-white"
          >
            Explore Our Services
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-4xl font-semibold text-center text-gray-800">
            About the Business
          </h2>
          <p className="mb-8 text-gray-700 leading-relaxed">
            Welcome to Beyond Books Library, your dedicated space for affordable
            education and personal growth. We believe in providing a nurturing
            environment where individuals can connect, learn, and expand their
            horizons. Our library is more than just books; it's a community hub.
          </p>
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">
            Our Mission
          </h3>
          <p className="text-gray-700 leading-relaxed">
            To provide a one-stop solution for all your learning needs, offering
            a wide range of resources and services at an affordable price. We
            strive to empower our community through knowledge and opportunity.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-4xl font-semibold text-center text-gray-800">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="24/7 Availability"
              icon={<Calendar className="h-8 w-8 text-blue-500" />}
              description="We are open around the clock to accommodate your learning schedule."
            />
            <ServiceCard
              title="AC and Well-Ventilated"
              icon={<Lightbulb className="h-8 w-8 text-blue-500" />}
              description="Enjoy a comfortable learning environment with air conditioning and ample ventilation."
            />
            <ServiceCard
              title="Newspapers (Hindi & English)"
              icon={<Newspaper className="h-8 w-8 text-blue-500" />}
              description="Stay updated with daily newspapers in both Hindi and English."
            />
            <ServiceCard
              title="Magazines & Updated News"
              icon={<BookOpen className="h-8 w-8 text-blue-500" />}
              description="Access a variety of magazines and updated news on our website."
            />
            <ServiceCard
              title="Coaching & Counselling"
              icon={<CheckCircle className="h-8 w-8 text-blue-500" />}
              description="Receive expert coaching and counselling to guide you on your educational journey."
            />
            <ServiceCard
              title="Private Job Portal"
              icon={<Contact2 className="h-8 w-8 text-blue-500" />}
              description="Find exclusive job opportunities through our private job portal."
            />
            <ServiceCard
              title="Computer Accessibility"
              icon={<Computer className="h-8 w-8 text-blue-500" />}
              description="Access computers for mock tests and online classes."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-4xl font-semibold text-center text-gray-800">
            Contact Us
          </h2>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8">
            <p className="mb-4 text-gray-700">
              <strong>Proprietor:</strong> Prince Kumar Yadav
              <br />
              <strong>Address:</strong> Egachcha Chowk, Loha, Madhubani, 847213,
              Bihar
              <br />
              <strong>Phone:</strong> +919661677051
            </p>
            <a href="https://wa.me/7667024975?text=urlencodedtext" target="_blank" rel="noopener noreferrer">
            <button className="rounded-full bg-primary px-6 py-2 font-semibold text-white shadow-md transition-colors hover:bg-blue-700">
              Contact Now
            </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Beyond Books Library. All rights
            reserved.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Empowering Minds, Enriching Lives.
          </p>
        </div>
      </footer>
    </div>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}
