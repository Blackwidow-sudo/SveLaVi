<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        @vite('resources/ts/app.ts')

        <title>SveLaVi</title>
    </head>
    <body class="antialiased">
        <div id="app"></div>
    </body>
</html>
