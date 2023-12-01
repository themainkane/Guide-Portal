<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pins;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Termwind\Components\Dd;

use function Laravel\Prompts\error;

class PinsController extends Controller
{

    public function index()
    {
        $pins = Pins::all();

        return response()->json($pins);
    }



}