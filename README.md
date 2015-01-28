# The StyleGuider
The StyleGuider is a jQuery plugin for making the creation of style guides just a little bit easier. Although there are lots of great tools to help generate style guides through Sass and online, this plugin was designed to help ease some of the pain in creating static style guides for internal use.

With the StyleGuider, you create an HTML page with elements for your site's typography, color palette, buttons, etc. Simply include your site's main CSS file, along with the plugin's files and you'll have a nicely formatted style guide with easy to copy code. You can then share the guide with the dev team, or even link to a relevant section. The StyleGuider helps alleviate some of the maintainence issues that come with static style guides, since you call your own styles and only write the relevant code once. Plus, the theme is fully customizable, so you get brand-happy with the look of it.

**What It Does:**
- Creates code blocks for specified elements
- Generates a sidebar navigation based on header elements
- Display hex values for your color palette so they can be easily copied

**What It Doesn't Do:**
- Automatically create a style guide for you
- Minify your CSS or JS

## Basic Usage
First, download the repo and open up the demo files. These will serve as a great starting point. Since this is a jQuery plugin, you'll need to include the latest version of jQuery, along with the StyleGuider's CSS and JS files:

```html
<link rel="stylesheet" href="styleguider.min.css" media="screen">
<script src="jquery.styleGuider.min.js"></script>
```

Once you have everything you need setup, you can initialize the StyleGuider like so:
```html
<script>
    $('body').styleGuider();
</script>
```

### Optional Syntax Highlighting
Since the StyleGuider features code blocks, it's recommended to include a syntax highlighter such as [Prism](http://prismjs.com/). The demo is using Prism with the Okaidia theme. If not using a syntax highlighter, you will need to include your own styles for the `&lt;pre&gt;` and `&lt;code&gt;` tags.

## Plugin Options
There are several ways to customize the StyleGuider on itit:

| Option  | Default Value | Purpose |
| ------------- | ------------- | ------------- |
| codeWrapper  | '.code-wrapper'  | Defines the div for the plugin to target when creating the code blocks |
| generateNav  | true  | Boolean to generate and display a navigation on the left |
| appendNavTo | 'body' | The location for the generated nav to be prepended to |
| headingsForNav | 'section > h2' | Which heading tags to use for generating the nav |
| navTitle | 'Style Guide' | The title that appears at the top of the nav |
| generateColors | true | Boolean for generating text for the hex values used in the color palette |
| colorWrapper | '.color-palette' |  The div for the plugin to target when generating hex value text |

Options can be specified when ititializing the plugin:

```html
<script>
    $('body').styleGuider({
      appendNavTo : 'header',
      navTitle : 'Navigation'
    });
</script>
```

## Theme Customization
Although you are loading in your own CSS, you may want to include additional styling for the style guide. The StyleGuider comes with its own CSS files, as well as a Sass (.scss) file for making changes. 

```html
styleguider.scss
styleguider.css
```

It's recommended to make changes to the Sass file if possible, and use a PreProcessor to compile it to CSS.
There are several styles already included, as seen in the demo files. Depending on your own site's CSS, you may need to override some of your styles to adjust the appearance of the style guide. For example:

```scss
// Styles from your own CSS
h1 { font-size: 6em; text-align: center; }
.button { float: right; }

// Overrides you might include in styleguider.scss
h1 { font-size: 3em; text-align: left; }
.button { float: none; }
```

Feel free to customize the StarterGuide's CSS to achieve the proper look and feel for your style guide.

## Example Code
The following is a code snippet taken from the demo files to show how you would add sections to your style guide HTML. Any content that should be included in the style guide should be inside a `.guide-wrapper`, with each section of varying content broken up into `&lt;section&gt;` tags. The default settings look for the `section > h2` and generate the sidebar navigation based on those. In order to create the code block, the plugin will look for the `.code-wrapper` class, and will generate a code block for the contents inside. If the `.code-wrapper` has a `data-code`, it will apply the syntax highlighting for the specified language. In the example below, the `data-code` is set to `markup`, which uses Prism's HTML syntax highlighting.

```html
<div class="guide-wrapper">
	<section>
		<h2>Buttons</h2>
<div class="code-wrapper" data-code="markup">
<button class="button">Button</button>
<button class="button success">Success Button</button>
</div>
	</section>
</div>
```

> It's important to note that the `.code-wrapper` and its contents are not indented. Any indents will be shown in the code block, so you will want to flush everything to the left, and indent from there.

## Questions? Comments? Issues?
You can use the Issues tab to the right to leave questions, bug lists, or feature requests. You can also tweet any comments at [@kaocleyra](http://twitter.com/kaocleyra). Thanks for checking this out!

> Current stable build: v1.0
