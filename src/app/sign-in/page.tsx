'use client';

import {useRouter} from 'next/navigation';
import {useEffect} from 'react';
import {useState} from 'react';
import { Input } from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Button} from '@/components/ui/button';
import {signInWithEmailPassword} from '@/services/firebase';

export default function SignIn() {

  useEffect(() => {
    document.title = 'Sign In';
  }, []);


  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailPassword(formData.email,formData.password);
      console.log('User signed in successfully!');
      router.push('/');
    } catch (err: any) {
      if (err.message === 'Firebase: Error (auth/invalid-login-credentials).') {
        setError('Incorrect email or password');
      } else {
        console.error('Error signing in user:', err);
        setError('An error occurred during sign in. Please try again.');
      }
    }
  };

  return(
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
          <div className="absolute top-4 left-4">
            <Button
              onClick={() => router.push('/')}
              className=" bg-black hover:bg-[#FF8000] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Home
            </Button>
          </div>
          <h2 className="text-2xl font-semibold text-black text-center mb-6">
            Sign In
          </h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                style={{backgroundColor: '#fff'}}
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
                style={{backgroundColor: '#fff'}}
                required
              />
            </div>
            <Button
              type="submit"
              className="bg-primary hover:bg-[#FFFFFF] hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
  }