<!DOCTYPE html>
<html class="light">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Syafiq Afifuddin</title>
    <link rel="icon" href="{{ asset('assets/icon.png') }}" />

    @vite('resources/css/app.css')
</head>

<body class="dark:bg-[#111] transition-all duration-300">
    <div id="app"></div>

    @vite('resources/js/app.js')
</body>

<script>
    window._asset = '{{ asset('') }}';
</script>

</html>
