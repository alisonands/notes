// Source - https://stackoverflow.com/a
// Posted by Lance, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-20, License - CC BY-SA 3.0

n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;