&ensp;``null`` means that there is no value, and ``undefined`` means that the value is unknown or not specified; <br>
_Clarify undefined and null conventions on the project. Often they are not recorded on paper, but they are of great importance._

> * &ensp; ``const truthyValue = true;`` - 'text'
> * &ensp; ``const falsyValue = false;`` - "...", (), 0, null, undefined, NaN, 0n
> > &ensp;Operator ``&&`` converts all operands to **boolean** and returns: **left operand** - if it can be converted to **false**, and the **right operand** - in other cases. That is, the logical **AND** stops at false and returns it, or returns the last operand. <br>
> > &ensp;Operator ``||`` converts all operands to **boolean** and returns: **left operand** - if it can be converted to **true**, and the **right operand** - in other cases. That is, logical **OR** stops at truth and returns it or returns the last operand. <br>
> > &ensp;Operator ``!`` converts the operand to **boolean** if necessary, and then inverts - changes true -> false or false -> true.



