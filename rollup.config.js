export default [
    {
        // Make everything global
        context: 'window',
        
        input: 'vendor/assets/javascripts/jsonform.entry.js',
        output: {
            strict: false,
            name: 'jsonform',
            file: 'dist/jsonform.bundle.js',
            format: 'iife',
        },
    }
];
