// Type definitions for socket.io-client 1.4.4
// Project: http://socket.io/
// Definitions by: PROGRE <https://github.com/progre/>, Damian Connolly <https://github.com/divillysausages/>, Florent Poujol <https://github.com/florentpoujol/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var _: UnderscoreStatic;

declare module 'underscore' {
	export = _;
}

interface UnderscoreStatic {

	each(obj, iteratee?:any, context?:any):any;
	forEach(obj, iteratee?:any, context?:any):any;
	map(obj, iteratee?:any, context?:any):any;
	collect(obj, iteratee?:any, context?:any):any;
	reduce():any;
	foldl():any;
	inject():any;
	reduceRight():any;
	foldr():any;
	find(obj, predicate?:any, context?:any):any;
	detect(obj, predicate?:any, context?:any):any;
	filter(obj, predicate?:any, context?:any):any;
	select(obj, predicate?:any, context?:any):any;
	reject(obj, predicate?:any, context?:any):any;
	every(obj, predicate?:any, context?:any):any;
	all(obj, predicate?:any, context?:any):any;
	some(obj, predicate?:any, context?:any):any;
	any(obj, predicate?:any, context?:any):any;
	contains(obj, target?:any, fromIndex?:any):any;
	includes(obj, target?:any, fromIndex?:any):any;
	include(obj, target?:any, fromIndex?:any):any;
	invoke(obj, method?:any):any;
	pluck(obj, key:any):any;
	where(obj, attrs:any):any;
	findWhere(obj, attrs:any):any;
	max(obj, iteratee?:any, context?:any):any;
	min(obj, iteratee?:any, context?:any):any;
	shuffle(obj):any;
	sample(obj, n, guard):any;
	sortBy(obj, iteratee:any, context:any):any
	groupBy(list, iteratee:any, context:any):any;
	indexBy(list, iteratee:any, context:any):any;
	countBy(list, iteratee:any, context:any):any;
	toArray(obj):any;
	size(obj):any;
	partition(obj, predicate?:any, context?:any):any;
	take(array, n?:any, guard?:any):any;
	first(array, n?:any, guard?:any):any;
	head(array, n?:any, guard?:any):any;
	initial(array, n?:any, guard?:any):any;
	last(array, n?:any, guard?:any):any;

	rest(array, n?:any, guard?:any):any;
	tail(array, n?:any, guard?:any):any;
	drop(array, n?:any, guard?:any):any;

	compact(array):any;
	flatten(array, shallow?:any):any;
	without(array):any;
	uniq(array, isSorted?:any, iteratee?:any, context?:any):any;
	unique(array, isSorted?:any, iteratee?:any, context?:any):any;
	union():any;
	intersection(array):any;
	difference(array):any;
	zip():any;
	unzip(array):any;
	object(list, values:any):any;
	indexOf(array, item, isSorted?:any):any;
	lastIndexOf(array, item, from?):any;
	findIndex():any;
	findLastIndex():any;
	sortedIndex(array, obj, iteratee?, context?):any;
	range(start, stop?, step?):any;
	bind(func, context?):any;
	partial(func):any;
	bindAll(obj):any;
	memoize(obj):any;
	delay(func,wait):any;
	throttle(func, wait, options?):any;
	debounce(func, wait, immediate?):any;
	wrap(func, wrapper?):any;
	negate(predicate?):any;
	compose():any;
	after(times, func):any;
	before(times, func):any;
	once(func):any;
	keys(obj):any;
	allKeys(obj):any;
	values(obj):any;
	mapObject(obj, iteratee?, context?):any;
	pairs(obj):any;
	invert(obj):any;
	methods(obj):any;
	findKey(obj, predicate?, context?):any;
	pick(obj, oiteratee?, context?):any;
	omit(obj, iteratee?, context?):any;
	clone(obj):any;
	tap(obj, interceptor?):any;
	isMatch(object, attrs):any;
	isEqual(a,b):any;
	isEmpty(obj):any;
	isElement(obj):any;
	isArray(obj):any;
	isObject(obj):any;
	isFinite(obj):any;
	isNaN(obj):any;
	isBoolean(obj):any;
	isNull(obj):any;
	isUndefined(obj):any;
	has(obj,key):any;
	//noConflict(); 
	identity(value):any;
	constant(value):any;
	noop():any;
	property(key):any;
	propertyOf(obj):any;
	matcher(attrs):any;
	matches(attrs):any;
	times(n, iteratee?, context?);
	random(min,max):any;
	now():any;
	escape(str):any;
	unescape(str):any;
	result(object, property?, defaultValue?):any;
	uniqueId(prefix):any;
	chain(obj):any;
	mixin(obj):any;
}
