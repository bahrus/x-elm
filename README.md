# x-elm

Defining a custom element with x-elm:


```html
<mood-stone>
    <template shadowrootmode=open itemscope>
        <div>
            <span 🔭 itemprop=isHappy></span>
        </div>
        <x-elm props='{"[]": ["itemprop"]}'></x-elm>
    </template>
</mood-stone>

...
<mood-stone>
```

Done!

Some of the syntax shown here is a bit cryptic, but this is opting for smaller syntax