<?php

namespace App\Http\Requests\Auth;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;
class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
      return [
        'name' => ['required', 'string', 'max:255'],
        'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
        'phone' => 'required|min:9|numeric',
        'role' => 'required|in:client,artisan',
        'password' => ['required', 'confirmed', Rules\Password::defaults()],
      ];    
      }

      public function messages(): array
      {
        return [
          // Name messages
          'name.required' => 'Please enter your name.',
          'name.string' => 'Name must be a valid text.',
          'name.max' => 'Name cannot exceed 255 characters.',

          // Email messages
          'email.required' => 'An email address is required.',
          'email.email' => 'Please enter a valid email address.',
          'email.lowercase' => 'Email must be in lowercase.',
          'email.unique' => 'This email address is already registered.',

          // Phone messages
          'phone.required' => 'Please enter your phone number.',
          'phone.numeric' => 'Phone number must contain numbers only.',
          'phone.min' => 'Phone number must be at least 9 digits long.',

          // Password messages
          'password.required' => 'Please provide a password.',
          'password.confirmed' => 'Password confirmation does not match.',
        ];
      }
}
