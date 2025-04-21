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
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      });
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  return (
    <div className="min-h-screen"
         style={{
           backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/fir-studio-app.appspot.com/o/2560x1440-344415-aesthetic-wallpapers.jpg?alt=media&token=ef98498a-55a3-4829-b06b-92f9f200b95f')`,
           opacity: 0.9,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
         }}>
      <div className="flex flex-col items-center justify-center py-24">
        <div className=" p-8 rounded-lg  w-full max-w-md"
             style={{
               backgroundColor: 'rgba(255, 165, 0, 0.6)', // Orange with 60% opacity
             }}>
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Join Beyond Books Library
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </Label>
              <Input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <Label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number
              </Label>
              <Input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <Label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                Address
              </Label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your address"
                required
              />
            </div>
            <div>
              <Label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                required
              />
            </div>
            <Button
              type="submit"
              className="bg-primary hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </Button>
          </form>
          <Button
            onClick={() => router.push('/')}
            className="mt-6 bg-primary hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Home
          </Button>
        </div>
      </div>
    </div>
  );
}
