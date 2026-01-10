# x-elm Introduction

Defining a custom element with x-elm:


```html
<mood-stone>
    <template shadowrootmode=open itemscope>
        <div>
            <data 🔭='ON{
                "true": "🤗",
                "false": "😩"
            }' itemprop=isHappy value=false>😩</data>
        </div>
        <x-elm 🕵🏻></x-elm>
    </template>
</mood-stone>

...
<mood-stone is-happy></mood-stone>
```

Done!

The detective emoji (🕵🏻) attribute means "infer props based on the itemprop attributes outside any nested itemscope attributes.  Because the isHappy itemprop is in a data element with value=false, the property name is inferred to be boolean.  The attribute corresponding to the property name is inferred by applying a snake-case based on capital letters.

The telescope emoji 🔭 is discussed in detail [here](https://github.com/bahrus/be-observing).

*x-elm* also supports the ability to specify properties with less guesswork, [and a whole lot more]().

