# coursera-test
HTML, CSS3, Javascript for web developers

## Developer Tools
Stackoverflow
jsfiddle.net 
codepen.io ( use console like browser)
css-tricks.com

## Tracking development
W3C
W3C validation ( check validation of HTML page )
icanuse.com
w3school.com

## HTML character Entity References
<   [ &lt;  ]
>   [ &gt;  ]
&   [ &amp; ]
copyright symbol   [ &copy;  ]
not breaking space  [  &nbsp;  ]
"      [  &quot;  ]

## comobined css selector
p.big {property:value;} ( every p that has class="big" )
child selector:
article > p {property:value;} ( every p direct child elements have affected )
Descendent selector:
article p {property:value} ( every p that is inside at any level of article )

## Pseudo-class selector

### general syntax 
	selector:pseudo-class
1. :link
2. :visited
3. :hover
4. :active
5. :nth-child(...)

## Conflict Resolution
1. Origin precedence ( when in conflict )
	rule: last declaration wins

2. Origin precedence ( when no conflict )
	rule: declarations Merge

3. Inheritance ( DOM Tree ) 
	e.g. body {property:value} (affect all child and grand-child)

4. specificity
	rule: most specific selector combination wins
	style -> id -> class,pseudo-class, number of elements. 

## Background property
 color, repeat, image, position

## Position Elements by floating
 floating elements can produce very flexible layouts
 floats are taken out of normal document flow
 floats don't have vertical margin collapse
 to resume normal document flow, use the clear property

 ## Relative and Absolute Element positioning
  Static positioning : Normal document flow (default for all, except html)
  Reletive positioning: Element is positioned relative to its position in normal document flow.

