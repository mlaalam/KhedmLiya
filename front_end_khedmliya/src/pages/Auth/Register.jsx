import { useEffect, useState } from 'react';
import Checkbox from '../../components/ui/Checkbox';
import InputError from '../../components/ui/InputError';
import InputLabel from '../../components/ui/InputLabel';
import PrimaryButton from '../../components/ui/PrimaryButton';
import TextInput from '../../components/ui/TextInput';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import RegisterImage from '../../assets/images/register.jpg'
import GuestLayout from '../../layouts/GuestLayout';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        role: 'client',
        phone: '',
        password_confirmation: '',
    });
    const [showPassword , setShowPassword] = useState(false)
    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
          <GuestLayout>
          
          
          <div className=" w-full min-h-screen h-[50%] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="bg-white w-full max-w-7xl flex flex-col lg:flex-row rounded-2xl shadow-lg overflow-hidden">
              
              <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10">
              < h2 className="text-3xl font-bold text-center">
                  Register
              </h2>
                <h2 className="text-2xl font-bold text-center m-5">Create account in <span className='text-orange-500 underline font-semibold'>KhedmaLike</span></h2>
            <form onSubmit={submit}>
                <div className="flex w-full rounded-3xl border-2 border-orange-400 p-1 mb-5">
                  <button
                    type="button"
                    onClick={() => setData('role', 'client')}
                    className={`w-1/2 py-2 rounded-full font-semibold transition
                    ${data.role === "client" ? "bg-orange-500 text-white" : "text-gray-700"}`}
                    
                  >
                    Client
                  </button>

                  <button
                    type="button"
                    onClick={()=>setData('role' , 'artisan')}
                    className={`w-1/2 py-2 rounded-full font-semibold transition
                    ${data.role === "artisan" ? "bg-orange-500 text-white" : "text-gray-700"}`}
                    
                  >
                    Artisan
                  </button>
                  <input type="hidden" name="role" value={data.role} />
                </div>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 px-4 py-2 w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 px-4 py-2 w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="phone" value="Phone" />
                    <div className="mt-1 flex">
                      <span className="flex items-center px-3 bg-gray-100 text-gray-600 border-2 border-orange-500 focus:border-orange-500 focus:ring-orange-500 rounded-l-md shadow-sm">
                          +212
                      </span>

                      <input
                          id="phone"
                          name="phone"
                          value={data.phone}
                          className="w-full px-2 py-2 border-orange-500 focus:border-orange-500 focus:ring-orange-500 shadow-sm border-2 rounded-r-md focus:ring-0 focus:outline-none"
                          autoComplete="phone"
                          placeholder=''
                          isFocused={true}
                          onChange={(e) => setData('phone', e.target.value)}
                          required
                      />
                    </div>

                    <InputError message={errors.phone} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={data.password}
                        className="mt-1 px-4 py-2 w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type={showPassword ? "text" : "password"}
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 px-4 py-2 w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>
                <label className="flex items-center">
                  <Checkbox
                      name="show password"
                    onClick={()=> setShowPassword(!showPassword)}
                  />

                  <span className="m-2 text-sm text-orange-600">
                      Show Password
                  </span>
              </label>
                <div className="flex flex-col">
                    <button className="mx-auto mt-6 flex w-full sm:w-2/3 lg:w-1/2 items-center justify-center rounded-full border-2 border-orange-500 bg-orange-500 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-orange-500" disabled={processing}>
                        Register
                    </button>
                </div>
                
            </form>
            <p className="text-center text-sm mt-4">
                Already registered ?{" "}
                <a href="/login" className="text-orange-500 font-semibold hover:underline">
                  Login
                </a>
              </p>
            </div>


            <div className="hidden lg:flex lg:w-1/2">
              <img
                src={RegisterImage}
                alt="image register"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
        </GuestLayout>
    );
}
