<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Termwind\Components\Dd;

use function Laravel\Prompts\error;

class PinsController extends Controller
{

    public function index()
    {
        $pins = Pin::all();

        return response()->json($pins);
    }

   public function store(Request $request)
{
    Log::info('Store method called', $request->all());

    // Validate the request data
    $validatedData = $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'nullable|string',
        'longitude' => 'required|numeric',
        'latitude' => 'required|numeric',
        'active' => 'required|boolean',
    ]);

    $validatedData['slug'] = \Str::slug($validatedData['title'], '-');

    try {
        $pin = Pin::create($validatedData);
        return response()->json($pin, 201);
    } catch (\Exception $e) {
        Log::error('Error creating pin: ' . $e->getMessage());
        return response()->json(['error' => 'Error creating pin'], 500);
    }
}

    

}
