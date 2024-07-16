---
title: "Markdown Elements Reference"
date: 2024-07-16
draft: true
tags: ["markdown", "hugo", "example"]
---

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

---

**Bold text**

_Italic text_

**_Bold and italic text_**

---

> This is a blockquote.

---

1. First item in an ordered list
2. Second item in an ordered list
3. Third item in an ordered list

---

- First item in an unordered list
- Second item in an unordered list
- Third item in an unordered list

---

`Inline code`

```
Code block
```

```python
# Python code block
def hello_world():
print("Hello, world!")
```

---

[Link to Hugo](https://gohugo.io/)

![Alt text for an image](https://via.placeholder.com/150)

---

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

---

Term
: Definition of the term

---

1. First level ordered list
   - Nested unordered list item
   - Nested unordered list item
     1. Nested ordered list item
     2. Nested ordered list item

---

- [ ] Unchecked task
- [x] Checked task

---

Here is some `inline code` and a horizontal rule below.

---

Horizontal rule

---

Here is an embedded YouTube video:

{{< youtube w7Ft2ymGmfc >}}

---

Here is a footnote reference[^1].

[^1]: Here is the footnote.

---

Here's some ~~strikethrough text~~.

---

This is a [relative link](../another-page/).

---

## Shortcodes

### Highlight shortcode

{{< highlight html >}}

<p>This is a paragraph.</p>
{{< /highlight >}}

### Figure shortcode

{{< figure src="https://via.placeholder.com/300" title="Placeholder Image" >}}
