<!DOCTYPE html>
<html lang="{{ $app->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

    <title>@yield('metaTitle')</title>
    <meta name="description" content="@yield('metaDescription')">
    <meta name="robots" content="@yield('metaRobots')">

    <link rel="stylesheet" href="{{ asset('assets/css/app.css') }}">
</head>
<body>

@include('includes._header')
@yield('content')
@include('includes._footer')


{{--<script src="{{ asset('assets/js/jquery.js') }}"></script>--}}
{{--<script src="{{ asset('assets/js/slick.min.js') }}"></script>--}}
<script src="{{ asset('assets/js/app.js') }}"></script>
{{--<script src="{{ asset('assets/js/index.js') }}"></script>--}}
@include('includes._footer-scripts')
</body>
</html>
