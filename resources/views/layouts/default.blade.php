<!doctype html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    @stack('styles')
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">

    @stack('scripts')
    <script src="{{ mix('js/app.js') }}" defer></script>

    <title> @yield('title') - JavaScript</title>
    <link rel="icon" type="image/png" href="https://cdn-icons-png.flaticon.com/512/5968/5968292.png">
</head>
<body>

@section('header')
@show

@yield('content')

@section('footer')
@show
</body>
</html>
