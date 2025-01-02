<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Laravel\Sanctum\HasApiTokens;

class AuthController extends Controller
{
    public function register(Request $request)
    {

        // Validate and create user
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed',
            'role' => 'required|string|in:admin,approver,user',
        ]);

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'role' => $data['role'],
        ]);

        // Return an Inertia response instead of plain JSON
        return Inertia::render('Login', [
            'message' => 'User successfully registered',
            'user' => $user,
        ]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
    
        if (Auth::attempt($request->only('email', 'password'))) {
            $user = $request->user();
            $tokenName = $request->input('token_name', 'default_token_name'); // Use a default name if none is provided
    
            $token = $user->createToken($tokenName, ['*']);
    
            return Inertia::render('Home', [
                'user' => $user,
                'token' => $token->plainTextToken,
                'remember' => true,
            ]);
        }
    
        return back()->withErrors(['email' => 'The provided credentials do not match our records.']);
    }



    public function logout(Request $request)
    {
        // Delete current access token
        $request->user()->currentAccessToken()->delete();

        // Return a redirect or message indicating successful logout
        return Inertia::render('Login', [
            'message' => 'You have successfully logged out.',
        ]);
    }
}
