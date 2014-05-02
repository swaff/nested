nested
=====

Allows get and set access on POJOs using dot notation to safely go down the object hierarchy.

Get
---

    var tree = {
    	type: 'Maple',
    	size: 'large',
    	branch: {
    		size: 'large',
    		leaf: {
    			size: 'large'
    		}
    	}
    };

    console.log(learn.nested.get('branch.leaf.size', tree));
    // output: large

Set
---

    learn.nested.set('type', 'Crabapple', tree);
    learn.nested.set('branch.leaf.size', 'small', tree);

    console.log(tree.type);
    // output: Crabapple

    console.log(tree.branch.leaf.size);
    // output: small
