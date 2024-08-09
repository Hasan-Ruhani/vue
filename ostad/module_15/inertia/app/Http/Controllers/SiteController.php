<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SiteController extends Controller
{
    function Index(){
        return Inertia::render('Index');
    }

    function Page1(){
        $share_data = [
            'name' => 'Hasan',
            'age' => 22,
            'city' => 'Khulna'
        ];
        return Inertia::render('Page1', ['data' => $share_data]);
    }

    function Page2(){
        return Inertia::render('Page2');
    }

    function Page3(){
        return Inertia::render('Page3');
    }

    function Page4(){
        return Inertia::render('Page4');
    }

    function Page5(){
        return Inertia::render('Page5');
    }
}
