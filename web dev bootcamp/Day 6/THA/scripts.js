
//Problem 1
function is_array(arr){
	return Array.isArray(arr);
}

console.log(is_array("Hello World"));
console.log(is_array([1,2,3,4,5]));

//Problem 2
function array_clone(arr){
	return arr.slice(0);
}

console.log(array_clone([1,2,3,4,5,6]));

console.log(array_clone([1,2,3,[1,2,3],[5,6,7],9]));


//Problem 3
function first(arr, n){
	if(n>0)
		return arr.slice(0,n);
	
	else if(n==0)
			return arr[0];
		else
			return arr.slice(0,0);
	}


console.log(first([1,2,3,4,5],1));
console.log(first([],4));
console.log(first([1,2,3,4,5],3));
console.log(first([1,2,3,4,5],7));
console.log(first([1,2,3,4,5],-2));



//Problem 4
function concat_with_comma(arr){
	return arr.join(",");
}
function concat_with_plus(arr){
	return arr.join("+");
}


console.log(concat_with_comma(["Red", "Green", "White", "Black"]));
console.log('"'+concat_with_comma(["Red", "Green", "White", "Black"])+'"');
console.log('"'+concat_with_plus(["Red", "Green", "White", "Black"])+'"');