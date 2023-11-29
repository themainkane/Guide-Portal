<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Guide Portal</title>
    <link
    href="https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css"
    rel="stylesheet"
/>
</head>
<body>
    <div id="root"></div>
    @viteReactRefresh
    @vite('resources/js/GuidePortal.jsx')
</body>
</html>