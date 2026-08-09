import { useEffect, useState } from 'react';
import GuestLayout from '../../layouts/GuestLayout';
import Checkbox from '../../components/ui/Checkbox';
import InputError from '../../components/ui/InputError';
import InputLabel from '../../components/ui/InputLabel';
import PrimaryButton from '../../components/ui/PrimaryButton';
import TextInput from '../../components/ui/TextInput';
import { Link } from 'react-router-dom';
import LoginImage from '../../assets/images/login.jpg'
import { Eye, EyeOff } from 'lucide-react';
import useForm from '../../hooks/useForm';

export default function Login({
    status,
    canResetPassword,
}) {
    const { data, setData, errors, setErrors,processing, setProcessing,reset,
      } = useForm({
        email: "",
        password: "",
        remember: false,
    });
    const [showPassword , setShowPassword] = useState(false)
    useEffect(() => {
        return () => reset('password');
    }, []);



    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
          <GuestLayout>
            <div className="flex overflow-hidden rounded-2xl bg-white shadow-2xl">

                <img 
                    src={LoginImage}
                    alt="Login"
                    className="hidden lg:flex lg:w-1/2 items-center justify-cente rounded-2xl"
                />

                <div className="w-full lg:w-1/2 p-8">
                    <h2 className="text-3xl font-bold text-center">
                        Login
                    </h2>

                    <p className="mt-2 text-center text-gray-500">
                        Log in to your account to continue
                    </p>

                    <form onSubmit={submit} className="mt-8 space-y-4">
                        <div>
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 w-full px-4 py-3"
                                autoComplete="username"
                                isFocused
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="Password" />
                            <div className="relative">
                              <TextInput
                                  id="password"
                                  type={showPassword ? 'text' : 'password'}
                                  name="password"
                                  value={data.password}
                                  className="mt-1 w-full px-4 py-3 pr-10"
                                  autoComplete="current-password"
                                  onChange={(e) =>
                                      setData('password', e.target.value)
                                  }
                              />
                              <button
                                  type="button"
                                  onClick={() => setShowPassword(!showPassword)}
                                  className='absolute right-3 top-1/2 -translate-y-1/2 text-orange-500'
                              >
                                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                              </button>
                            </div>
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData('remember', e.target.checked)
                                }
                            />

                            <span className="ms-2 text-sm text-orange-600">
                                Remember me
                            </span>
                        </label>

                        <div className="flex flex-col">
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-sm text-blue-600 underline hover:text-blue-800"
                                >
                                    Forgot your password?
                                </Link>
                            )}

                            <button
                                disabled={processing}
                                className="mx-auto mt-6 flex w-1/2 items-center justify-center rounded-full border-2 border-orange-500 bg-orange-500 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-orange-500"
                            >
                                Log in
                            </button>
                        </div>

                        <p className="mt-6 text-center text-sm">
                            You do not have an account ?{' '}
                            <Link
                                to="/register"
                                className="font-semibold text-orange-500 hover:underline"
                            >
                                Register
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
          </GuestLayout>
    );
}