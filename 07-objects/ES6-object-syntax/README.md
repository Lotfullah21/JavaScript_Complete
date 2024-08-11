<h2>Prototypep</h2>
<p>every built-in object in javaScript has a property called "Prototype".
the Prototype itself is an object, so it creates a chain of Prototype and return an object.
in fact prototypes are the mechanism by which javascript objects inherits property from each other</p>
<p>every constructor(function/class) has a prototype property that is shared among all instance of that costructor.</p>
<p>object instance has the property which also defined by prototype,it will take the one which has been difined inside the object, if not there then it will look outside if it is there in property
</p>
<p>in fact prototypes are the mechanism by which javascript objects inherits property from each other</p>
<p>methods and properties of arrays or objects are stored in their prototype, not in the instances, everything in javascript is constructed using object constructor.
in prototype, usually we add common methods for objects and inside the constructor we add the data property.</p>
<span><code>Object.getPrototypeOf(myObject)</code></span><p> is the end of prototype chain where there is no method and the value is null</p>
<h2>Property Lookup</h2>
<p>if the instance has a property and we have the same property in our prototype, the instance property weill over write the prototype property, because once we execute the programm, javascript engine will first look into instance, if it does not have that property,then it will loopup in Protoype chain.</p>

<code>
function Country(name, population) {
  this.name = name;
  this.pastCal = population;
  this.place = "Asia"
  this.present;
}
Country.prototype.place = "on Earth";

const afg = new Country("Afghanistan", 12000);
console.log(afg.place); // Asia.
</code>

<h2>Property propert</h2>
<p>once we instantiate an array object, we have access to those properties through prototypes.
in javascript, everything leads back to object.</p>
