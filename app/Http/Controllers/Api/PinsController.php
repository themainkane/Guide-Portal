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
        $pins = Pin::with('severity')->get();

        return $pins;

    }
    public function getHazards()
    {
        $hazards = Pin::with('severity')->where('category_id', 1)->get();

        return $hazards;
    }

    public function getInterp()
    {
        $interp = Pin::where('category_id', 2)->get();

        return $interp;
    }

    public function getRestaurants()
    {
        $restaurant = Pin::where('category_id', 3)->get();

        return $restaurant;
    }

    public function getServiceProviders()
    {
        $serviceProviders = Pin::where('category_id', 4)->get();

        return $serviceProviders;
    }





}