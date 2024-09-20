<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RolePermissionMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     * @param $type is user_type
     */
    public function handle(Request $request, Closure $next, $type = null): Response
    {
        if ($type == 'admin' && auth()->user()->role_id == 1) {
            return $next($request);
        }
        return route('login');
    }
}
