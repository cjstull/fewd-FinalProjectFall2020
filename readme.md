This site is a prototype for Wisconsin Cheese. 

The Project is built mobile first:
There are base styles in the CSS code that apply to all screens (starting with mobile first). The Media Queries then adjust the layout of the navigation and footer menu at 700 and 992px.
The header displays as block as the default, then display flex and flex-direction: column once the viewport hits 700px, and then flex-direction: row and justify content: space-between at 992px and larger.

The CSS Feature(s) that this project uses are as follows:
1) A navigation menu that expands and collapses properly at desktop and mobile sizes. 
    i) The nav menu on mobile uses flex-direction: Column
    ii) The nav menu at the higher media queries - specifically 992px use Flex-direction: Row  

2) Flexbox was also used on the footer

Other features include:
    1) The footer links have code to open the links in new pages
    2)