### 1. It is standard to wrap the HTML document in specific tags to show that it is a HTML document. Write the tag that is used for this purpose.

```html
<html> <!--the html element encloses the entire>
</html>
```

### 2. In HTML there is a tag which has inside it all of the metadata about the site, like links to CSS and site title that is meant only for the browser. There is also a tag that contains all of the content that is shown to the sites visitors by the browser. Write the tag that is used for metadata and the tag that is used for the visible content.

```html
<html>
  <head>
    <!--head is used for meta-data-->
  </head>
  <body>
    <!--Body is used for the visible structure of the website-->
  </body>
</html>
```

### 3. Write the basic structure of a html document with utf-8 defined as the character set and with title “My first site”. Remember the correct indentation.

![Alt text](image.png)

### 4. Sometimes it’s nice to have comments in your code that are visible in the code editor. Write the syntax for HTML comment with the text “test comment”. 1 Text formatting

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My first site!</title>
  </head>
  <body>
    <p>paragraf</p>
    <!--This is a comment on my first site-->
  </body>
</html>
```

### 5. The titles in our websites come in all different styles and sizes. Write the tags for level 1, 3, and 6 headings.

```html
<h1>This is the biggest heading</h1>
<h3>This is the middle heading</h3>
<h6>This is the smallest heading</h6>
```

### 6. Websites also have a lot of text in different places so it’s important to know which tags to use for text in HTML. Write the tag that is used for text paragraphs.

```html
<p>P stands for paragraph</p>
```

### 7. Lists are an usefull way to display information on your website. Write the structure for ordered and unordered lists with “First item” and “Second item”.

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>

<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>
```

### 8. Lists can be also very versitile and can be used in many different ways. Write an ordered list with “First item”, “Second item” and “Third item” and an unordered list indented after “Second item” with two “Indented item” items.

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
    <ul>
        <li>First item</li>
        <li>Second item</li>
    </ul>
  <li>Third item</i>
</ol>
```

### 9. Links are also important part of the web desing. You can use them to navigate your

own website and also connect your website to other websites. Write a link that opens a
new tab and leads into Google.com with the text “Link to Google”.
Images and videos

### 10. Most webpages have images so it’s good to know how to add images in HTML. Write the

tag that is used to add images. If you want to try this out in a HTML document you can
use “https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flower_poster_2.jpg/1200pxFlower_poster_2.jpg” (Picture of some flowers) for example, as the image source. You
can scale the picture with width and height (in pixels).

### 11. Videos have become more prevelent on the web and many websites also have some video

content. Write the tag to add embedded videos to a website.
2
Tables

### 12. Tables are another useful way to display information for your users. Write the tag that

encloses the whole table, the tag that encloses a row, the tag for headers and the tag for
table cell.

### 13. Let’s first create a simple table. Write a table with two headers: “Title 1” and “Title

2”, first row: “Item 1” and “Item 2”, second row: “Item 3” and “Item 4”.

### 14. Then we can try to create more complicated table to see how to use different features of

tables. Recreate above table.
Hint: You change how many rows or columns a cell spans by adding rowspan or colspan to
th or td tag. You can add borders by adding “style=‘border: 1px solid black; border-collapse:
collapse;’ ” to the table tag and “style=‘border: 1px solid black;’ ” to th and td tags.
This table is not the best way to display this information, because it might be confusing for
anyone using a screen reader, but we will come back to these kinds of issues when we talk
more about accessibility of websites.
3
Forms
Forms are important part of web development. They give you a way to interact with user
data, but also opens your site to security problems that you have to take into account. Right
now we will focus on how to create a basic form that user can use to input some data.
In these tasks you can use this web form tutorial as help if you need it.

### 15. Let’s start with the basic tags for web forms. Write the tag that encloses the form, the

tag for input label and tag for the input.

### 16. HTML gives you tools to tell what kind of information should go into different inputs.

Write tag for input that is meant for email type input.

### 17. Now we can create a basic form. Write a form with labels and input boxes for “Name:”,

“Email:” and “Phone:”.
Hint: You can use <br> as line break.

### 18. The form needs also submit functionality so that user can submit their information.

Add a basic submit button to the form you just made.

### 19. Sometimes you might want to give user ability to write longer texts in the input. Add a

multiline text area with the label “Message:” under the “Phone”.

### 20. Check through the HTML5 input types so that you know how versitile the input tag can

be.
4
Applying what we’ve learned

### 21. Create a HTML document for a website:

Head:
• Character set should be utf-8
• Title should be “Jack and Jill’s Kennel”
Body:
• Level one heading: “Jack and Jill’s Kennel”
• Image: “https://dogexpress.in/wp-content/uploads/2016/04/Happy-Dog-Parents1-
660x330.jpg” as image source
• Text: “Welcome to the Jack and Jill’s kennel website, where we offer the best
labrador puppies in the world!”
• Level two heading: “Available puppies”
• Text: “Male puppies”
• Unordered list with elements: “Bud, 8 weeks”, “Chuck, 8 weeks”, “Colby, 8 weeks”
and “Fido, 8 weeks”
• Text: “Female puppies:”
• Unordered list with elements: “Bindi, 8 weeks”, “Bubbles, 8 weeks”, “Cotton, 8
weeks”, “Harmony, 8 weeks” and “Tootsie, 8 weeks”
• Table:
– Title row: first cell is empty, followed by 9 cells with the dog names
– First row: Availability status, Available, Available, Available, Available, Available, Available, Available, Available, Available
– Second row: Personalities, Rowdy, Playful, Sleepy, Little bit bossy, Full of
energy, Likes to play, Rowdy and playful, Stubborn, Playful
• Level two heading: “Contact us!”
• Text: “Phone: +123456789”, number part as a link with href=“#”
• Text: “Email: JJKennel@Kennel.com”, email part as a link with href=“#”
• Contact form: Name, Email, Phone, Message and Submit button
5
