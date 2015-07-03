Package.describe({
    name: 'gliese:materialize-xl-screen',
    version: '0.2.0',
    summary: 'Adds an extra large screen size (>1366px) to Materialize',
    git: 'https://github.com/gliese-technology/materialize-xl-screen.git'
});

Package.onUse(function (api) {
    api.addFiles("xl.css", "client");
});