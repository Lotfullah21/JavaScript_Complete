<h4>this<h4>
<p>left of the dot should be an object so that this can point to that object.</p>
<p>in Regular functions not like arrow function, if <code>this<code> is called by an object, it will point to that object, if <code>this</code> called by a regular function, it will point to a global object which is the window object here.</p>

<code>

function show(){
console.log(this)
}

const afg={
name:"Afghanistan",
region:"Asia",
show:show,
}
const ind={
name:"India",,
region:"South Asia",
show:show,
}

ind.show() // points to ind object.
afg.show() // points to afg object.

<p>objects should be always on the left side of the function we are invoking.</p>
show() // points to a global boject.
</code>
