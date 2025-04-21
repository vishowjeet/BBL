
import { BookOpen, Calendar, CheckCircle, Contact2, Lightbulb, Newspaper } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-800">Beyond Books Library</h1>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <section id="about" className="py-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About the Business</h2>
          <p className="text-gray-700 mb-4">
            Welcome to Beyond Books Library, your hub for affordable education and growth. We are committed to providing a nurturing environment where like-minded individuals can connect and expand their knowledge.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
          <p className="text-gray-700">
            To provide a one-stop solution for all your learning needs, offering a wide range of resources and services at an affordable price.
          </p>
        </section>

        <section id="services" className="py-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard title="24/7 Availability" icon={<Calendar />} description="We are open around the clock to accommodate your schedule." />
            <ServiceCard title="AC and Well-Ventilated" icon={<Lightbulb />} description="Enjoy a comfortable learning environment with air conditioning and ample ventilation." />
            <ServiceCard title="Newspapers (Hindi & English)" icon={<Newspaper />} description="Stay updated with daily newspapers in both Hindi and English." />
            <ServiceCard title="Magazines & Updated News" icon={<BookOpen />} description="Access a variety of magazines and updated news on our website." />
            <ServiceCard title="Coaching & Counselling" icon={<CheckCircle />} description="Receive expert coaching and counselling to guide you on your educational journey." />
            <ServiceCard title="Private Job Portal" icon={<Contact2 />} description="Find exclusive job opportunities through our private job portal." />
            <ServiceCard title="Computer Accessibility" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor-check"><rect width="22" height="16" x="1" y="3" rx="2"/><line x1="5" x2="7" y1="21" y2="21"/><path d="M10 18v3"/><path d="M14 18v3"/><path d="m22 23-3-3 1.4-1.4 3-3"/></svg>} description="Access computers for mock tests and online classes." />
          </div>
        </section>

        <section id="contact" className="py-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            <strong>Proprietor:</strong> Prince Kumar Yadav
            <br />
            <strong>Address:</strong> Egachcha Chowk, Loha, Madhubani, 847213, Bihar
            <br />
            <strong>Phone:</strong> +919661677051
          </p>
        </section>
      </main>

      <footer className="bg-gray-200 py-4 text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Beyond Books Library. All rights reserved.
        </p>
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
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
      <div className="text-4xl text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  );
}
