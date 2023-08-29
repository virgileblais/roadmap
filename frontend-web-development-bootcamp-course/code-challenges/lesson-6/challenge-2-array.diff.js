/*
CHALLENGE:
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

/*ANSWER:
I had trouble understanding the logic involve with 'filter()', specifically I assumed that it involved an equality check while it instead invovled an inequality check.

For example:
    Equality:
        Filter all values from list a, if 'list b contains item from list a' is true.
vs.
    Inequality:
        Filter all values from list a, if 'list b contains item from list a' is NOT true.

Upon reading the documentation, I realized this and reversed the logic in my filter function via '!'.
*/

function arrayDiff(a, b) {
    return a.filter(listItem => !b.includes(listItem))
}

//ANSWER is CORRECT