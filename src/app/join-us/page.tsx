'use client';

import {useRouter} from 'next/navigation';
import {useState} from 'react';
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {addUser} from "@/services/firebase";

export default function JoinUs() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    address: '',
    password: '',
    confirmPassword: '', // Added confirmPassword field
    email: '', // Added email field
  });
  const [error, setError] = useState(''); // State to hold error messages

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Add user data to Firestore
      await addUser(formData);
      console.log('User registered successfully!');
      // Optionally, reset the form after successful submission
      setFormData({
        fullName: '',
        phoneNumber: '',
        address: '',
        password: '',
        confirmPassword: '',
        email: '', // Also reset the email field
      });
    } catch (err: any) {
      if (err.message === 'Email already in use') {
        setError('An account with this email already exists. Please sign in.');
      } else {
        console.error('Error registering user:', err);
        setError('An error occurred during registration. Please try again.');
      }
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/fir-studio-app.appspot.com/o/2560x1440-344415-aesthetic-wallpapers.jpg?alt=media&token=ef98498a-55a3-4829-b06b-92f9f200b95f')`,
        opacity: 0.9,
        backgroundColor: '#fff',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col items-center justify-center py-24">
        <div
          className="p-8 rounded-lg w-full max-w-md"
          style={{
            backgroundColor: '#FF8000',
          }}
        >
          <h2 className="text-2xl font-semibold text-black text-center mb-6">
            Join Beyond Books Library
          </h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>} {/* Display error message */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label htmlFor="fullName" className="block text-black text-sm font-bold mb-2">
                Full Name:
              </Label>
              <Input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your full name"
                style={{ backgroundColor: '#fff' }}
                required
              />
            </div>
            {/* Email Field */}
            <div>
              <Label htmlFor="email" className="block text-black text-sm font-bold mb-2">
                Email Address:
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email address"
                style={{ backgroundColor: '#fff' }}
                required
              />
            </div>
            <div>
              <Label htmlFor="phoneNumber" className="block text-black text-sm font-bold mb-2">
                Phone Number:
              </Label>
              <Input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your phone number"
                style={{ backgroundColor: '#fff' }}
                required
              />
            </div>
            <div>
              <Label htmlFor="address" className="block text-black text-sm font-bold mb-2">
                Address:
              </Label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your address"
                style={{ backgroundColor: '#fff' }}
                required
              />
            </div>
            <div>
              <Label htmlFor="password" className="block text-black text-sm font-bold mb-2">
                Password:
              </Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                style={{ backgroundColor: '#fff' }}
                required
              />
            </div>
            <div>
              <Label htmlFor="confirmPassword" className="block text-black text-sm font-bold mb-2">
                Confirm Password:
              </Label>
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Confirm your password"
                style={{ backgroundColor: '#fff' }}
                required
              />
            </div>
            <Button
              type="submit"
              className="bg-primary text-white hover:bg-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </Button>
          </form>
          <div className="flex justify-between mt-6">
            <Button
            onClick={() => router.push('/')}
              className="bg-black text-white hover:bg-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Home
            </Button>
            <Button
            
            
              onClick={() => router.push('/sign-in')}
              className=" bg-black hover:bg-[#FFFFFF] hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
