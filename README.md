jquery.inject
=============

Dynamically and asynchronously inject external javascripts (in order) and be notified when they complete via a jQuery promise.

Useful if you're lazily loading javascripts based on user interactions.

### Example Usage

*The supplied url must be fully qualified, hostname and all.*

Single file:

```javascript
    $.inject('http://www.yoursite.com/js/widgetBase.js')
        .done(function () {
            // Yay
        });
```


Multiple Files:

```javascript
    $.inject([
        'http://www.yoursite.com/js/widgetBase.js',
        'http://www.yoursite.com/js/weatherWidget.js'
    ])
    .done(function () {
        // Show that widget!
    });
```

Note: uses ajax's `cache: true` to avoid the retarded, default cache-bust.