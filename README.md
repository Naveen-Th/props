# React Child-to-Parent Communication
In React, child-to-parent communication happens when a child component needs to send data or trigger a function in the parent component. This can be achieved by **passing a function from the parent to the child** as a prop, which the child can then call with the data it needs to send back to the parent.

> [!IMPORTANT]
> How Child-to-Parent Communication Works.

1.**Parent Component**defines a function.
2.**Parent passes the function as a prop**o the child component.
3.**Child Component**calls this function when an event happens, passing the data back to the parent.

> [!TIP]
> You can enhance this example by using **Context API** if you need a more complex or deeply nested structure.
