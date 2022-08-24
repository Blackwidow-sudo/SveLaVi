<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        @vite(['resources/ts/app.ts', 'resources/sass/app.scss'])

        <title>SveLaVi</title>
    </head>
    <body class="antialiased">
        <div id="app"></div>
    </body>
</html>
