# util-toolkit

Provide some functions that handle data

## Get Started
Use npm to install: `npm install --save util-toolkit`

##API
###getExtraMenu
**params**:
	menuData: Array
	stairMenu: String
	secondMenu: String
	type: String
**returns**  {Array}

```javascript
let menuData = [{
	'key': 'stairMenu',
	'sub':[{
		'key': 'secondMenu',
		'oprs': [{
			'key': 'opr-one',
			....
		}]
	}]
	}];

	//return [{'key': 'opr-one, ...}]
	 getExtraMenu(menuData, 'stairMenu', 'secondMenu', 'oprs');
```


###getOprMenu
**params**:
	status: String
	oprsMap: Array
	menuMap: Array
**returns**  {Array}

```javascript
let menuMap = [{
	start: {...},
	stop: {...}
	pause: {...}
}];
let oprsMap = [
	{key: 'start', permission: 'ok' ...},
	{key:'pause', permission: '*'},
	{key: 'stop', permission: 'no'...}
	...
];

	/**
	return [
		{key: 'start',..},
		{key:'pause', ..},
	]
	**/
	 getExtraMenu('ok', oprsMap, menuMap);
```

###classifyProject
**params**:
	preProjectList: Array
**returns**  {Array}

```javascript
let preProjectList = {
	entities: {
		projects: {
			1: {
				cloud: {cloudId: 2,cloudName: 'test'...}
				cloudId: 2,
				....
			}
		}
	},
	result: [1]
};

	/**
	return [
		{cloudId:2,cloud: 'test',project: {}},
	]
	**/
	 classifyProject(preProjectList);
```

