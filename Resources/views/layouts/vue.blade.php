@php
$config = [
    'appName' => config('app.name'),
    // 'locale' => $locale = app()->getLocale(),
    // 'locales' => config('app.locales'),
    // 'githubAuth' => config('services.github.client_id'),
];

$polyfills = [
    'Promise',
    'Object.assign',
    'Object.values',
    'Array.prototype.find',
    'Array.prototype.findIndex',
    'Array.prototype.includes',
    'String.prototype.includes',
    'String.prototype.startsWith',
    'String.prototype.endsWith',
];
@endphp
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <title>{{ config('app.name') }}</title>
  <link rel="shortcut icon" type="image/x-icon" href="/storage/images/icon-1024.png">
  <link rel="stylesheet" href="{{ mix('modules/core/app.css') }}">
</head>
<body class='white-content'>

  <div id="app"></div>

  {{-- Global configuration object --}}
  <script>window.config = @json($config);</script>

  {{-- Polyfill JS features via polyfill.io --}}
  <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features={{ implode(',', $polyfills) }}"></script>

  {{-- Load the application scripts --}}
  @if (app()->isLocal())
    <script src="{{ mix('modules/core/app.js') }}"></script>
  @else
    <script src="{{ mix('modules/core/manifest.js') }}"></script>
    <script src="{{ mix('modules/core/vendor.js') }}"></script>
    <script src="{{ mix('modules/core/app.js') }}"></script>
  @endif
</body>
</html>
