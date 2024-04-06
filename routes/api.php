<?php

use App\Http\Controllers\Api\PinsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/pins', [PinsController::class, 'index'])->name('pins');
Route::get('/hazard-layer', [PinsController::class, 'getHazards'])->name('hazards');
Route::get('/interp-layer', [PinsController::class, 'getInterp'])->name('interp');
Route::get('/restaurant-layer', [PinsController::class, 'getRestaurants'])->name('restaurants');
Route::get('/service-provider-layer', [PinsController::class, 'getServiceProviders'])->name('serviceProviders');



