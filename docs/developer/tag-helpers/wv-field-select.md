<!--{"sort_order":10, "name": "wv-field-select", "label": "wv-field-select"}-->
# wv-field-select

## Purpose

`<wv-field-select/>`. Works quite similar as the `<wv-field-radio-list/>` tag helper, but uses radio list instead of a dropdown. Provides the ability to render the select / dropdown field type of an Erp Entity. 


## Properties
**Important**: All `<wv-field-*>` helpers inherit a ["base tag helper" properties](docs/developer/tag-helpers/wv-field-base). In the following list are presented only the properties that this tag helper adds or alters. Not all base tag helper properties can be implemented by this tag helper too.

+-------------------------------+-----------------------------------+
| name                          | description                       |
+===============================+===================================+
| `options`                     | *object type*: `List<SelectOption>`                         
|                               |         
|                               | *default value*: `new List<SelectOption>()`
|                               |
|                               | *is required*: `FALSE`                      
|                               |                                   
|                               | The text presented as checkbox label in forms and also as checkbox value in Simple mode, when checked.
+-------------------------------+-----------------------------------+
| `value`                       | *object type*: `dynamic`                         
|                               |         
|                               | *default value*: `null`
|                               |
|                               | *is required*: `FALSE`                      
|                               |                                   
|                               | Expects the value to be parsed as `List<string>`
+-------------------------------+-----------------------------------+

## Example

```html
<wv-field-select value="@value" options="@options"></wv-field-select>
```

